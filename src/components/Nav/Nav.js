import React from 'react';
import Weather from './children/Weather'
import navLine from './menu_grid-512.png'
import './nav.css'

class Nav extends React.Component {

    navToggle=()=>{
        const navButton = document.getElementById('menulist');
        if(navButton.classList.contains('invisible')){
            navButton.classList.remove('invisible')
        }else{
            navButton.classList.add('invisible')
        }
    }

    render() {
        return (
           
            < nav className='navLinks' >                
                <div className='weather'>
                    <Weather/>
                </div>                                     
           
                {this.props.route === 'register'
                    ?<div style={{ marginLeft: 'auto', width:'5em', marginTop:'0'}}>
                         <h4 onClick={() => { this.props.onRouteChange('signIn') }} className='signInLink '>Sign In</h4>
                      </div>  
                            
                    :(this.props.route === 'home' || this.props.route === 'quoteList' || this.props.route === 'messages')
                        ?<div style={{display:'inline-flex', justifyContent:'center', aligitems:'center'}}>
                            <div className='nav-menu'>
                                <img onClick={()=>{this.navToggle()}}style={{width:'25px'}} alt='' src={navLine}/>
                            </div>
                            <ul id='menulist'className='invisible'>
                            <div style={{marginRight: '3em' }}>
                                <h4 onClick={() => { this.props.onRouteChange('home') }} className='signInLink ' >Home</h4>
                            </div>
                            <div style={{marginRight: '3em' }}>
                                <h4 onClick={() => { this.props.onRouteChange('messages') }} className='signInLink ' >Messages</h4>
                            </div>      
                            <div style={{marginRight:'3em'}} >
                                <h4 onClick={()=>{this.props.onRouteChange('quoteList')}} className='signInLink'>Quote Gallery</h4>
                            </div>                                 
                            <div style={{  marginLeft: 'auto', marginRight:'3em' }}>
                                <h4 onClick={() => { this.props.onRouteChange('signIn') }} className='signInLink' >Sign Out</h4>
                               
                            </div>
                            </ul>
                            
                                                                                
                        </div>                      
                    :<div>

                    </div>
                 }
               
             
        </nav>

        );
    }
}

export default Nav;