import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Favorites = (favorites) => {
    
  const { actions } = useContext(Context);
 
    return (
      <>
         <button type="button" className="btn btn-outline-warning" onClick={()=>actions.getFavorites(favorites)}>
            <span className="heart">&#10084;</span>
        </button>
      </>
    );
  };
  