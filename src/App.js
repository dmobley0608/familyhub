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
import QuoteList from './components/QuoteList/QuoteList';

const initialState = {
    route:'signIn',   
    user: {
        id: '',
        firstName: '',
        lastName: '',
        email: '',             
        joined: Date()
    },
    quotes:[]
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
    getQuoteArray = () => {
        fetch(" https://polar-thicket-52274.herokuapp.com/quotelist")
        .then(response => {return response.json()})
        .then(data=>{           
            let tmpArray = []
            for (let i= 0; i < data.length; i++){
                tmpArray.push(data[i])               
            }
            this.setState({
               quotes:tmpArray               
            })
           
        })  
    }
    componentDidMount(){
        this.getQuoteArray();
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
                        <QuoteCard route={this.state.route} />
                    </div>
                    : (this.state.route === 'signIn'
                        ? <div>
                            <SignIn onRouteChange={this.onRouteChange} loadUser={this.loadUser}  />
                            <Particles className='particles' />
                        </div>
                        :(this.state.route === 'quoteList')
                        ?<div>
                            <QuoteList quotes={this.state.quotes}/>
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
