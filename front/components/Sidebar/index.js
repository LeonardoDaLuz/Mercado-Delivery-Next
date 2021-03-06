import React, { Component } from 'react';
import SwipeInput from '@utils/SwipeInput';

export default class Sidebar extends Component {

    constructor(props) {
        super(props);
    }

    
    componentDidMount() {
        this.atribuiDisparadorDoSidebar("sidebar-toogler");
        SwipeInput.onDirection({ x: -25, y: 0 }, () => { this.closeSidebar() });
    }

    atribuiDisparadorDoSidebar(elementoId) {
        var el = document.getElementById(elementoId);

        if (el != undefined) {
            el.onclick = this.openSidebar;
        }
    }

    openSidebar(open) {
        let element = document.getElementById('side-bar');
        console.log("open");
        //document.body.classList.add("noscroll");
        element.classList.add("show");
        if (element.classList.contains('hide'))
            element.classList.remove('hide');
    }

    closeSidebar(open) {
        console.log("close");
        let element = document.getElementById('side-bar');
        if (element.classList.contains('show')) {
            //document.body.classList.remove("noscroll");
            element.classList.remove("show");
            element.classList.add("hide")
        } 
    }

    render() {
        return (
            <div id="side-bar" className="" >
                <ul className="">
                    <li>Inicio</li>
                    <li className="">Inicio</li>
                    <li>Inicio</li>
                    <li>Inicio</li>
                    <li>Inicio</li>                    <li>Inicio</li>
                    <li>Inicio</li>
                    <li>Inicio</li>                    <li>Inicio</li>
                    <li>Inicio</li>
                    <li>Inicio</li>                    <li>Inicio</li>
                    <li>Inicio</li>
                    <li>Inicio</li>                    <li>Inicio</li>
                    <li>Inicio</li>
                    <li>Inicio</li>                    <li>Inicio</li>
                    <li>Inicio</li>
                    <li>Inicio</li>                    <li>Inicio</li>
                    <li>Inicio</li>

                </ul>
                <div className="flex-grow-1 " onClick={this.closeSidebar}></div>
            </div>
        );
    }
}