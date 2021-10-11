import { FadeBackground } from "@globalStyleds";
import { Component, useState } from "react";
import { ModalContainer, WindowContainer } from "./style";
import PubSub from 'pubsub-js'



export default function Modal() {

    const [contentComponent, setContentComponent] = useState<JSX.Element | null>(null);

    setStateFromOutsideComponent = setContentComponent;

    const token = PubSub.subscribe("show-modal", (msg: string, component: JSX.Element) => {
        setContentComponent(component);
    })

    if (contentComponent === null)
        return <></>
        
    return (
        <ModalContainer>
            <FadeBackground onClick={() => setContentComponent(null)} />
            <WindowContainer>
                {contentComponent}
            </WindowContainer>
        </ModalContainer>
    );
}

let setStateFromOutsideComponent = (state: JSX.Element | null)=>{}

export const ShowModal = (component: JSX.Element) => {
    setStateFromOutsideComponent(component);
}

export const CloseModal = () => {
    setStateFromOutsideComponent(null);
}