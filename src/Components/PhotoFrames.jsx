import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import PhotoFrame from './PhotoFrame'

class PhotoFrames extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }


    render(){
        const source = [
            {url:"/images/1.jpg",title:"",description:"Taken by Jesse at 22nd Jan 2015"},
            {url:"/images/2.jpg",title:"",description:"Mum's leg"},
            {url:"/images/3.jpg",title:"",description:"Julie & Keke"},
            {url:"/images/4.jpg",title:"",description:"Little panda"},
            {url:"/images/5.jpg",title:"",description:"Taken by Jesse in Guizhou China"},
            {url:"/images/6.jpg",title:"",description:"Hawaii style"},
        ];
        return(
            <div style={{width:'100%'}}>
                <Grid style={{width:'100%',marginTop:40}}>
                    <Row style={{paddingLeft:30,paddingRight:30}}>
                        <Col xs={6} md={4} style={{padding:60,textAlign:'center'}}>
                            <PhotoFrame url={source[0].url} description={source[0].description}/>
                        </Col>
                        <Col xs={6} md={4} style={{padding:60,textAlign:'center'}}>
                            <PhotoFrame url={source[1].url} description={source[1].description}/>
                        </Col>
                        <Col xs={6} md={4} style={{padding:60,textAlign:'center'}}>
                            <PhotoFrame url={source[2].url} description={source[2].description}/>
                        </Col>
                    </Row>
                    <Row style={{paddingLeft:30,paddingRight:30}}>
                        <Col xs={6} md={4} style={{padding:60,textAlign:'center'}}>
                            <PhotoFrame url={source[3].url} description={source[3].description}/>
                        </Col>
                        <Col xs={6} md={4} style={{padding:60,textAlign:'center'}}>
                            <PhotoFrame url={source[4].url} description={source[4].description}/>
                        </Col>
                        <Col xs={6} md={4} style={{padding:60,textAlign:'center'}}>
                            <PhotoFrame url={source[5].url} description={source[5].description}/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default PhotoFrames;