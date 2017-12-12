import React, { Component } from 'react';
import { Nav, Navbar, NavItem} from 'react-bootstrap';

class PhotoFrame extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }


    render(){
        return(
            <div style={{backgroundColor:'white',color:'black',padding:5}}>
                <img className='center-block' src={this.props.url} style={{}} alt="200X100"/>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default PhotoFrame;