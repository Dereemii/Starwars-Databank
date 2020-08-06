import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const Characters = () => {
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.getPeople("https://swapi.dev/api/people/");
    }, []);

    return (
        <>
            <div className="container">
            <h1 className="characters text-white">Characters <i className="swg swg-lightsabers  swg-6x m-0 "></i></h1>
            <div className="card-deck">
                <div className="card">
                    <img src="img/Luke Skywalker.jpg" className="card-img-top" alt="" />
                    <div className="card-body bg-body-card">
                        <h5 className="card-title">{store.people !== null ? store.people[0].name : "Personaje"}</h5>
                        <p className="card-text">
                            <p> Height: {store.people !== null ? store.people[0].gender : "Height"}</p>
                            <p> Eye Color: {store.people !== null ? store.people[0].eye_color : "Eye"}</p>
                            <p> Hair Color: {store.people !== null ? store.people[0].hair_color : "Hair"}</p>
						</p>
                        <p className="card-text">
                            <button type="button" className="btn btn-outline-primary left">Learn More!</button>
                            <button type="button" className="btn btn-outline-warning heart">&#10084;</button>
                        </p>
                    </div>
                </div>
                <div className="card">
                    <img src="img/C-3PO.jpg" className="card-img-top" alt="" />
                    <div className="card-body bg-body-card">
                        <h5 className="card-title">{store.people !== null ? store.people[1].name : "Personaje"}</h5>
                        <p className="card-text">
                            <p> Height: {store.people !== null ? store.people[1].gender : "Height"}</p>
                            <p> Eye Color: {store.people !== null ? store.people[1].eye_color : "Eye"}</p>
                            <p> Hair Color: {store.people !== null ? store.people[1].hair_color : "Hair"}</p>
						</p>
                        <p className="card-text">
                            <button type="button" className="btn btn-outline-primary left">Learn More!</button>
                            <button type="button" className="btn btn-outline-warning heart">&#10084;</button>
                        </p>
                    </div>
                </div>
                <div className="card">
                    <img src="img\R2-D2.jpg" className="card-img-top" alt="" />
                    <div className="card-body bg-body-card">
                        <h5 className="card-title">{store.people !== null ? store.people[2].name : "Personaje"}</h5>
                        <p className="card-text">
                            <p> Height: {store.people !== null ? store.people[2].gender : "Height"}</p>
                            <p> Eye Color: {store.people !== null ? store.people[2].eye_color : "Eye"}</p>
                            <p> Hair Color: {store.people !== null ? store.people[2].hair_color : "Hair"}</p>
						</p>
                        <p className="card-text">
                            <button type="button" className="btn btn-outline-primary left">Learn More!</button>
                            <button type="button" className="btn btn-outline-warning heart">&#10084;</button>
                        </p>
                    </div>
                </div>
                <div className="card">
                    <img src="img\Darth Vader.jpg" className="card-img-top" alt="" />
                    <div className="card-body bg-body-card">
                        <h5 className="card-title">{store.people !== null ? store.people[3].name : "Personaje"}</h5>
                        <p className="card-text">
                            <p> Height: {store.people !== null ? store.people[3].gender : "Height"}</p>
                            <p> Eye Color: {store.people !== null ? store.people[3].eye_color : "Eye"}</p>
                            <p> Hair Color: {store.people !== null ? store.people[3].hair_color : "Hair"}</p>
						</p>
                        <p className="card-text">
                            <button type="button" className="btn btn-outline-primary left">Learn More!</button>
                            <button type="button" className="btn btn-outline-warning heart">&#10084;</button>
                        </p>
                    </div>
                </div>
            </div>
            <div className="card-deck my-5">
                <div className="card">
                    <img src="img/Leia Organa.jpg" className="card-img-top" alt="" />
                    <div className="card-body bg-body-card">
                        <h5 className="card-title">{store.people !== null ? store.people[4].name : "Personaje"}</h5>
                        <p className="card-text">
                            <p> Height: {store.people !== null ? store.people[4].gender : "Height"}</p>
                            <p> Eye Color: {store.people !== null ? store.people[4].eye_color : "Eye"}</p>
                            <p> Hair Color: {store.people !== null ? store.people[4].hair_color : "Hair"}</p>
						</p>
                        <p className="card-text">
                            <button type="button" className="btn btn-outline-primary left">Learn More!</button>
                            <button type="button" className="btn btn-outline-warning heart">&#10084;</button>
                        </p>
                    </div>
                </div>
                <div className="card">
                    <img src="img/Owen Lars.jpg" className="card-img-top" alt="" />
                    <div className="card-body bg-body-card">
                        <h5 className="card-title">{store.people !== null ? store.people[5].name : "Personaje"}</h5>
                        <p className="card-text">
                            <p> Height: {store.people !== null ? store.people[5].gender : "Height"}</p>
                            <p> Eye Color: {store.people !== null ? store.people[5].eye_color : "Eye"}</p>
                            <p> Hair Color: {store.people !== null ? store.people[5].hair_color : "Hair"}</p>
						</p>
                        <p className="card-text">
                            <button type="button" className="btn btn-outline-primary left">Learn More!</button>
                            <button type="button" className="btn btn-outline-warning heart">&#10084;</button>
                        </p>
                    </div>
                </div>
                <div className="card">
                    <img src="img\Beru Whitesun lars.jpg" className="card-img-top" alt="" />
                    <div className="card-body bg-body-card">
                        <h5 className="card-title">{store.people !== null ? store.people[6].name : "Personaje"}</h5>
                        <p className="card-text">
                            <p> Height: {store.people !== null ? store.people[6].gender : "Height"}</p>
                            <p> Eye Color: {store.people !== null ? store.people[6].eye_color : "Eye"}</p>
                            <p> Hair Color: {store.people !== null ? store.people[6].hair_color : "Hair"}</p>
						</p>
                        <p className="card-text">
                            <button type="button" className="btn btn-outline-primary left">Learn More!</button>
                            <button type="button" className="btn btn-outline-warning heart">&#10084;</button>
                        </p>
                    </div>
                </div>
                <div className="card">
                    <img src="img\R5-D4.jpg" className="card-img-top" alt="" />
                    <div className="card-body bg-body-card">
                        <h5 className="card-title">{store.people !== null ? store.people[7].name : "Personaje"}</h5>
                        <p className="card-text">
                            <p> Height: {store.people !== null ? store.people[7].gender : "Height"}</p>
                            <p> Eye Color: {store.people !== null ? store.people[7].eye_color : "Eye"}</p>
                            <p> Hair Color: {store.people !== null ? store.people[7].hair_color : "Hair"}</p>
						</p>
                        <p className="card-text">
                            <button type="button" className="btn btn-outline-primary left">Learn More!</button>
                            <button type="button" className="btn btn-outline-warning heart">&#10084;</button>
                        </p>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
};