import { useEffect, useState } from "react";
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
// import { getCategories } from "../../api/get-categories";
// import { getItems } from "../../api/get-items";
import styles from "./home.module.css";
import axios from "axios";
import videoBg from "../../assets/videos/home_background.mp4"
import { Link } from "react-router-dom";


async function getUser() {
  try {
    const response = await axios
      .get(
        "https://api.escuelajs.co/api/v1/products/?price_min=500&price_max=1200"
      );
    return response;
  } catch (error) {
    console.error(error);
  }
}

function Home() {
  const [productsPrice, setProductsPrice] = useState([]);
  console.log(productsPrice);

  const displayItems = async () => {
    const response = await getUser();
    if (response) {
      setProductsPrice(response.data);
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
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia facilis nisi quod ex.
              Vel ullam voluptatum neque rem voluptates laudantium ut praesentium accusamus consectetur architecto beatae, eum tempore dignissimos nisi,
              quam sit excepturi debitis perferendis pariatur maxime autem quaerat. Optio vel nobis,
              suscipit animi nihil debitis impedit possimus voluptatum corporis quis odio unde numquam excepturi nulla quo harum doloribus. Maiores amet,
              perferendis aperiam ab est omnis rem possimus dolorem porro a libero voluptates vero! Perspiciatis, doloremque aliquam nostrum reiciendis eligendi ab sed,
              asperiores fugit sunt adipisci impedit? Totam, earum. Ipsam, quis officia, iure, ab rerum eos nulla ad possimus perspiciatis itaque libero neque optio delectus veniam adipisci fuga commodi dignissimos.
              Tenetur, provident ipsa. Numquam illo nihil dolore culpa laborum harum exercitationem odit reprehenderit delectus,
              ipsam ex laboriosam magnam minus nesciunt a modi fuga cum cupiditate sequi placeat possimus? Ratione quidem explicabo delectus vero enim unde odio blanditiis reiciendis tempore,
              aspernatur incidunt, praesentium quis sed fugit esse cum beatae vitae! Adipisci dolorum tempore quaerat cum magni ducimus culpa cupiditate vero expedita doloremque quo assumenda est iure totam cumque laudantium nisi nemo dolore officiis,
              vitae, illo eum amet? Sapiente, blanditiis maiores quas vel laudantium rerum, rem ipsum laborum dolores distinctio quam eligendi?</p>
          </div>
        </div>



        <h1>Top products</h1>


        <div className={styles.categories_main}>
          {productsPrice.map((productsPrice) => (
            <div key={productsPrice.id}>

              <div className={styles.categories}>
                <div className={styles.card_top}>
                  <img src={productsPrice.images} alt="" style={{ width: "200px" }} />
                  <p>{productsPrice.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2>Categoires</h2>


        <div className={styles.categories_cards}>

          <Link to="/catalog1" className={styles.w}>
            <a >
              <img src="https://i.imgur.com/QkIa5tT.jpeg" alt="card1" width="150px" />
              <p>Clothes</p>
            </a>
          </Link>

          <Link to="/catalog2" className={styles.w}>
            <a >
              <img src="https://justfields.com/storage/projects/7M5rV059/cd_1_flat.jpg" alt="card2" width="150px" />
              <p>Projects</p>
            </a>
          </Link>
          <Link to="/catalog3" className={styles.w}>
            <a >
              <img src="https://i.imgur.com/Qphac99.jpeg" alt="card3" width="150px" />
              <p>Furniture</p>
            </a>
          </Link>
          <Link to="/catalog4" className={styles.w}>
            <a>
              <img src="https://i.imgur.com/qNOjJje.jpeg" alt="card4" width="150px" />
              <p>Shoes</p>
            </a>
          </Link>
          <Link to="/catalog5" className={styles.w}>
            <a>
              <img src="https://i.imgur.com/BG8J0Fj.jpg" alt="card5" width="150px" />
              <p>Miscellaneous</p>
            </a>
          </Link>
        </div>
      </div>


      <Footer />
    </>
  );
}

export default Home;
