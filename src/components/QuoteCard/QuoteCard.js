import React from 'react';
import './quoteCard.css';


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
           
            fetch(' https://polar-thicket-52274.herokuapp.com/potter')
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
        if(this.props.route === 'home'){
            return (
                <article className=" quote-card quote-card-animation" onAnimationIteration={()=>{this.getQuote()}} >           
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
                                :<div style={{ padding: '' }}>
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
        }else{
            return (
                <article className="quote-list">           
                            {imgURL === '' 
                                ?<div>
                                    <h4>Image Loading</h4>
                                </div>
                                :<div>
                                    <img src={this.props.imgURL}style={{ width: '80px',height:'112px', borderRadius: '1em' }} alt="" />
                                </div>
                            }{author === '' || quote === ''
                                ?<div>
                                    <h2>Loading</h2>
                                </div>                        
                                :<div >
                                    <div>                                    						
                                        <div >                                       
                                            <h4 >~{this.props.name}~ </h4>                                                             
                                            <div >
                                                <h4>"{this.props.quote}"</h4>                            
                                            </div>        
                                        </div>
                                                
                                    </div>     
                                </div> 
                            }                               
                    </article>
                );
        }
        
    }
}

export default QuoteCard;