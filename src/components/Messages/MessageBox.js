import React from 'react'

export default class MessageBox extends React.Component{
   
    
    render(){
        return(
            <div>
                <div className='message-frame d-flex align-content-center justify-content-center mt-5'>
                    
                    <div>
                        <p>Family Key {this.props.fkey}-</p>
                    </div>
                    <div>
                       <p>{this.props.name}~</p> 
                    </div>
                    <div>
                        <p>{this.props.message}-</p>
                    </div>

                  
                    
                </div>
            </div>
        );
    }
}