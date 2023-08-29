// WeatherCard.js

import React from 'react'
import { Card, Feed } from 'semantic-ui-react'
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud, faCloudBolt, faSunHaze, faCloudDrizzle, faUmbrella, faSnowflake, faSmog, faSun } from '@fortawesome/free-solid-svg-icons'

export default function WeatherCard(
    { temperature, city, humidity, sunrise, sunset, icon }) {
    let weatherIcons = null;

    if(icon === 'Haze'){
        weatherIcons = <FontAwesomeIcon icon={faSunHaze} size="lg" color="#212121" />
    } 
    else if(icon === 'Thunderstorm'){
        weatherIcons  = <FontAwesomeIcon icon={faCloudBolt} size="lg" color="#212121" />
    } 
    else if (icon === 'Drizzle') {
        weatherIcons = <FontAwesomeIcon icon={faCloudDrizzle} size="lg" color="#212121" />
    } 
    else if (icon === 'Rain') {
        weatherIcons = <FontAwesomeIcon icon={faUmbrella} size="lg" color="#212121" />
    } 
    else if (icon === 'Snow') {
        weatherIcons = <FontAwesomeIcon icon={faSnowflake} size="lg" color="#212121" />
    }
    else if (icon === 'Mist') {
        weatherIcons = <FontAwesomeIcon icon={faSmog} size="lg" color="#212121" />
    }
    else if (icon === 'Clear') {
        weatherIcons = <FontAwesomeIcon icon={faSun} size="lg" color="#212121" />
    }  
    else if (icon === 'Clouds') {
        weatherIcons = <FontAwesomeIcon icon={faCloud} size="lg" color="#212121" />
    }

    return (
    <Card className="weather-card-main">
        <Card.Content className="weather-card">
            <Card.Header className="weather-card-child">{city}</Card.Header>
            <div className="icon-container">
                <FontAwesomeIcon icon={faCloud} size="lg" color="#212121"/>
            </div>
        </Card.Content>
        <Card.Content>
            <Feed>
                <Feed.Event>
                    <Feed.Content>
                        <h5 className="weather-card-child">{moment().format('MMM Do, h:mm a')};</h5>
                        <div className="weather-card">
                            <div className="weather-card-child">
                                <b>Temperature:</b> {Math.floor(temperature)} ℃
                            </div>
                            <div className="weather-card-child">
                                <b>Humidity:</b> {humidity} %
                            </div>
                        </div>

                        <div className="weather-card">
                            <div className="weather-card-child">
                                <b>Sunrise:</b> {new Date(sunrise * 1000).toLocaleTimeString('en-IN')}
                            </div>
                            <div className="weather-card-child">
                                <b>Sunset:</b> {new Date(sunset * 1000).toLocaleTimeString('en-IN')}
                            </div>
                        </div>
                    </Feed.Content>
                </Feed.Event>
            </Feed>
        </Card.Content>
    </Card>
)}