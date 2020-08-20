import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Favorites } from "../component/favorites";


function Characters() {

  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <div className="row row-col-5 row-col-5-sm-2 row-col-sm-4 pt-4">
        {store.people.map((item, index,) => (
          <div className="people col-3 mb-4" key={item.name}>
            <div className="card h-100 border-dark">
              <img
                src={`/img/${item.name}.jpg`}
                className="card-img-top border-danger border-bottom"
                alt=""
              />
              <div className="card-body bg-body-card">
                <h5 className="card-title">{item.name} </h5>
                <ul className="caracteristicas">
                  <li> height : {item.height}</li>
                  <li> mass : {item.mass}</li>
                  <li> hair color : {item.hair_color}</li>
                  <li> gender : {item.gender}</li>
                </ul>
                <div className="container">
                  <div className="row">
                    <div className="col-8">
                      <button
                        type="button"
                        className="LearnMore btn btn-outline-primary"
                      >
                        <Link to={`/character/${index + 1}`}>Learn more!</Link>
                      </button>
                    </div>
                    <div className="col-4">
                    <Favorites favorite={item.name}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Characters;