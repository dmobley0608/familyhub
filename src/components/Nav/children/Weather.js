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
        fetch("https://api.weatherapi.com/v1/current.json?key=914d4e0e50314ecf960105744202708&q=30507", {
			method: 'post'
		}) 
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
        <div className='row center'>
            <div>
                <img alt='' src={this.state.weathericon}/>
            </div>
            <div className='center mt-3'>
                 <p>{this.state.temp}&deg; F</p>
            </div>
          
        
        </div>
    );
    }
}

export default weather;