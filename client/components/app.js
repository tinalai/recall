import React, { Component, PropTypes } from 'react';
import Friend from './friend';
import AddFriend from './add-friend';
import SearchFriend from './search';
import io from 'socket.io-client';

import { grey100, grey300, grey500, white, darkBlack, fullBlack } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Search from 'material-ui/svg-icons/action/search';

// MuiTheme Colors
export const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#607D8B',
    primary2Color: '#455A64',
    primary3Color: '#90A4AE',
    accent1Color: '#F50057',
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    pickerHeaderColor: '#607D8B',
    shadowColor: fullBlack,
  },
});

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
    if(!this.state.search) {
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
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={{overflow: 'hidden'}}>
          <h1 style={title}> recall. </h1>
          <FloatingActionButton onClick={this.setInput}>
            {this.setFloatingAction()}
          </FloatingActionButton>
          {this.renderInput()}
          <Friend socket={socket} {...this.props} />
        </div>
      </MuiThemeProvider>
    );
  }
}
