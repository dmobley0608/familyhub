import React from 'react';
import './welcome.css'

class Welcome extends React.Component {
    
    render() {
        const today = new Date();
        let hour = today.getHours();
         
       
        return (
            <div >
                {hour <= 11 && hour > 6
                    ?<div className='welcome'>
                        <p>Good Morning, {this.props.user.firstName}!</p>
                    </div> 
                    :(hour === 12)
                        ? <div className='welcome'>
                            <p>Lunch Time, {this.props.user.firstName}!</p>
                        </div> 
                    : (hour > 12 && hour < 17)
                        ?<div className='welcome'>
                            <p>Good Afternoon, {this.props.user.firstName}!</p>
                        </div>
                    :(hour >= 17 && hour < 20)
                        ?<div className='welcome'>
                            <p>Good Evening, {this.props.user.firstName}!</p>
                        </div>
                    :(hour >= 21)
                        ?<div className='welcome'>
                            <p>Bed Time, {this.props.user.firstName}!</p>
                        </div>
                    :<div className='welcome'>
                        <p>{this.props.user.firstName}, you should really go to bed!</p>
                    </div>
                }
        
            </div>
            );
    }
}

export default Welcome;