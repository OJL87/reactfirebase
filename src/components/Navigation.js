import React from "react";
import { useNavigate, NavLink } from "react-router-dom";

const Item = () => {
        let history = useNavigate();
        return (
        <button onClick={() => history(-1)}>Back</button>
        ); };

export function Navigation (){
      
    return (
        <div>
            <nav>
            <Item />
            <NavLink to="/">Home</NavLink>
            <NavLink to="/catalogue">All topics</NavLink>
            <NavLink to="/">Test</NavLink>
            <NavLink to="/learn">Revise</NavLink>
            
            </nav>
        </div>
    )
}