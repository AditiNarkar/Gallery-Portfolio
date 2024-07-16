'use client';

import { popOverStore } from "../stores/popOverStore"
import styles from "../app/page.module.css";
import { Modal } from 'bootstrap';

export default function ProjectModal({ title, github, image }) {

    const updateTitle = popOverStore((state) => state.updateTitle)
    const updateGithub = popOverStore((state) => state.updateGithub)

    const saveToStore = (e) => {
        updateGithub(github)
        updateTitle(title)
        e.preventDefault();
        const modalElement = document.getElementById('exampleModalCenter');
        const modal = new Modal(modalElement, { backdrop: false, keyboard: true, focus: true });
        modal.show();
    }

    return (
        <>
            <button onClick={saveToStore} className={styles.ModalButton} type="button" data-bs-target="#exampleModalCenter">
                <img
                    style={{
                        // border: "2px solid rgb(181, 130, 36)",
                        maxHeight: 250,
                        borderImage: "url(/frame4.jpeg) 5 5 / auto 30px / 3px round",
                    }}
                    key={image}
                    src={`/${image}`}
                    alt={`Image ${image}`}
                />
            </button>
        </>
    )
}