import styles from "../app/page.module.css"
import Image from "next/image"
import note from "../app/assets/note2.png"
import wallItem from "../app/assets/wall_item1.png"

export default function MenuHeader({ active }) {
    if (active == "project") {
        return (
            <div className={styles.menuHolder}>
                <Image className={styles.paper} src={note} alt="" />
                <Image className={styles.holder} src={wallItem} alt="" />
                <div style={{ color: "#a45409" }} className={styles.projects}>projects</div>
                <div className={styles.paintings}>art works</div>
            </div>
        )
    }

    else {
        return (
            <div className={styles.menuHolder}>
                <Image className={styles.paper} src={note} alt="" />
                <Image className={styles.holder} src={wallItem} alt="" />
                <div className={styles.projects}>projects</div>
                <div style={{ color: "#a45409" }} className={styles.paintings}>art works</div>
            </div>
        )
    }

}