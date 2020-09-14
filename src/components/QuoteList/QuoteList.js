import React from 'react';
import QuoteCard from '../QuoteCard/QuoteCard';





class QuoteList extends React.Component{   
    constructor(){
        super();
        this.state = {
            input:''
        }
    }
    
    onInputChange = (event) =>{
       this.setState({input: event.target.value});
    }

    render(){ 
        const filteredQuotes = this.props.quotes.filter(quotes =>{
            return quotes.name.toLowerCase().includes(this.state.input.toLowerCase());
        })

        const quoteList= filteredQuotes;
       
        return(
           
            <div>
                <div style={{marginTop:'10em'}}>
                   <div className="form-group">
                       <h2 style={{ color:'white'}}>Search Quotes</h2>                     
                     <input onChange={this.onInputChange} style={{width:'35em'}} type="text" className="form-control" />                    
                   </div>
                </div>
                <div style={{display:'flex', justifyContent:'center'}}>
                <div className='no-scroll'style={{ marginTop:'5em',width:'90em', height:'35em',overflow:'auto', borderRadius:'1em'}}>                  
               {quoteList.map((user, i)=> {
                  
                    return(
                        <div style= {{width:'20%', marginTop:'1em', padding:'2em',display:'inline-flex', justifyItems:'center', alignContent:'center'}}  key={i} id={this.props.quotes[i].id}>
                          <div style={{flexDirection:'row', }} >
                                <QuoteCard 
                                        imgURL={quoteList[i].imgURL}
                                        name={quoteList[i].name}
                                        quote={quoteList[i].quote}/>
                                        
                            </div>                
                            
                        </div>
                    );
                })}
               </div>
                </div>
               
               
                
            </div>
        );
    }
}


export default QuoteList;