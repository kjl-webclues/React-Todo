import React, {useState} from 'react'
import "../TabMenu/tab.css";
import Menu from "./Menu";
import Menuitems from './Menuitems';
import CatMenu from './CatMenu';

const allCatValues = [...new Set (Menu.map((curElem) => curElem.category )), "all"];
console.log(allCatValues);

const GalleryReact = () => {
     
const [items, setItems] = useState(Menu);
const [catItems, setCatItems] = useState(allCatValues);
//category(filterItem)

const filterItem = (cateItem) =>{
    
    if(cateItem === "all"){
        setItems(Menu);
        return; 
    }

    const updatedItems = Menu.filter((curElem)=>{
        return curElem.category === cateItem;
    });

    setItems(updatedItems);
}

    return (
        <>
            <h1 className="mt-5 text-center main-heading">Order Your Favourite Dish</h1>
            <hr/>

                {/* my Menu List will come here */}
                <CatMenu filterItem={filterItem} catItems={catItems}/> 

                {/* my main item section */}
                <Menuitems items={items} />
                                                        
        </>
    )
}

export default GalleryReact;

