// Forecast.js

import React from 'react';
import { Card } from 'semantic-ui-react';
import moment from 'moment';

function Forecast({forecast}) {
    return (
        <div style={{marginTop: 20}}>
                <Card.Group itemsPerRow={4}>
                {forecast.map((data) => {
                    return (
                    <Card className="forecast-card">
                    <Card.Content>                         
                    <Card.Header className="forecast-date">
                        Date: {moment.unix(data.dt).format('ll')}
                    </Card.Header>
                    <Card.Header className="forecast-header">
                        Temperature: {Math.round((data.temp.max = data.temp.min) / 2)} ℃
                    </Card.Header>
                    <Card.Meta>
                        Humidity: {data.humidity} %
                    </Card.Meta>
                    <Card.Description className="weather-description">
                        Weather descrip: {data.weather[0].description}
                    </Card.Description>
                    </Card.Content>
                    </Card>
                    )
                })}
                </Card.Group>

        </div>
    );
}

export default Forecast;