import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";


export const Dropdown = (lista) => {

    const {store, actions} = useContext(Context);


    return (

        <div className="dropdown mt-3">
            <button className="btn btn-dark btn-block border-0 bg-transparent dropdown-toggle mr-5 pl-4" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span className="swg swg-yoda-2 mx-3 "></span> <span className="mr-1">FAVORITES {store.favorites.length} </span>  
            </button>
            
            <span className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton" >
            {store.favorites.length === 0 ? 
                <div className="dropdown-item" >
                    Click the heart to Add a favorite &#10084;<button type="button" className="close" aria-label="Close"></button>
                </div>
                :
                store.favorites.map((item, index,) =>{

                return(
                
                <div className="dropdown-item" key={index}>
                    {item.favorite} &#10084;<button type="button" className="close" aria-label="Close" onClick={()=> actions.removeFavorites(item, index)}><span aria-hidden="true">&times;</span></button>
                </div>)})}
                
            </span>
            
        </div>
    )};