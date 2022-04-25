import React, {useEffect, useContext} from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../store/appContext.js";

export const Details = () => {
    const {type, uid} = useParams();
    const {store, actions} = useContext(Context);

    useEffect(() => {
        actions.getItemDetails(type, uid);
    },[])

    const humanize = (field, content) => {
        field = field.charAt(0).toUpperCase() + field.slice(1)
        field = field.replace('_',' '); 
        content = content.charAt(0).toUpperCase() + content.slice(1)
        content = content.replace('_',' '); 
        return  `${field}: ${content}`
    }

    return(
        <div className="container">
            <div className="card row container m-auto">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src="https://via.placeholder.com/600" className="card-img m-4" alt="..."/>
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{store.details.name}</h5>
                            <ul className="card-text list-group">
                                { Object.keys(store.details).map((property) => {
                                    if (property=='created' || property=='edited' || property=='url' || property=='homeworld' || property=='name' || property=='pilots') {
                                        return ''
                                    }
                                    return (<li className="list-group-item" key={property}>
                                                {humanize(property, store.details[property])}
                                            </li>)
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}