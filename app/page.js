// import Image from "next/image";
// import Link from 'next/link'
// import styles from "./page.module.css";
// import note from "./assets/note2.png"
// import wallItem from "./assets/wall_item1.png"
// import ProjectModal from "../components/ProjectModal";
// import PopOver from "../components/PopOver";
// import "bootstrap/dist/css/bootstrap.min.css"

import dynamic from 'next/dynamic'

const DynamicHome = dynamic(() => import('../components/Home'), {
  ssr: false,
})

export default function Home() {
  return <DynamicHome />
}