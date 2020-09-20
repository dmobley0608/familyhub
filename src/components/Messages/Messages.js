import React from 'react'
import './messages.css'
import MessageBox from './MessageBox'
import AddMessageForm from './AddMessageForm'

export default class Messages extends React.Component{
    constructor(){
        super();
        this.state = {
            messages:[]
            
        }
    }

    getMessages = () => {
        
        fetch("https://polar-thicket-52274.herokuapp.com/messages",{
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				family_key: this.props.user.familyKey							
            })
        })
        .then(response => {return response.json()})
        .then(data => {
           
            let tmpArray = []
            for (let i=0; i<data.length; i++){
                tmpArray.push(data[i])
            }            
            this.setState({
                messages:tmpArray
            })
        })
    }

   

componentDidMount(){ 
    this.getMessages()   
}
    render(){        
        const {messages} = this.state;
        
        return(
            <div>
                <div className='d-inline-flex mobile-search'>
                    <div id ='messagef' className='invisible'>
                        <AddMessageForm  user={this.props.user} getMessages={this.getMessages} onRouteChange= {this.props.onRouteChange}/>           
                    </div>
                    <div>
                        <p className='add-message' onClick={()=>{document.getElementById('messagef').classList.remove('invisible')}}>+ Message</p>
                    </div>        
                </div>      
                
                <div className='d-flex align-content-center justify-content-center mt-3' >
                    <div className='frame no-scroll'>
                        <div style={{width:'95%'}}  >
                            {messages.map((user, i)=> {                                                                           
                               messages.sort((a, b) => parseFloat(b.message_count) - parseFloat(a.message_count))                              
                                return(                                                                          
                                    <div className='d-flex justify-content-center align-content-center' key={i} id={i}>
                                         <div className=''  >                                                                                           
                                        <MessageBox 
                                            name={messages[i].firstname} 
                                            message={messages[i].message}                                          
                                           imgURL={messages[i].imgURL}
                                           time={messages[i].time}
                                           user={this.props.user}
                                           messages={this.state.messages}
                                           />
                                                                                    
                                        </div> 
                            
                                    </div>                             
                                );
                            })}
                        </div>                
                    </div>
                </div>
      
                
            </div>
        );
    }
}

