import React from "react";
import {fetchData, wrapPromise} from "../lib/wrapPromise";
import {buildHotelsApiUrl} from "../services/constants";
import {useHotels} from "./useHotels";

export const Hotels = () => {
    const hotels = wrapPromise(fetchData(buildHotelsApiUrl()));
    useHotels()

    return (
        <div className="available__hotels-wrapper">
            <div className="hotel-row">
                {hotels.map((hotel, index) => (
                    <div className="hotel__item" key={index}>
                        <img src={hotel.imageUrl} width="295" height="295" style={{marginBottom: '24px'}}
                             alt={hotel.name}/>
                        <div className="hotel-name" style={{
                            color: '#3077C6',
                            fontSize: '24px',
                            fontWeight: 400,
                            fontFamily: 'Roboto, sans-serif',
                            marginBottom: '24px'
                        }}>{hotel.name}</div>
                        <div className="hotel-location"
                             style={{color: '#BFBFBF', fontSize: '24px'}}>{hotel.country}, {hotel.city}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}