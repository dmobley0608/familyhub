import React from 'react';


class weather extends React.Component{
    constructor(){
        super();
        this.state = {
            temp: null,
            weathericon:''
        }
    }

    getWeather = ()=>{
        fetch('http://api.weatherapi.com/v1/current.json?key= 914d4e0e50314ecf960105744202708&q=Gainesville, Ga')
        .then(response=> response.json())
        .then(data => {
            this.setState({
                temp: Math.round(data.current.temp_f),
                weathericon: data.current.condition.icon
            });
        })
    }
    componentDidMount(){
        this.getWeather();
    }
    render(){
    return(
        <div style={{display: 'flex'}}>
            <img alt='' src={this.state.weathericon}/>
            <p>{this.state.temp}&deg; F</p>
        </div>
    );
    }
}

export default weather;