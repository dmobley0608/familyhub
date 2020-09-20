import React from 'react'

export default class MessageBox extends React.Component{     
    
    messageFormatter = () => {
        for(let i = 0; i< this.props.messages.length; i++){
            if(this.props.messages[i].firstname === this.props.user.firstName){
                const elem = document.getElementsByClassName('messages');                
                elem[i].classList.add('my-message')
                elem[i].classList.remove('message-frame')
            }           
        }       
    }
    componentDidMount(){
        this.messageFormatter()
    }
    
    render(){
        
        
        
        return(
            <div>
                <div  className='message-frame d-flex align-content-center justify-content-center align-items-center mt-5 messages'>
                    <div className='flex-column' >
                    <div >
                       <img className='msg-image' alt='' src={this.props.imgURL}/>
                    </div>
                    <div>
                       <p >~{this.props.name}~</p>
                       <p className='time'>{this.props.time}</p> 
                    </div>
                    </div>
                   
                    <div>
                        <p>{this.props.message}-</p>
                       
                    </div>

                  
                    
                </div>
            </div>
        );
    }
}