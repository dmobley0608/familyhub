import React from 'react'
import './messages.css'
import MessageBox from './MessageBox'


export default class Messages extends React.Component{
    constructor(){
        super();
        this.state = {
            messages:[],
            message:'',
            today: new Date()
            
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
    sendMessages = () => {  
        let time = this.state.today.getHours() + ":" + this.state.today.getMinutes() + ":" + this.state.today.getSeconds();
                
        fetch("https://polar-thicket-52274.herokuapp.com/sendmessage",{
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
                message: this.state.message,
                id: this.props.user.id,
                family_key:this.props.user.familyKey,
                time: time							
            })
                    
        } )
        .then(response => response.json())
        .catch(err => console.log(err))
        this.getMessages();
    }

    onMessageChange = (event) =>{
        this.setState({
            message:event.target.value
        })
    }


   

componentDidMount(){ 
    this.getMessages()   
}
    render(){        
        const {messages} = this.state;
        
        return(
            <div>
                <div className='d-inline-flex mobile-search message-bar'>
                    <div className='d-flex w-100'>                
                          <input onChange={this.onMessageChange} type="text" className="form-control" placeholder="Type Message"/>
                          <button onClick={()=>{this.sendMessages()}}type="button" className="btn btn-primary">Send</button>
                             
                          
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

