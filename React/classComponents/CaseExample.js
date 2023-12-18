import React from 'react';

export default class CaseExample extends React.Component{
    render(){
        return(
            
            <>
                  Enter String : <input type="text" placeholder="Enter String"/>
                  <br/>
                   Reverse : <input type="checkbox"  />
                  <br/> 
                  UpperCase :<input type="radio" name="nm"  />
                  <br/>
                  LowerCase :<input type="radio" name="nm"/>
                  <br/>
                  TitleCase :<input type="radio" name="nm"/>
            </>
        )
    }
    
}