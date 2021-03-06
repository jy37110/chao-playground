import React, { Component } from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom'
//import createBrowserHistory from 'history/createBrowserHistory'
import createHashHistory from 'history/createHashHistory'
// import NavigationBar from './Components/NavigationBar';
import Home from './Pages/Home';


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            login:false,
            currentUser:"",
        }
    }

    // handleTest = () => {
    //     alert(JSON.stringify(this.state));
    // };

    onUserStateChange = (userState, user) => {
        this.setState({login:userState, currentUser:user});
        //alert("userState: " + userState + "\nstate: " + this.state.login);
    };


    render() {
        //const LoginPage = (props) => {return(<Login loginStateHandler={this.onUserStateChange.bind(this)}{...props}/>)};
        // const NavBarLeftItems = [
        //     {name:"Link1",eventKey:"1"},
        //     {name:"Link2",eventKey:"2"},
        //     {name:"Link3",eventKey:"3"},
        //     {name:"Link4",eventKey:"4"},
        // ];
        // const NavBarRightItems = [
        //     {name:"Link11",eventKey:"11"},
        //     {name:"Link12",eventKey:"12"},
        //     {name:"Link13",eventKey:"13"},
        //     {name:"Link14",eventKey:"14"},
        // ];
        return (
            <div className="App">
                {/*<Router history={createBrowserHistory()}>*/}
              <HashRouter history={createHashHistory()}>
                <div className="routerContainer" style={{width:"100%"}}>
                  {/*<NavigationBar*/}
                      {/*userLoggedIn={this.state.login}*/}
                      {/*currentUser={this.state.currentUser}*/}
                      {/*loginStateHandler={this.onUserStateChange}*/}
                      {/*navBarLeftItems={NavBarLeftItems}*/}
                      {/*navBarRightItems={NavBarRightItems}*/}
                  {/*/>*/}
                  <div>
                    <Route exact path="/" component={Home}/>
                      {/*<Route path="/about" component={About}/>*/}
                  </div>
                </div>
              </HashRouter>

              <div className="footer">
                  {/*<button onClick={this.handleTest}>Test Button</button>*/}
              </div>
            </div>
        );
    }
}

export default App;
