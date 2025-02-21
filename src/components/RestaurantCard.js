import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
    const {resdata} = props;
    return(
        <div className="res-card" style={{backgroundColor : "#f0f0f0"}}>
            <img className= "res-logo" src={CDN_URL + resdata.info.cloudinaryImageId}></img>
            <h3>{resdata.info.name}</h3>
            <h4>{resdata.info.avgRating} stars</h4>
            <h4>{resdata.info.costForTwo}</h4>
            <h4>{resdata.info.sla.deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurantCard;