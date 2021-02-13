import React from 'react';
import Cars from './Cars';
import cargif from "../assets/car5.gif";
import svgimg from "../assets/vrsvg.svg";

function App() {
    return (
        <div>
            <section className = "hero"></section>
            <main>
                <section>
                    <h1>Hi React</h1>
                    <Cars />
                </section>
                <div></div>
                <div>
                    <span className = "cars">
                        <img src= {cargif} />
                    </span>
                </div>
                <div>
                    <span className = "cars">
                        <img src= {svgimg} />
                    </span>
                </div>
            </main>
            
        </div>
    )
}

export default App
