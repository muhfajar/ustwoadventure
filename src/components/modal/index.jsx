import React, { useEffect } from "react";
import { styled } from "linaria/react";

import ModalDetails from "./details";
import ModalImage from "./image";
import { plus } from "../../assets/inline-icons";
import { ModalContainer, ModalBackground } from "./container";
import kebabCase from "../../utils/kebab-case";

const CloseModalButton = styled.a`
    position: absolute;
    cursor: pointer;
    top: 20px;
    right: 20px;
    display: block;
    width: 32px;
    height: 32px;
    text-indent: -9999px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url(${plus});
    transform: rotate(45deg);
`;

const ModalWrapper = styled.div`
    display: inline-block;
    vertical-align: middle;
    position: relative;
    z-index: 2;
    box-sizing: border-box;
    background: #fff;
    text-align: left;
    height: 500px;
    max-width: 900px;
    width: 90%;

    @media (max-width: 880px) {
        width: 95%;
    }

    @media (max-width: 780px) {
        width: 100%;
    }

    @media (max-width: 640px) {
        height: calc(100% - 110px);
        width: calc(100% - 100px);
    }

    @media (max-width: 500px) {
        height: calc(100% - 80px);
        width: calc(100% - 60px);
    }

    @media (max-width: 379px) {
        height: calc(100% - 52px);
        width: calc(100% - 42px);
    }

    @media (max-width: 325px) {
        height: 100%;
        width: 100%;
    }

    @media (pointer: coarse) and (max-width: 500px) and (min-height: 750px),
        (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2),
        (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3),
        (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) {
        width: 100%;
        height: 85%;
        max-height: 685px;
        position: fixed;
        bottom: 0;
        left: 0;
    }
`;

const ModalInner = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;

    > div {
        box-sizing: border-box;
        height: 100%;
        width: 50%;
        overflow-x: hidden;
    }

    @media (max-width: 640px) {
        flex-direction: column-reverse;

        > div {
            height: 50%;
            width: 100%;
        }
    }
`;

const Modal = ({
    name,
    url,
    tidyUrl,
    oneLiner,
    description,
    image,
    logo,
    isOpen,
    handleClose
}) => {
    const handleEsc = e => e.key === "Escape" && handleClose();

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("no-scroll");
            window.addEventListener("keydown", handleEsc);
        } else {
            document.body.classList.remove("no-scroll");
        }
        return () => {
            window.removeEventListener("keydown", handleEsc);
        };
    }, [isOpen]);

    return (
        <ModalContainer
            id={`modal-${kebabCase(name)}`}
            className={isOpen && "show"}
        >
            <ModalBackground onClick={handleClose} />
            <ModalWrapper>
                <ModalInner>
                    <ModalDetails
                        name={name}
                        url={url}
                        tidyUrl={tidyUrl}
                        oneLiner={oneLiner}
                        description={description}
                    />
                    <ModalImage
                        name={name}
                        image={image}
                        logo={logo}
                        url={url}
                    />
                </ModalInner>
                <CloseModalButton onClick={handleClose} />
            </ModalWrapper>
        </ModalContainer>
    );
};

export default Modal;
