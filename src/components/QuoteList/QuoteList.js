import React from 'react';
import QuoteCard from '../QuoteCard/QuoteCard';






class QuoteList extends React.Component{   
  
    
    

    render(){ 
        const {quoteList} = this.props;

       
       
        return(
           
            <div>              
                <div style={{display:'flex', justifyContent:'center'}}>
                <div className='no-scroll view-area'>                  
                    {quoteList.map((user, i)=> {
                  
                    return(
                        <div className='quote-list-area'   key={i} id={this.props.quotes[i].id}>
                          <div style={{flexDirection:'row', }} >
                              <div className= 'quote-list-card'>
                              <QuoteCard 
                                        imgURL={quoteList[i].imgURL}
                                        name={quoteList[i].name}
                                        quote={quoteList[i].quote}/>
                                        
                                </div>
                               
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