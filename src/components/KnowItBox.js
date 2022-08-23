import React from "react";
//import store from "../../store";
//import { useSelector } from "react-redux";

export function KnowItBox (){

    return (
        <div>
            <h2>categoryData</h2>
            <h2>Question</h2>
            <h2>Answer</h2>
            <section>
                <button>Know It</button>
                <button>Revise</button>
                <button>Auto Play</button>
                <button>Switch</button>
            </section>
            <section>
                <button>Next Category</button>
                <button>Previous Category</button>
            </section>
        </div>
    )
}