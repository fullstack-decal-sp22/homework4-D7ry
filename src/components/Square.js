import React, {useState} from "react";
import './styles/Square.css';
import './Game'
import Game from "./Game";
import Board from "./Board";

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    )
}

export default Square;