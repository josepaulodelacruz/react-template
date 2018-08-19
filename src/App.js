import React, { Component } from 'react';

import Toolbar from './Components/Toolbar/Toolbar';

import SideDrawer from './Components/SideDrawer/SideDrawer';
import Backdrop from './Components/Backdrop/Backdrop';
import Content from './Components/Content/Content';
import './App.css';

class App extends Component {
  state = {
    SideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return{SideDrawerOpen: !prevState.SideDrawerOpen}
    });
  }

  backdropClickHandler = () => {
    this.setState({SideDrawerOpen: false});
  }
  render() {
    let backdrop;

    if(this.state.SideDrawerOpen){
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }
    return (
      <div style={{height: '100%'}}>
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
          <SideDrawer show={this.state.SideDrawerOpen}/>
          {backdrop}
          <div className="content" style={{paddingTop: '70px'}}>
            <Content/>
          </div>
      </div>

    );
  }
}

export default App;
