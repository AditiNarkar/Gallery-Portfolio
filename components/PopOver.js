'use client';

import { Akshaypatra, FoodApp, JavaChatApp, LK, SoulSpeak, Sportify, Alberta } from "../filenames/filenames";

import { useEffect, useState } from "react";
import Slider from "./Slider";
import { popOverStore } from "../stores/popOverStore";

export default function PopOver() {
    const title = popOverStore(state => state.title)
    const github = popOverStore(state => state.github)

    const [images, setImages] = useState(null);

    useEffect(() => {
        switch (title.toLowerCase()) {
            case 'sportify': setImages(Sportify); break;
            case 'local-karobar': setImages(LK); break;
            case 'foodapp': setImages(FoodApp); break;
            case 'akshaypatra': setImages(Akshaypatra); break;
            case 'soulspeak': setImages(SoulSpeak); break;
            case 'javachatapp': setImages(JavaChatApp); break;
            case 'gitstake': setImages(null); break;
            case 'alberta': setImages(Alberta); break;
            case 'fabric': setImages(Fabric); break;
            case 'mehendi': setImages(Mehendi); break;
            case 'pastels': setImages(Pastels); break;
            case 'posters': setImages(Posters); break;
            case 'pot': setImages(Pot); break;
            case 'rangoli': setImages(Rangoli); break;
        }
    }, [title])

    return (

        <div className="modal modal-lg" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div style={{ backgroundSize: "cover", backgroundImage: "url('frameBg2.jpeg')" }} className="modal-content">
                    <div className="modal-header" style={{ gap: 10 }}>
                        <h5 style={{ color: "#734820" }} className="modal-title" id="exampleModalLongTitle">{title}</h5>
                        {
                            (github !== "")
                                ?
                                <button type="button" class="btn btn-dark">
                                    <a style={{ textDecoration: "none" }} href={github}>Github</a>
                                </button>
                                :
                                <></>
                        }

                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>

                    </div>
                    <div className="modal-body">
                        {
                            (images)
                                ?
                                <Slider images={images} />
                                :
                                <div>Ongoing...</div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}