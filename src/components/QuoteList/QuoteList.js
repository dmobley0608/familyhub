import React from 'react';
import QuoteCard from '../QuoteCard/QuoteCard';




class QuoteList extends React.Component{   
    
    
    render(){ 
        ;
       
        return(
            <div>
                {this.props.quotes.map((user, i)=> {
                    return(
                        <div style= {{width:'20%', marginTop:'10em', padding:'2em',display:'inline-flex', justifyItems:'center', alignContent:'center'}}  key={i} id={this.props.quotes[i].id}>
                            <div style={{flexDirection:'row', }} >
                                <QuoteCard 
                                        imgURL={this.props.quotes[i].imgURL}
                                        name={this.props.quotes[i].name}
                                        quote={this.props.quotes[i].quote}/>
                                        
                            </div>
                            
                        </div>
                    );
                })}
            </div>
        );
    }
}


export default QuoteList;