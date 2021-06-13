import React,{Component} from 'react';


class Button extends Component{
    
    render(){
    return(
        <>
            <button className="btn btn-danger ms-4" onClick={this.props.clickevent}>Submit</button>
        </>
    )
    }
}

export default Button;
