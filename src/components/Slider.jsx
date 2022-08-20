import React,{useState} from "react";
import {sliderItems} from "../data";

function Slider(){

    const [slideIndex , setslideIndex] = useState(0);

    const handleClick = (direction) => {
        if(direction === "arrow-left"){
            setslideIndex(slideIndex > 0 ? slideIndex -1 : 2);
        }
        else{
            setslideIndex(slideIndex < 2 ? slideIndex +1 : 0);
        }


    };


    return(
    <div className="slider-container">
    <div className="arrow-left" onClick={() => handleClick("arrow-left")}>
    <i className="fa-solid fa-less-than"></i>
    </div>
    <div className="slider-wrapper" slideIndex = {slideIndex}>
        {sliderItems.map((item) => (
            <div className="slide">
                <div className="img-container">
                  <img className = "img-1" src={item.img} alt="man"></img>
                    
                </div>
                <div className="info-container">
                    <div className="title">
                        <h1>{item.title}</h1>
                    </div>
                    <div className="desc">
                        <p>
                            {item.desc}
                        </p>
                    </div>
                    <div>
                        <button className="btn-1">SHOW NOW</button>
                    </div>
                </div>
            </div>
        ))}
    </div>
    <div className="arrow-right" onClick={() => handleClick("arrow-right")}>
            <i className="fa-solid fa-greater-than left"></i>
    </div>
            

    </div>
    )
}

export default Slider;