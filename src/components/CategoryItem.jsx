import React from "react";

const CategoryItem = ({item}) => {
    return(
        <div className="category-container">
            <div >
                <img className="img-2" src={item.img} alt="men"></img>
            </div>
            <div className="category-info">
                <h1 className="category-title">{item.title}</h1>
                <button className="btn-2">SHOP NOW</button>
            </div>

        </div>
    )
}

export default CategoryItem;