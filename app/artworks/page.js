import styles from "../page.module.css"
import Image from "next/image"
import Link from 'next/link'
import note from "../assets/note2.png"
import wallItem from "../assets/wall_item1.png"
import "bootstrap/dist/css/bootstrap.min.css"

export default function artworks() {
    return (
        <>
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
                    <span
                        style={{ color: "#a45409", fontSize: 70 }}

                    >UNDER DEVELOPMENT</span>

                    {/* <ProjectModal title="SPORTIFY" github="https://github.com/AditiNarkar/Sportify" image={'CCMS/homeMain.png'} />
                        <ProjectModal title="Local-Karobar" github="https://github.com/AditiNarkar/Local-Karobar" image={'LocalKarobar/home1.png'} />
                    */}

                </div>
            </div >
        </>
    )
}