import React from 'react'

export default class MessageBox extends React.Component{
   
    
    render(){
        return(
            <div>
                <div className='message-frame d-flex align-content-center justify-content-center align-items-center mt-5'>
                    <div className='flex-column' >
                    <div >
                       <img className='msg-image' alt='' src={this.props.imgURL}/>
                    </div>
                    <div>
                       <p >~{this.props.name}~</p> 
                    </div>
                    </div>
                   
                    <div>
                        <p style={{fontSize:'1.5em'}}>{this.props.message}-</p>
                    </div>

                  
                    
                </div>
            </div>
        );
    }
}