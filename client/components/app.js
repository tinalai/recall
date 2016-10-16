import React, { Component, PropTypes } from 'react';
import Friend from './friend';
import AddFriend from './add-friend';
import SearchFriend from './search';
import Footer from './footer';
import io from 'socket.io-client';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Search from 'material-ui/svg-icons/action/search';

const title = {
  marginLeft: '15%',
  fontSize: '72px',
  color: '#455A64',
}

const socket = io.connect();

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { search: false }
    this.setInput = this.setInput.bind(this);
    this.renderInput = this.renderInput.bind(this);
    this.setFloatingAction = this.setFloatingAction.bind(this);
    // Main socket connection
    socket.on('connection', console.log('Connected!'));
  }

  setInput() {
    if(!this.state.search) {
      this.setState({ search: true })
    } else {
      this.setState({ search: false })
    }
  }

  setFloatingAction() {
    if(this.state.search) {
      return (
        <ContentAdd />
      )
    } else {
      return (
        <Search />
      )
    }
  }

  renderInput() {
    if (!this.state.search) {
      return (
        <AddFriend socket={socket} {...this.props}/>
      )
    } else {
      return (
        <SearchFriend />
      )
    }
  }

  // For now, please input first and last name
  // e.g. 'sara gee'
  render() {
    return (
      <div>
        <h1 style={title}> recall. </h1>
        <div 
          style={{
            top: 50,
            position: 'fixed',
            zIndex: '999',
            width: '100%' 
        }}>
        <FloatingActionButton onClick={this.setInput}
          style={{marginLeft: '90%'}}
        >
          {this.setFloatingAction()}
        </FloatingActionButton>
        {this.renderInput()}
        </div>
        <Friend socket={socket} {...this.props} />
        <Footer />
      </div>
    );
  }
}
