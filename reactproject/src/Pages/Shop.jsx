import React from "react";
import Hero from "../Hero/Hero";
import Popular from "../Popular/Popular";
import Offers from "../Offers/Offers";
import New_Collection from "../New_Collection/New_Collection";
import NewsLetter from "../NewsLetter/NewsLetter";

const Shop = () =>{
    return(
        <div>
            <Hero/>
            <Popular/>
            <Offers/>
            <New_Collection/>
            <NewsLetter/>
        </div>
    )
}
export default Shop