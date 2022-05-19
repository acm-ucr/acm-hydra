import React from 'react';
import './WhatWeDo.css'
import './Tile.js'
import Tile from './Tile.js';

const data = [
    ["Workshop", "Description"],
    ["Resumes", "Description"],
    ["LinkedIn", "Description"]
]


const WhatWeDo = () => {
    return (
        <div className="about-whatwedo-wrapper">

            <h6 className="about-whatwedo-header">What We Do?</h6>


            <div className="about-whatwedo-tiles">
                {
                data.map(tile => (
                    <Tile header = {tile[0]} description = {tile[1]} />
                ))
            }
            </div>
        </div>

    );
}

export default WhatWeDo;
