import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import PhotoFrame from './PhotoFrame'

class PhotoFrames extends Component{
    constructor(props){
        super(props);
        this.source = [
            {url:"/images/1.jpg",senderName:"Jesse",comments:"Julie's Thailand trip",timeString:"10:00pm 10-12-2017"},
            {url:"/images/2.jpg",senderName:"Jesse",comments:"Look! Whose ham is here?",timeString:"4:00pm 10-12-2017"},
            {url:"/images/3.jpg",senderName:"Jesse",comments:"Julie & her best friend",timeString:"9:14am 10-12-2017"},
            {url:"/images/4.jpg",senderName:"Kathy",comments:"Who want to kiss this little tiny apple?",timeString:"11:05am 09-12-2017"},
            {url:"/images/5.jpg",senderName:"Kathy",comments:"Paradise in China trip",timeString:"10:03am 09-12-2017"},
            {url:"/images/6.jpg",senderName:"Julie",comments:"Do you guys like this Hawaii style?",timeString:"11:00pm 07-12-1017"},
            {url:"/images/7.jpg",senderName:"Grandma",comments:"The top of New Zealand",timeString:"11:00pm 07-12-1017"},
            {url:"/images/8.jpg",senderName:"Grandpa",comments:"Beautiful time spend in New Zealand",timeString:"11:00pm 07-12-1017"},
            {url:"/images/9.jpg",senderName:"Jesse",comments:"Taken by Jesse at 22nd Jan 2015",timeString:"11:00pm 07-12-1017"},
            {url:"/images/10.jpg",senderName:"Jesse",comments:"Taken by Jesse at 22nd Jan 2015",timeString:"11:00pm 07-12-1017"},
            {url:"/images/11.jpg",senderName:"Jesse",comments:"Taken by Jesse at 22nd Jan 2015",timeString:"11:00pm 07-12-1017"},
            {url:"/images/12.jpg",senderName:"Jesse",comments:"Taken by Jesse at 22nd Jan 2015",timeString:"11:00pm 07-12-1017"},
            {url:"/images/13.jpg",senderName:"Jesse",comments:"Taken by Jesse at 22nd Jan 2015",timeString:"11:00pm 07-12-1017"},
            {url:"/images/14.jpg",senderName:"Jesse",comments:"Look! Julie has been graduated",timeString:"11:00pm 07-12-1017"},
            {url:"/images/15.jpg",senderName:"Jesse",comments:"Taken by Jesse at 22nd Jan 2015",timeString:"11:00pm 07-12-1017"},
            {url:"/images/16.jpg",senderName:"Jesse",comments:"Taken by Jesse at 22nd Jan 2015",timeString:"11:00pm 07-12-1017"},
            {url:"/images/17.jpg",senderName:"Jesse",comments:"Taken by Jesse at 22nd Jan 2015",timeString:"11:00pm 07-12-1017"},
            {url:"/images/18.jpg",senderName:"Jesse",comments:"Taken by Jesse at 22nd Jan 2015",timeString:"11:00pm 07-12-1017"},
            {url:"/images/19.jpg",senderName:"Jesse",comments:"Taken by Jesse at 22nd Jan 2015",timeString:"11:00pm 07-12-1017"},
            {url:"/images/20.jpg",senderName:"Jesse",comments:"Taken by Jesse at 22nd Jan 2015",timeString:"11:00pm 07-12-1017"},
            {url:"/images/21.jpg",senderName:"Jesse",comments:"Taken by Jesse at 22nd Jan 2015",timeString:"11:00pm 07-12-1017"},
            {url:"/images/22.jpg",senderName:"Jesse",comments:"Taken by Jesse at 22nd Jan 2015",timeString:"11:00pm 07-12-1017"},
            {url:"/images/23.jpg",senderName:"Jesse",comments:"Taken by Jesse at 22nd Jan 2015",timeString:"11:00pm 07-12-1017"},
            {url:"/images/24.jpg",senderName:"Jesse",comments:"Taken by Jesse at 22nd Jan 2015",timeString:"11:00pm 07-12-1017"},
        ];
        this.index = 0;
        let renderSource1 = [];
        let renderSource2 = [];
        for (let i = 0; i < 3; i++){
            renderSource1.push(this.source[i]);
            this.index = i;
        }
        for (let i = 3; i < 6; i++){
            renderSource2.push(this.source[i]);
            this.index = i;
        }
        this.state = {
            time:"",
            source1:renderSource1,
            source2:renderSource2
        }
    }

    tick = () => {
        let renderSource1 = this.state.source1;
        let renderSource2 = this.state.source2;
        this.index++;
        this.index = this.index >= this.source.length ? 0 : this.index;
        let changingIndex = this.index % 6;
        if (changingIndex < 3) renderSource1[changingIndex] = this.source[this.index];
        else renderSource2[changingIndex-3] = this.source[this.index];

        this.setState({
            source1:renderSource1,
            source2:renderSource2,
        })
    };
    componentDidMount() {
        this.interval = setInterval(this.tick, 4000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render(){
        return(
            <div style={{width:'100%'}}>
                <Grid style={{width:'100%',marginTop:40}}>
                    <Row style={{paddingLeft:30,paddingRight:30}}>
                        {
                            this.state.source1.map((eachPhoto,i) => {
                                return(
                                <Col xs={6} md={4} style={{padding:60}} key={i}>
                                    <PhotoFrame url={eachPhoto.url} sender={eachPhoto.senderName} comments={eachPhoto.comments} timeString={eachPhoto.timeString}/>
                                </Col>
                                )
                            })
                        }
                    </Row>
                    <Row style={{paddingLeft:30,paddingRight:30}}>
                        {
                            this.state.source2.map((eachPhoto,i) => {
                                return(
                                    <Col xs={6} md={4} style={{padding:60}} key={i}>
                                        <PhotoFrame url={eachPhoto.url} sender={eachPhoto.senderName} comments={eachPhoto.comments} timeString={eachPhoto.timeString}/>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                    <Row style={{paddingLeft:30,paddingRight:30}}>
                        <p>{this.state.time}</p>
                    </Row>

                </Grid>
            </div>
        )
    }
}

export default PhotoFrames;