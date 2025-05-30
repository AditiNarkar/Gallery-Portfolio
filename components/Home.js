'use client'

import Image from "next/image";
import Link from 'next/link'
import styles from "../app/page.module.css";
import note from "../app/assets/note2.png"
import wallItem from "../app/assets/wall_item1.png"
import ProjectModal from "./ProjectModal";
import PopOver from "./PopOver";
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
                        <Link style={{ color: "#a45409", textDecoration: "none" }} href="/">UI Projects</Link>
                    </div>
                    <div className={styles.paintings}>
                        <Link style={{ color: "#734820", textDecoration: "none" }} href="/artworks"> Art Works </Link>
                    </div>
                    <button className={styles.button85} role="button" onClick={() => window.open("https://aditi-narkar.netlify.app/", "_blank")}>
                        Portfolio
                    </button>
                    <button style={{ top: 270 }} className={styles.button85} role="button" onClick={() => window.open("https://forms.gle/tmZcMUmiN7P73kAW9", "_blank")}>
                        Fill Enquiry Form
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
                            <ProjectModal title="AuroraScope" github="" image={'AuroraScope/home.png'} />
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
