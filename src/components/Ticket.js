import React from 'react';
import './Ticket.scss';

function Ticket(props) {

    return (
        <div className="ticket">
            <div className="wrapper-logo">
                <img src={props.logo_url} alt="Logo de ticket"/>
            </div>

            <div className="info">
                <h2 className="title">{props.title}</h2>
                <p className="description">
                    {props.description}
                </p>
            </div>

            <div className="detail">
                <p className="admitted">ADMIT ONE</p>
                <p className="date">{props.date}</p>
            </div>

            <div className="code">N° {props.code}</div>
        </div>
    );
}

export default Ticket;