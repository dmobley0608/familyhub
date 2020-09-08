import React from 'react';
import './quoteCard.css';
import './quoteCard.css';

class QuoteCard extends React.Component {
    constructor(){
        super();
        this.state = {
            imgURL:'',
            author:'',
            quote:''
        }
    }
  
    
    getQuote = () =>{ 
       
            fetch('http://10.0.1.140:3001/potter')
            .then(response => response.json())
            .then(data => {                                
                this.setState({
                    imgURL: data.imgURL,
                    author: data.name,
                    quote: data.quote            
                })
            })           
      
    }
    componentDidMount(){
        this.getQuote();
    }
   
   
    render() {
       
        const{imgURL, author, quote} = this.state;
        return (
            <article className=" quote-card quote-card-animation" onAnimationIteration={()=>{this.getQuote()}} style={{height: '350px'}}>           
                        
                            <div className='signInPhoto'>
                                <img src={imgURL}style={{ maxWidth: '80px', borderRadius: '1em' }} alt="" />
                            </div>         
                            <div style={{ padding: '.5rem' }}>
                                <div>						
                                    <div >
                                        <h4 >~{author}~ </h4>                          
                                        <div >
                                            <h4>"{quote}"</h4>                            
                                        </div>        
                                    </div>
                                            
                                </div>      
                            </div>       
            
        </article>
            );
    }
}

export default QuoteCard;