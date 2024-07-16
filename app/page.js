import Image from "next/image";
import Link from 'next/link'
import styles from "./page.module.css";
import note from "./assets/note2.png"
import wallItem from "./assets/wall_item1.png"
import ProjectModal from "../components/ProjectModal";
import PopOver from "../components/PopOver";
import "bootstrap/dist/css/bootstrap.min.css"

export default function Home() {

  return (
    <>
      <PopOver />
      <div style={{ width: "2500px", height: "2500px" }}>

        <div className={styles.menuHolder}>
          <Image className={styles.paper} src={note} alt="" />
          <Image className={styles.holder} src={wallItem} alt="" />
          <div className={styles.projects}>
            <Link style={{ color: "#a45409", textDecoration: "none" }} href="/">projects</Link>
          </div>
          <div className={styles.paintings}>
            <Link style={{ color: "#734820", textDecoration: "none" }} href="/artworks"> art works </Link>
          </div>
          <button className={styles.button85} role="button">
            <a style={{ textDecoration: "none", color: "rgb(174, 101, 28)" }} href="https://aditi-narkar.netlify.app/" >Portfolio</a>
          </button>
        </div>


        <div className={styles.myContainer}>

          <div className={styles.gallery}>
            <div className={styles.column}>
              <ProjectModal title="SPORTIFY" github="https://github.com/AditiNarkar/Sportify" image={'CCMS/homeMain.png'} />
              <ProjectModal title="SoulSpeak" github="https://github.com/AditiNarkar/SoulSpeak-Merged" image={'SoulSpeak/home.png'} />
            </div>

            <div className={styles.column}>
              <ProjectModal title="Local-Karobar" github="https://github.com/AditiNarkar/Local-Karobar" image={'LocalKarobar/home1.png'} />
              <ProjectModal title="GitStake" github="" image={'GitStake/home.jpeg'} />

            </div>

            <div className={styles.column}>
              <ProjectModal title="JavaChatApp" github="https://github.com/AditiNarkar/Java-chat-application" image={'JavaChatApp/login.png'} />
              <ProjectModal title="FoodApp" github="" image={'FoodApp/FoodApp.png'} />
            </div>

            <div className={styles.column}>
              <ProjectModal title="Akshaypatra" github="https://github.com/AditiNarkar/Akshaypatra-merged" image={'Akshaypatra/home.png'} />
              <ProjectModal title="Alberta" github="https://github.com/AditiNarkar/Alberta-Health-Care-with-PHP-ThreeJS" image={'Alberta/home.png'} />

            </div>

          </div>



        </div>
      </div >
    </>
  );
}
