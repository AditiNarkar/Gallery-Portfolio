import Image from "next/image";
import styles from "../app/page.module.css"
import floor from "../app/assets/floor.png"
import wall from "../app/assets/wall2.png"
import pot from "../app/assets/pot1.png"
import barrel from "../app/assets/barrel3.png"
import lamp from "../app/assets/lamp.png"
import lamp2 from "../app/assets/lamp2.png"
import table from "../app/assets/table.png"
import candleHolder from "../app/assets/candle-holder.png"
import globe from "../app/assets/globe.png"
import pot2 from "../app/assets/pot2.png"
import pot3 from "../app/assets/pot3.png"
import pot4 from "../app/assets/pot4.png"
import coin from "../app/assets/coin.png"
import coin2 from "../app/assets/coins2.png"
import treasure from "../app/assets/treasure.png"

export default function BackgroundSaman() {
    return (
        <>
            <div>
                <Image className={styles.floor} src={floor} />
                <Image className={styles.wall} src={wall} />
            </div>

            <div className={styles.leftSaman}>
                <Image className={styles.pot1} src={pot} alt="" />
                <Image src={barrel} alt="" className={styles.barrel} />
                <Image src={lamp} alt="" className={styles.lamp} />
                <Image src={lamp2} alt="" className={styles.lamp2} />
                <Image src={table} alt="" className={styles.table} />
            </div>

            <div className={styles.rightSaman}>
                <Image src={barrel} alt="" className={styles.rightBadaBarrel} />
                <Image src={barrel} alt="" className={styles.rightChotaBarrel} />
                <Image src={globe} alt="" className={styles.globe} />
                <Image src={pot2} alt="" className={styles.pot2} />
                <Image src={pot3} alt="" className={styles.pot3} />
                <Image src={pot4} alt="" className={styles.pot4} />
                <Image src={coin} alt="" className={styles.coin} />
                <Image src={coin2} alt="" className={styles.coin2} />
                <Image src={treasure} alt="" className={styles.chest} />
            </div>

            <Image src={candleHolder} alt="" className={styles.candle} />

        </>
    )
}