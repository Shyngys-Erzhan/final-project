import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import styles from "./home.module.css";
import videoBg from "../../assets/videos/home_background.mp4"
import Items from "../../api/get-items";
import Categories from "../../api/get_categories";

function Home() {

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

        <div style={{ margin: "0 auto", maxWidth: "1440px" }}>
          <Categories />
        </div>
        <Items />
      </div>
      <Footer />
    </>
  );
}

export default Home;
