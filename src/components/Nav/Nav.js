import React from 'react';
import Weather from './children/Weather'
import './nav.css'

class Nav extends React.Component {
    render() {
        return (
           
            < nav >                
                <div className='weather'>
                    <Weather/>
                </div>                                     
           
                {this.props.route === 'register'
                    ? <div>
                        <div style={{ marginLeft: 'auto', marginRight: '10em',}}>
                            <h4 onClick={() => { this.props.onRouteChange('signIn') }} className='signInLink'>Sign In</h4>
                        </div>  
                      </div>        
                    :(this.props.route === 'home' || this.props.route === 'quoteList')
                        ?<div style={{display:'inline-flex', justifyContent:'center', aligitems:'center'}}>
                            <div style={{marginRight: '3em' }}>
                                <h4 onClick={() => { this.props.onRouteChange('home') }} className='signInLink' >Home</h4>
                            </div>   
                            <div style={{marginRight:'3em'}} >
                                <h4 onClick={()=>{this.props.onRouteChange('quoteList')}} className='signInLink'>Quote Gallery</h4>
                            </div>                                 
                            <div style={{  marginLeft: 'auto', marginRight:'3em' }}>
                                <h4 onClick={() => { this.props.onRouteChange('signIn') }} className='signInLink' >Sign Out</h4>
                               
                            </div>
                                                                                
                        </div>                      
                    :<div>

                    </div>
                 }
               
             
        </nav>

        );
    }
}

export default Nav;