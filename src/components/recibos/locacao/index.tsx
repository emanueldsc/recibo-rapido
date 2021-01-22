import React from 'react';
import "./style.scss";

export const Locacao = () => {
    return (
        <div className="locacal-container">



            <div className="top-content">
                <div className="row">
                    <div className="qrcode">
                        <img src="#" alt="#qrcode" className="qr-image" />
                    </div>
                    <div className="valor-box">
                        <label htmlFor="valor">Valor </label>
                        <input type="text" />
                    </div>
                </div>
            </div>

            <div className="dados">
                <div className="row">
                    <label htmlFor="recebemos">Recebemos de </label>
                    <input type="text" id="recebemos" />
                </div>

                <div className="row">

                    <label htmlFor="endereco">Endereço </label>
                    <input type="text" id="endereco" />
                </div>

                <div className="row">
                    <label htmlFor="importancia">A importância de </label>
                    <input type="text" id="importancia" />
                </div>

                <div className="row">
                    <label htmlFor="referente">Referente </label>
                    <input type="text" id="referente" />
                </div>
            </div>

            <div className="local-data">
                <input type="text" /><sub>,</sub> <input type="text" /> de <input type="text" /> de <input type="text" />
            </div>

            <div className="dados-emitente">

                <div className="row">
                    <label htmlFor="emitente">Emitente </label>
                    <input type="text" id="emitente" />
                </div>

                <div className="row">
                    <label htmlFor="cpfrg">CPF/RG </label>
                    <input type="text" id="cpfrg" />
                </div>

                <div className="row">
                    <label htmlFor="emitente-endereco">Endereço </label>
                    <input type="text" id="emitente-endereco" />
                </div>

                <div className="row">
                    <label htmlFor="assinatura">Assinatura</label>
                    <input type="text" id="assinatura" />
                </div>
            </div>

        </div>
    );
}