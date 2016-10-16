import React, { Component, PropTypes } from 'react';
import Detail from './friend';
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

    socket.on('connection');
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
        <div style={{top: 0, 
          position: 'fixed', 
          width: '100%'}}>
          <span style={title}> recall. </span>
          <FloatingActionButton onClick={this.setInput}
            style={{marginTop: '-10%', marginLeft: '90%'}}
          >
            {this.setFloatingAction()}
          </FloatingActionButton>
          {this.renderInput()}
        </div>
        <div>
          <Detail socket={socket} {...this.props} />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}
