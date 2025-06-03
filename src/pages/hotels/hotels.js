import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHotels } from "../../redux/slices/hotelsReducer";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";

import './hotels.styles.scss';

export default () => {
    const isLoading = useSelector(state => state.hotels.isLoading);
    const hotelsList = useSelector(state => state.hotels.list);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchHotels())
    }, []);


    return <div className="hotels">
        {isLoading ?
             'Loading...' :
            <div className="hotels-list">
                {hotelsList.map(({ id, name, address, city, state, country_code}) => {
                    return <Card key={id} sx={{minWidth: 275, maxWidth: 275}}>
                        <CardContent>
                            <img className="hotels-list-item-img" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/1a/ea/54/hotel-presidente-4s.jpg?w=900&h=500&s=1"/>
                            <h3 className="hotels-list-item-title">{name}</h3>
                            <div>address: {address}</div>
                            <div>city: {city}, state: {state}, country code: {country_code}</div>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                })}
            </div>
        }
    </div>
}