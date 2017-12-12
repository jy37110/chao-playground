import React, { Component } from 'react';
import { Nav, Navbar, NavItem} from 'react-bootstrap';

class NavigationBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            activeKey: '/',
            searchKey: '小学',
        }
    }

    navigate = (eventKey) => {
        if(eventKey !== ""){
            this.setState({activeKey: eventKey});
            window.location = "#/" + eventKey;
        }
    };

    // handleLogout = () => {
    //     this.props.loginStateHandler(false,"");
    //     //window.location = "#/redirect/LogoutSuccess";
    // };

    handleSearchClick = () => {
        console.log(this.state.searchKey);
    };

    render(){
        // const signInButton =
        //     <NavItem eventKey={"login"}>
        //         <span className="NavItemTop">登陆</span>
        //     </NavItem>;
        //
        // const signOut =
        //     <NavDropdown eventKey={""} className="NavItemTop" title={"欢迎回来" + this.props.currentUser.firstname} id="basic-nav-dropdown">
        //         <MenuItem eventKey={1}>我的课程</MenuItem>
        //         <MenuItem eventKey={2}>个人档案</MenuItem>
        //         <MenuItem eventKey={3}>偏好设置</MenuItem>
        //         <MenuItem divider />
        //         <MenuItem eventKey={"redirect/LogoutSuccess"} onClick={this.handleLogout}>注销</MenuItem>
        //     </NavDropdown>;

        return(
            <div style={{width:"100%"}}>

                <Navbar className="NavBarBottom" style={{height:60,marginBottom:0,backgroundColor:'white'}}>
                    <Navbar.Collapse>
                        <Nav className="myNavBottom" activeKey={this.state.activeKey} onSelect={this.navigate}>
                            <NavItem className="myNavItemBottomImg" eventKey={" "}>
                                <span style={{width:125,height:59,padding:0,margin:'0 auto',display:'block'}}>
                                    <img src={"http://via.placeholder.com/200x100"} style={{weight:'100%', height:'100%'}} alt="200X100"/>
                                </span>
                        </NavItem>
                            {this.props.navBarLeftItems.map((eachItem,i) => {
                                return(
                                    <NavItem className="myNavItemBottomOthers" eventKey={eachItem.eventKey} key={i}>
                                        <span className="NavItemBottom">{eachItem.name}</span>
                                    </NavItem>
                                )
                            })}

                        </Nav>
                        <Nav pullRight className="myNavBottom" activeKey={this.state.activeKey} onSelect={this.navigate}>
                            {this.props.navBarRightItems.map((eachItem,i) => {
                                return(
                                    <NavItem className="myNavItemBottomOthers" eventKey={eachItem.eventKey} key={i}>
                                        <span className="NavItemBottom">{eachItem.name}</span>
                                    </NavItem>
                                )
                            })}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default NavigationBar;