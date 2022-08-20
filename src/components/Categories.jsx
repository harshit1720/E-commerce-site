import React from "react";
import {categories} from "../data";
import CategoryItem from "./CategoryItem";

const Categories =() => {

    return(
        <div className="categories-container">
            {categories.map(item => (
                <CategoryItem item = {item} />
            ))}
        </div>
    )
}

export default Categories;