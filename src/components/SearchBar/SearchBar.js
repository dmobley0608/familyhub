import React from 'react';

class SearchBar extends React.Component{
    render(){
        const {onInputChange} = this.props;
        return(
            <div>
                <div style={{marginTop:'10em'}}>
                   <div className="form-group center">
                       <h2 className='mr-2' style={{ color:'white'}}>Search Quotes</h2>                     
                     <input onChange={onInputChange} style={{width:'35em'}} type="text" className="form-control" />                    
                   </div>
                </div>
            </div>
        );
    }
}

export default SearchBar;