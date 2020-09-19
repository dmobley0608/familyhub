import React from 'react';
import {trackPromise} from 'react-promise-tracker';
import './register.css'

class Register extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			password2:'',
			firstName: '',
			lastName:'',
			passmessage:''
		
		}
	}

	onFirstNameChange = (event) => {
		this.setState({ firstName: event.target.value })
		
	}

	onLastNameChange = (event) => {
		this.setState({ lastName: event.target.value })
		console.log(this.state.lastName)
	}

	onEmailChange = (event) => {
		this.setState({ email: event.target.value })
	}

	onPasswordChange = (event) => {
		this.setState({ password: event.target.value })
	}
	onPassword2Change = (event) => {
		this.setState({ password2: event.target.value })
	}

	onSubmitSignIn = () => {
	
		const passVarifacation = this.state.password === this.state.password2;
		if(passVarifacation){
			trackPromise(
		fetch('https://polar-thicket-52274.herokuapp.com/register', {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				email: this.state.email,
				password: this.state.password,
				firstName: this.state.firstName,
				lastName: this.state.lastName
			})
		})
			.then(response => response.json())
			.then(user => {
				console.log(user)
				if (user[0].id) {					
					this.props.loadUser(user[0]);
					this.props.onRouteChange('home');
				}
			}));
				}else{
					this.setState({passmessage: 'Passwords do not match'});
				}


	}

    render() {
        return (
            <article className=" register">
				
				<div className="signInPhoto">
					<img src="https://images.unsplash.com/photo-1531379410502-63bfe8cdaf6f?ixlib=rb-1.2.1"
                        style={{ maxWidth: '7em', borderRadius: '1em' }} alt="" />
                </div>

				<div className=''>
					{/* Name Fields */}
					<div className='w-100 flex form-row justify-content-center mobile'>                    
						<div className='mx-1'>						 
							<input type="text"className="form-control"  placeholder="First Name" onChange={this.onFirstNameChange}/>						  			
						</div>
						<div className='mx-1'>						 
							<input type="text"className="form-control mobile"  placeholder="Last Name" onChange={this.onLastNameChange}/>										
						</div>
						{/* Email Field */}
						<div className='mt-3 w-100 mx-5'>						 
							<input type="email"className="form-control mobile"  placeholder="Email" onChange={this.onEmailChange}/>										
						</div>					
					</div>

					

					{ /*Password Fields*/}
					<div className='w-100 flex form-row justify-content-center mt-3'>                    
						<div className='mx-1'>						 
							<input type="text"className="form-control"  placeholder="Password" onChange={this.onPasswordChange}/>						  			
						</div>
						<div className='mx-1'>						 
							<input type="text"className="form-control mobile"  placeholder="Confirm Password" onChange={this.onPassword2Change}/>										
						</div>					
					</div>

					{/* Creat User Button */}
					<div className='flex mt-4'>
						<input className='button' onClick={this.onSubmitSignIn }type='submit' value='Create User' />
					</div>

					<div style={{ display: 'flex', justifyContent:'center', alignItems: 'center' }}>
						<p>{this.state.passmessage}</p>
					</div>            

				</div>

			
                
                        
            	    

				
                      
                  
            </article>
        );
    }
}

export default Register;