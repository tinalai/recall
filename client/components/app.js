import React, { Component, PropTypes } from 'react';
import Chat from './chat';
import io from 'socket.io-client';

import { grey100, grey300, grey500, white, darkBlack, fullBlack } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

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
  textAlign: 'center',
  fontSize: '72px',
  color: '#455A64',
}

const socket = io.connect();

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = { friend: '' }
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);

    // Main socket connection
    socket.on('connection', console.log('Connected'));
  }

  onInputChange(event) {
    this.setState({ friend: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    socket.emit('addFriend', this.state.friend)
    this.setState({ friend: '' })
  }

  // For now, please input first and last name
  // e.g. 'sara gee'
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <h1 style={title}> cht. </h1>
          <form onSubmit={this.onFormSubmit}>
            <TextField
              value={this.state.friend}
              hintText="insert friends"
              inputStyle={{fontSize: '175%'}}
              fullWidth={true}
              onChange={this.onInputChange}
              floatingLabelText="Friends"
            />
            <RaisedButton
              style={{marginLeft: '50px', marginTop: '25px'}}
              type="submit"
              label="Submit"
            />
          </form>
        <Chat socket={socket} {...this.props} />
        </div>
      </MuiThemeProvider>
    );
  }
}
