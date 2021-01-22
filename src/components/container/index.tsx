import React from 'react';
import { FaPrint } from 'react-icons/fa';
import {
    Locacao
} from '../recibos';
import { SideMenu } from '../side-menu';
import './style.scss';



export const Container = () => {


    window.onafterprint = function () {
        const hideElements = document.querySelectorAll('.top-bar, .side-menu') as NodeListOf<HTMLDivElement>;
        if (hideElements)
            hideElements.forEach(e => {
                e.style.display = "inherit";
            })
    }

    const hideToPrint = () => {
        const notPrint = document.querySelectorAll('.top-bar, .side-menu') as NodeListOf<HTMLDivElement>;
        if (notPrint)
            notPrint.forEach((e: HTMLElement) => {
                e.style.display = 'none';
            });
        window.print();
    }

    return (
        <div className="container">
            <div className="side-menu">
                <SideMenu />
            </div>
            <div className="content">

                <div className="top-bar">
                    <button onClick={hideToPrint} className="btn btn-prime">
                        <FaPrint size={18} /> impimir
                    </button>
                </div>

                <div className="print-content">
                    <Locacao />
                </div>

            </div>
        </div>
    );

}; 