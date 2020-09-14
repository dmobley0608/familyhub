import React from 'react';
import QuoteCard from '../QuoteCard/QuoteCard';






class QuoteList extends React.Component{   
  
    
    

    render(){ 
        const {quoteList} = this.props;

       
       
        return(
           
            <div>              
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