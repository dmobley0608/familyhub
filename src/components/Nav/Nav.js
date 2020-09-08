import React from 'react';
import Weather from './children/Weather'
import './nav.css'

class Nav extends React.Component {
    render() {
        return (
            <div>
            < nav >
           
                <div className='weather'>
                    <Weather/>
                </div>                
                <div className='clock'>
                    <h4></h4>
                </div>               
            </nav>
                {this.props.route === 'register'
                    ? <div style={{ marginLeft: 'auto', marginRight: '10em' }}>
                            <h4 onClick={() => { this.props.onRouteChange('signIn') }} className='signInLink'>Sign In</h4>
                        </div>          
                    :(this.props.route === 'home')
                        ?<nav>                   
                            <div style={{ marginLeft: 'auto', marginRight: '6em' }}>
                                <h4 onClick={() => { this.props.onRouteChange('signIn') }} className='signInLink' >Sign Out</h4>
                            </div>                                          
                        </nav>                      
                    :<div>

                    </div>
                 }
               
             
        </div>

        );
    }
}

export default Nav;