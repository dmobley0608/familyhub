import React from 'react';
import './signIn.css';

class SignIn extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			signInEmail: '',
			signInPassword: '',
			loginError: ''
		}
	}

	onEmailChange = (event) => {
		this.setState({ signInEmail: event.target.value })		
	}

	onPasswordChange = (event) => {
		this.setState({ signInPassword: event.target.value })		
	}

	onSubmitSignIn = () => {
		fetch('https://guarded-temple-33031.herokuapp.com/signin', {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				email: this.state.signInEmail,
				password: this.state.signInPassword				
			})
		})	
			.then(response => response.json()) 
			.then(user => {
				console.log(user)				
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
			})
		
	}


    render() {
        const { onRouteChange } = this.props;
        return (
            <article className=" card">
                <div className="signInPhoto">
                    <img src="https://images.unsplash.com/photo-1598943421302-521e169bc602?ixlib=rb-1.2.1"
                         style={{ width: '10em', borderRadius: '1em' }} alt="" />
                </div>
				<form>
					<div style={{ padding: '.5rem' }}>
						<div style={{ display: 'table', width: '100%', marginTop: '.25rem' }}>						
							<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<h4 style={{ paddingRight: '.5em' }}>Email: </h4>
								<input 
									onChange={this.onEmailChange} 
									autoComplete='off' 
									type='text' 
									style={{ height: '1em', padding: '.25rem', borderRadius: '.25rem' }}
								/>
							</div>
							<div style={{ display: 'flex', alignItems: 'center' }}>
								<h4 style={{ paddingRight: '.5em' }}>Password: </h4>
								<input 
									onChange={this.onPasswordChange} 
									autoComplete='off' 
									type='password' 
									style={{ height: '1em', padding: '.25rem', borderRadius: '.25rem' }} 
								/>                           
							</div>
							<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<p 
									onClick={this.onSubmitSignIn}  
									value='Sign In' 
									className='button' 
								>Sign In</p>
							</div>
							<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<p 
								onClick={() => onRouteChange('register')}
								className='button'
								>Register</p>
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