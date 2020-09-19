import React from 'react';

export default class AddMessageForm extends React.Component{
    constructor(){
        super();
        this.state = {
            message: ''
        }
    }

    

    sendMessages = () => {           
        fetch("https://polar-thicket-52274.herokuapp.com/sendmessage",{
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
                message: this.state.message,
                id: this.props.user.id,
                family_key:this.props.user.familyKey							
            })            
        })
        .then(response => response.json())
        .catch(err => console.log(err))
    }

    onMessageChange = (event) =>{
        this.setState({
            message:event.target.value
        })
    }

    render(){

        return(
            <div className = 'message-form'>
                <div className="form-group">
                  <label >Message:</label>
                  <textarea onChange={this.onMessageChange} className="form-control" rows="8" ></textarea>
                </div>
                <div className='px-2'>
                    <button onClick={()=>{
                        this.sendMessages()
                        this.props.getMessages()
                        document.getElementById('messagef').classList.add('invisible')                 
                    }} type="button" className="btn btn-primary btn-sm btn-block"
               >Send</button>
                <button  onClick={()=>{
                    document.getElementById('messagef').classList.add('invisible')                  
                    }} type="button"className="btn btn-dark btn-sm btn-block"
                   >Back</button>
                </div>
               
              
            </div>
        );
    }

}