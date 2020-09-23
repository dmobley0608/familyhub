import React from 'react';
import {trackPromise} from 'react-promise-tracker';
import './signIn.css';
import deathlyhallows from './hallows.ico';

class SignIn extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			signInEmail: '',
			signInPassword: '',
			loginError: '',
			
		}
	}

	onEmailChange = (event) => {
		this.setState({ signInEmail: event.target.value })		
	}

	onPasswordChange = (event) => {
		this.setState({ signInPassword: event.target.value })		
	}

	onSubmitSignIn = () => {
		this.setState({loginError:''})
		trackPromise(
		fetch('https://polar-thicket-52274.herokuapp.com/signin', {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				email: this.state.signInEmail,
				password: this.state.signInPassword				
			})
		})	
			.then(response => response.json()) 
			.then(user => {
							
				if (user.id) {					
					this.props.loadUser(user);
					this.props.onRouteChange('home');
				}
				if(user === 'user not found'){
					this.setState({loginError: 'User not found. Please Register.'})
				}
				else if(user === 'wrong credentials'){
					this.setState({loginError: 'Incorrect Password'})
				}
			}));
		
	}


    render() {
        const { onRouteChange } = this.props;
        return (
            <article className=" cards">
                <div className="signInPhoto">
                    <img src={deathlyhallows}
						 style={{ width: '10em', borderRadius: '1em' }} alt=""
						/>
                </div>
				<form>
					<div style={{ padding: '.5rem' }}>
						<div style={{ display: 'table', width: '100%', marginTop: '.25rem' }}>						
						<div className="form-group">						  
						  <input type="email" autoComplete='email' className="form-control" placeholder="Email" onChange={this.onEmailChange}/>
						  <input type="password" autoComplete='current-password' className="form-control mt-3"placeholder="Password" onChange={this.onPasswordChange}/>
						 
						</div>	
							
							                          
							
					<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
						<p onClick={this.onSubmitSignIn} value='Sign In' className='button' >Sign In</p>
					</div>
					<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
						<p onClick={() => onRouteChange('register')} className='button'>Register</p>
					</div>
					<div style={{marginBottom:'0', color:'whitesmoke'}}>
						<p >{this.state.loginError}</p>
					</div>
							{}
						</div>                 
					</div>
				</form>               
            </article>
            );
    }
}

export default SignIn;