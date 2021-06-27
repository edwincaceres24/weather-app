import React,{Component} from 'react';


class Button extends Component{
    
    render(){
    return(
        <>
            <button className="btn btn-danger" onClick={this.props.clickevent}>Submit</button>
        </>
    )
    }
}

export default Button;
