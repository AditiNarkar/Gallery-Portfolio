'use client'

import Image from "next/image";
import Link from 'next/link'
import styles from "../app/page.module.css";
import note from "../app/assets/note2.png"
import wallItem from "../app/assets/wall_item1.png"
import "bootstrap/dist/css/bootstrap.min.css"
import ProjectModal from "./ProjectModal";
import PopOver from "./PopOver";

export default function HomeArt() {
    return (
        <>
            <PopOver />

            <div style={{ width: "2500px", height: "2500px" }}>

                <div className={styles.menuHolder}>
                    <Image className={styles.paper} src={note} alt="" />
                    <Image className={styles.holder} src={wallItem} alt="" />
                    <div className={styles.projects}>
                        <Link style={{ color: "#734820", textDecoration: "none" }} href="/">UI Projects</Link>
                    </div>
                    <div className={styles.paintings}>
                        <Link style={{ color: "#a45409", textDecoration: "none" }} href="/artworks"> Art Works </Link>
                    </div>
                    <button className={styles.button85} role="button" onClick={() => window.open("https://aditi-narkar.netlify.app/", "_blank")}>
                        Portfolio
                    </button>
                    <button style={{ top: 270 }} className={styles.button85} role="button" onClick={() => window.open("https://forms.gle/tmZcMUmiN7P73kAW9", "_blank")}>
                        Fill Enquiry Form
                    </button>
                </div>


                <div className={styles.myContainer}>
                    {/* <span
                        style={{ color: "#a45409", fontSize: 70 }}

                    >UNDER DEVELOPMENT</span> */}

                    <div className={styles.gallery}>
                        <div className={styles.column}>
                            <ProjectModal title="Posters" github="" image={'My Art/Poster/monochrome.jpg'} />
                            <ProjectModal title="Wall" github="" image={'My Art/Wall/door.jpg'} />
                        </div>

                        <div className={styles.column}>
                            <ProjectModal title="Pastels" github="" image={'My Art/Pastels/vintage_still.jpg'} />
                            <ProjectModal title="Rangoli" github="" image={'My Art/Rangoli/3.jpg'} />
                        </div>

                        <div className={styles.column}>
                            <ProjectModal title="Fabric" github="" image={'My Art/Fabric/woman-dark.jpg'} />
                            <ProjectModal title="Mehendi" github="" image={'My Art/Mehendi/5.jpg'} />
                        </div>

                        <div className={styles.column}>
                            <ProjectModal title="Pot" github="" image={'My Art/Pot/RJ.jpg'} />
                        </div>

                        <div className={styles.column}>
                            <ProjectModal title="Sketches" github="" image={'My Art/Sketches/RJ.jpg'} />
                        </div>

                    </div>

                </div>
            </div >
        </>
    )
}