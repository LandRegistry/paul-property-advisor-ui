import React, { Component } from "react";
import { observer } from "mobx-react";

const Message = ({ message }) => (
    // Output the message from the bot, replacing any INSTANTMORTGAGELINK text with a clickable link
    <li className={message.bot ? "chat__item chat__item--bot" : "chat__item"}>{message.message.replace('INSTANTMORTGAGELINK','')} {(message.message.includes('INSTANTMORTGAGELINK')) ? <a href='https://hmlr-ds-instantmortgageui.eu-gb.mybluemix.net'> here </a> : ''} </li>
);

export default Message;
