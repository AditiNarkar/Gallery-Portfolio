import styles from "../page.module.css"
import Image from "next/image"
import Link from 'next/link'
import note from "../assets/note2.png"
import wallItem from "../assets/wall_item1.png"
import "bootstrap/dist/css/bootstrap.min.css"
import ProjectModal from "../../components/ProjectModal"
import PopOver from "../../components/PopOver"

export default function artworks() {
    return (
        <>
            <PopOver />

            <div style={{ width: "2500px", height: "2500px" }}>

                <div className={styles.menuHolder}>
                    <Image className={styles.paper} src={note} alt="" />
                    <Image className={styles.holder} src={wallItem} alt="" />
                    <div className={styles.projects}>
                        <Link style={{ color: "#734820", textDecoration: "none" }} href="/">projects</Link>
                    </div>
                    <div className={styles.paintings}>
                        <Link style={{ color: "#a45409", textDecoration: "none" }} href="/artworks"> art works </Link>
                    </div>
                    <button className={styles.button85} role="button">
                        <a style={{ textDecoration: "none", color: "rgb(174, 101, 28)" }} href="https://aditi-narkar.netlify.app/portfolio.html" >Portfolio</a>
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