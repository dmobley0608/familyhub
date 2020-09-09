import React from 'react';
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
		fetch('https://guarded-temple-33031.herokuapp.com/register', {
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
			})
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

				<div style={{display:"flex", flexDirection:"column",  paddingLeft:'7em'}}>
				<div style={{display:'flex', justifyContent:'flex-start', alignItems:'center'}}>                    
                    <div style={{ paddingRight: '1em', display:'flex', justifyContent:'center', alignItems:'center',}}>
						<h4 style={{ paddingRight: '.5em' }}>First Name: </h4>
						<input onChange={this.onFirstNameChange} type='text' style={{ height: '1em', padding: '.25rem', borderRadius: '.25rem' }} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center',  alignItems: 'center' }}>
                        <h4 style={{ paddingRight: '.5em' }}>Last Name: </h4>
						<input onChange={this.onLastNameChange} type='text' style={{ height: '1em', padding: '.25rem', borderRadius: '.25rem' }} />
					</div> 
				</div> 
				              
				
				<div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginLeft:'2em', marginRight:'' }}>
                    <h4 style={{ paddingRight: '.5em' }}>Email: </h4>
					<input onChange={this.onEmailChange} type='text' style={{ height: '1em',  padding: '.25rem', borderRadius: '.25rem' }} />
                </div>

				<div style={{display:"flex", justifyContent:"flex-start"}}>
					<div style={{ display: 'flex', justifyContent: 'center',  alignItems: 'center', paddingRight: '2em' }}>
                        <h4 style={{ paddingRight: '.5em' }}>Password: </h4>
						<input onChange={this.onPasswordChange} type='text' style={{ height: '1em',  padding: '.25rem', borderRadius: '.25rem' }} />
                    </div>
					<div style={{ display: 'flex', justifyContent: 'center',  alignItems: 'center' }}>
                        <h4 style={{ paddingRight: '.5em' }}>Confirm Password: </h4>
						<input onChange={this.onPassword2Change} type='text' style={{ height: '1em', padding: '.25rem', borderRadius: '.25rem' }} />
                    </div>
	

				</div>

				</div>

			
                
                        
            	 <div style={{ display: 'flex', justifyContent:'center', alignItems: 'center' }}>
					<input className='button' onClick={this.onSubmitSignIn }type='submit' value='Create User' />
                 </div>

				<div style={{ display: 'flex', justifyContent:'center', alignItems: 'center' }}>
					<p>{this.state.passmessage}</p>
                </div>               

				
                      
                  
            </article>
        );
    }
}

export default Register;