import React from 'react';
import Nav from './components/Nav/Nav';
import Background from './components/Background/Background'
import Footer from './components/Footer/Footer';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Welcome from './components/Welcome/Welcome';
import QuoteCard from './components/QuoteCard/QuoteCard';
import Particles from 'react-particles-js';
import './App.css';

const initialState = {
    route:'signIn',
    user: {
        id: '',
        firstName: '',
        lastName: '',
        email: '',             
        joined: Date()
    }
}

class App extends React.Component {

    constructor() {
        super(); 
            this.state = initialState;
    }

    loadUser = (user) => {
        this.setState({
            user: {
                id: user.id,
                firstName: user.firstname,
                lastName: user.lastname,
                email: user.email,             
                joined: user.joined
            }
        })
        
    }


    onRouteChange = (page) => {
        if(page === 'signOut'){
            this.setState(initialState)
        }else{
            this.setState({route:page})
        }
       
    }

   
    render() { 
        const {user} = this.state;
      
        return (
            <div className='App'>
                <Background />              
                <Nav route={this.state.route} onRouteChange={this.onRouteChange} />               
                <Footer />
                {this.state.route === 'home'
                    ? <div>
                        <Welcome user={user}/>
                        <QuoteCard />
                    </div>
                    : (this.state.route === 'signIn'
                        ? <div>
                            <SignIn onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
                            <Particles className='particles' />
                        </div>
                        : <div>
                            <Register onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
                            <Particles className='particles' />
                        </div>
                        )
                    }
            </div>
         );
    }
 
}

export default App;
