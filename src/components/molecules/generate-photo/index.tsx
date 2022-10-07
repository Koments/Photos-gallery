import Modal from "react-modal";

import { useEffect, useState } from "react";
import { SettedPhoto } from "../../atoms/generate-photo";
import { getRandomPhoto } from "../../utils/api";
import { InputForNum, NumGenerator, RandomPhotoContainer, RandomPhotoOptions, SearchPhotoByNum } from "./styled-components";
import { RenderModal } from "../../atoms/modal";
import { customStyles } from "../modal-styles";
import { openModal } from "../../utils/utils";

Modal.setAppElement("#root");

export function RandomPhoto() {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [photo, setPhoto] = useState();
    const [num, setNum] = useState(1);
    const [inputNum, setInputNum] = useState(0);

    function getRandomArbitrary(min: number, max: number) {
        const randomNum = Math.round(Math.random() * (max - min) + min);
        setInputNum(randomNum);
        setNum(randomNum);
    }

    useEffect(() => {
        async function getPhotosData() {
            let result = await getRandomPhoto(num);

            setPhoto(result);
        }

        getPhotosData();
    }, [num]);



    if (!photo) {
        return (
            <NumGenerator onClick={() => getRandomArbitrary(0, 1000)}>Generate photo</NumGenerator>
        )
    }

    function closeModal() {
        setIsOpen(false);
    }

    function changeNum(num: any) {
        if (num.target.value >= 1084) {
            setInputNum(1084);
            setNum(1084);
        } else {
            setInputNum(num.target.value);
            setNum(parseInt(num.target.value));
        }
    }; // Printing a given number and adding it to input

    return (
        <RandomPhotoContainer>
            <RandomPhotoOptions>
                <NumGenerator onClick={() => getRandomArbitrary(0, 1000)}>Generate photo</NumGenerator>
                <SearchPhotoByNum>
                    Set any num (between 0 and 1084):
                    <InputForNum type="number" value={inputNum} onChange={changeNum} />
                </SearchPhotoByNum>
            </RandomPhotoOptions>
            <SettedPhoto
                photo={photo}
                openModal={() => setIsOpen(openModal())}
            />
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <RenderModal photo={photo} />
            </Modal>
        </RandomPhotoContainer>
    )

}