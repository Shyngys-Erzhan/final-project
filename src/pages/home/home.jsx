import { useEffect, useState } from "react";
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
// import { getCategories } from "../../api/get-categories";
// import { getItems } from "../../api/get-items";
import styles from "./home.module.css";
import axios from "axios";
import videoBg from "../../assets/videos/home_background.mp4"


async function getUser() {
  try {
    const response = await axios.get(
      "https://api.escuelajs.co/api/v1/products?offset=0&limit=30"
    );

    return response;
  } catch (error) {
    console.error(error);
  }
}

function Home() {
  const [products, setProducts] = useState([]);
  console.log(products);

  const displayItems = async () => {
    const response = await getUser();
    if (response) {
      setProducts(response.data);
    }
  };

  useEffect(() => {
    displayItems();
  }, []);


  return (
    <>
      <Header />
      <div className={styles.home}>

        <div className={styles.video_content}>
          <video src={videoBg} autoPlay loop muted />
          <div className={styles.video_text}>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia facilis nisi quod ex. Vel ullam voluptatum neque rem voluptates laudantium ut praesentium accusamus consectetur architecto beatae, eum tempore dignissimos nisi, quam sit excepturi debitis perferendis pariatur maxime autem quaerat. Optio vel nobis, suscipit animi nihil debitis impedit possimus voluptatum corporis quis odio unde numquam excepturi nulla quo harum doloribus. Maiores amet, perferendis aperiam ab est omnis rem possimus dolorem porro a libero voluptates vero! Perspiciatis, doloremque aliquam nostrum reiciendis eligendi ab sed, asperiores fugit sunt adipisci impedit? Totam, earum. Ipsam, quis officia, iure, ab rerum eos nulla ad possimus perspiciatis itaque libero neque optio delectus veniam adipisci fuga commodi dignissimos. Tenetur, provident ipsa. Numquam illo nihil dolore culpa laborum harum exercitationem odit reprehenderit delectus, ipsam ex laboriosam magnam minus nesciunt a modi fuga cum cupiditate sequi placeat possimus? Ratione quidem explicabo delectus vero enim unde odio blanditiis reiciendis tempore, aspernatur incidunt, praesentium quis sed fugit esse cum beatae vitae! Adipisci dolorum tempore quaerat cum magni ducimus culpa cupiditate vero expedita doloremque quo assumenda est iure totam cumque laudantium nisi nemo dolore officiis, vitae, illo eum amet? Sapiente, blanditiis maiores quas vel laudantium rerum, rem ipsum laborum dolores distinctio quam eligendi?</p>
          </div>
        </div>

        <div className={styles.home_container} style={{ display: "flex", flexWrap: "wrap", gap: "30px" }} >
          {products.map((product) => (
            <div key={product.id}>
              <img src={product.images[0]} alt="" style={{ width: "200px" }} />
              <p>{product.title}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Home;
