import React, { Component } from 'react';
// import { Nav, Navbar, NavItem} from 'react-bootstrap';

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
                <p style={{textAlign:'left',fontWeight:'bold',float:'left',margin:0,marginRight:5}}>{this.props.sender}:</p>
                <p style={{textAlign:'left',margin:0}}>{this.props.comments}</p>
                <p style={{textAlign:'right',margin:0,fontSize:10}}>Posted by {this.props.sender} at {this.props.timeString}</p>
            </div>
        )
    }
}

export default PhotoFrame;