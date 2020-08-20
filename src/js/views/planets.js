import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"
import { Favorites } from "../component/favorites";


function Planets() {
 
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-4 pt-4">
      {store.planets.map((item, index,) => (
          <div className="planets col mb-4" key={item.name}>
            <div className="card h-100 border-dark">
              <img src={`/img/${item.name}.jpg`} className="card-img-top border-danger border-bottom" alt=""/>
              <div className="card-body bg-body-card">
                <h5 className="card-title">{item.name}</h5>
                <ul className="caracteristicas">
                  <li> rotation period : {item.rotation_period}</li>
                  <li> orbital period : {item.orbital_period}</li>
                  <li> diameter : {item.diameter}</li>
                  <li> climate : {item.climate}</li>
                </ul>
                <div className="row justify-contet-between">
                  <div className="col-9">
                    <button type="button" className="btn btn-outline-primary">
                      <Link to={`/planets/${index + 1}`}>Learn more!</Link>
                    </button>
                  </div>
                  <div className="col-3">
                    <Favorites favorite={item.name}/>
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

export default Planets;
