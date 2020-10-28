import React, { useState } from 'react';
import '../Style/Home.css';
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@material-ui/core'
import Product from './Product';

function Item({item})
{
    return (
        <Paper>
            <img src={item.img} alt="" className="home__img"/>
        </Paper>
    )
}


function Home() {

    var items = [
        {
            img: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_TallHero_NonPrime_v2_en_US_1x._CB403670067_.jpg"
        },
        {
            img: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_Tallhero_Dash_en_US_1x._CB418727898_.jpg"
        },
        {
            img: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg"
        },
        {
            img: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Sports_en_US_1x._CB431860448_.jpg"
        }
    ]    
    

    return (
        <div className="home">
            <Carousel className="home__carousel">
                {
                    items.map( (item, i) => <Item key={i} item={item} /> )
                }
            </Carousel>
            <div className="home__row">
                <Product
                id="12321341"
                title="Nintendo Switch - Animal Crossing: New Horizons Edition - Switch"
                price={11.96}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/81437h4aLoL._AC_SL1500_.jpg"
                />
                <Product 
                id="12121212"
                title="Oculus Quest 2 — Advanced All-In-One Virtual Reality Headset — 64 GB"
                price={110.96}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/615YaAiA-ML._SL1500_.jpg"
                />
                <Product 
                id="1313131313"
                title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U"
                price={398}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SL1500_.jpg"
                />
            </div>
            <div className="home__row">
                <Product 
                id="1276456352343456"
                title='SAMSUNG SM-T290NZKAXAR, Galaxy Tab A 8.0" 32 GB Wifi Android 9.0 Pie Tablet Black 2019'
                price={345}
                rating={5}
                image="https://m.media-amazon.com/images/I/41UPtXbP4LL._AC_UY218_.jpg"
                />
                <Product 
                id="123498755454356"
                title="TP-Link AC1750 Smart WiFi Router (Archer A7) - Dual Band Gigabit Wireless Internet Router for Home"
                price={135}
                rating={3}
                image="https://images-na.ssl-images-amazon.com/images/I/51R2a9p-vNL._AC_SL1000_.jpg"
                />
            </div>
            <div className="home__row">
                <Product 
                id="1235456456456"
                title='Seagate Portable 2TB External Hard Drive Portable HDD'
                price={452}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/81tjLksKixL._AC_SL1500_.jpg"
                />
                <Product 
                id="1235434567456"
                title="HP VH240a 23.8-inch Full HD 1080p IPS LED Monitor with Built-in"
                price={135}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/51R2a9p-vNL._AC_SL1000_.jpg"
                />
                <Product 
                id="123786674534456"
                title="TP-Link AC1750 Smart WiFi Router (Archer A7) - Dual Band Gigabit Wireless Internet Router for Home"
                price={1435}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/71trhuzbhML._AC_SL1500_.jpg"
                />
            </div>
            <div className="home__row">
            <Product 
                id="1235465456456456456"
                title='RUNMUS Gaming Headset Xbox One Headset with 7.1 Surround Sound, PS4 Headset with Noise Canceling'
                price={52}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/61lnzTv2a0L._AC_SL1000_.jpg"
                />
                <Product 
                id="12341253672153127856"
                title="Luxury All-Season White Down Comforter - Super Soft & Fluffy"
                price={1345}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/711yt9E365L._AC_SL1500_.jpg"
                />
                <Product 
                id="1235124781728456"
                title="Bare Home Bedding Set 5 Piece Comforter & Sheet Set - Twin XL "
                price={312}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/71HltZVhZ6L._AC_SL1500_.jpg"
                />
            </div>
        </div>
    )
}

export default Home
