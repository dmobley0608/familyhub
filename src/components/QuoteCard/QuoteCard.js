import React from 'react';
import './quoteCard.css';
import {trackPromise} from 'react-promise-tracker';

class QuoteCard extends React.Component {
    constructor(){
        super();
        this.state = {
            imgURL:'',
            author:'',
            quote:'',            
        }
    }
  
    
    getQuote = () =>{ 
            trackPromise(
            fetch(' https://polar-thicket-52274.herokuapp.com/potter')
            .then(response => response.json())
            .then(data => {                                
                this.setState({
                    imgURL: data.imgURL,
                    author: data.name,
                    quote: data.quote            
                })
            }));           
      
    }
    componentDidMount(){
        this.getQuote();
    }
   
   
    render() {
       
        const{imgURL, author, quote} = this.state;
        return (
            <article className=" quote-card quote-card-animation" onAnimationIteration={()=>{this.getQuote()}} style={{height: '350px'}}>           
                        {imgURL === '' 
                            ?<div>
                                <h4>Image Loading</h4>
                            </div>
                            :<div className='signInPhoto'>
                                <img src={imgURL}style={{ maxWidth: '80px', borderRadius: '1em' }} alt="" />
                            </div>
                        }{author === '' || quote === ''
                            ?<div>
                                <h2>Loading</h2>
                            </div>                        
                            :<div style={{ padding: '.5rem' }}>
                                <div>                                    						
                                    <div >                                       
                                        <h4 >~{author}~ </h4>                                                             
                                        <div >
                                            <h4>"{quote}"</h4>                            
                                        </div>        
                                    </div>
                                            
                                </div>      
                            </div> 
                        }
                    
                                      
        </article>
            );
    }
}

export default QuoteCard;