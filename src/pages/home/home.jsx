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
        "https://api.escuelajs.co/api/v1/categories?offset=0&limit=5"
      );
    return response;
  } catch (error) {
    console.error(error);
  }
}



function Home() {
  const [categories, setCategories] = useState([])

  const displayItems = async () => {
    const response = await getUser();
    if (response) {
      setCategories(response.data);
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


        <div className={styles.catalog}>
          <div className={styles.catalog_content}>
            <h1>Categories</h1>
          </div>
          <div className={styles.categories_main}>
            {categories.map((categories) => (
              <Link key={categories.id} to={`/catalog/${categories.id}`} className={styles.link}>
                <div key={categories.id}>
                  <div className={styles.categories}>
                    <img src={categories.image} alt="" style={{ width: "200px" }} />
                    <div className={styles.categories_bottom}>
                      <p>{categories.name}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
