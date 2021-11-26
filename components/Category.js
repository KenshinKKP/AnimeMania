import { useState } from 'react';

export default function Category(props) {
    const [categoryText, setCategoryText] = useState("Read More");
    function changeCategoryText() {
        setCategoryText(props.categoryText)
    }
    const categoryClassName = "rounded-full border-2 border-purple-400 p-10 w-full " + props.backgroundColor
    return (
        <div className={categoryClassName}>
            <h1 className="text-3xl font-bold font-serif text-center">{props.header}</h1>
            <button onClick={changeCategoryText}>{categoryText}</button>
        </div>
    )
}