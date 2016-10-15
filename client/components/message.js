import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateMessage } from '../actions/index';

import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import {List, ListItem} from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

let received = {};

export default class Message extends Component {

  constructor(props) {
    super(props);

    this.state = { open: false, message: '', receive: [] }
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.renderMessages = this.renderMessages.bind(this);

    this.props.socket.on('newMessage', (data) => {
      received = data[this.props.currentFriend];
      this.setState({ receive: received})
    });
  }

  handleOpen() {
    this.setState({ open: true })
  }

  handleClose() {
    this.setState({ open: false })
  }

  onInputChange(event) {
    this.setState({ message: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.socket.emit('addMessage', this.props.currentFriend, this.state.message)
    this.setState({ message: '' })
  }

  renderMessages(data) {
    console.log(data)
    console.log(Math.floor(Math.random() * this.state.receive.length) * 3 + 1)
    // Refactor later - if localStorage matches user, a different color
    if (this.props.socket.id === localStorage.profile) {
      return (
        <ListItem
          key={Math.floor(Math.random() * this.state.receive.length) * 3 + 1}
          style={{backgroundColor: '#F50057'}}
          primaryText={data}
          disabled={true}
        />
      )
    } else {
      return (
        <ListItem
          key={data}
          primaryText={data}
          disabled={true}
        />
      );
    };
  }

  render() {
    console.log(this.props)
    const actions = [
      <form onSubmit={this.onFormSubmit}>
        <TextField
          value={this.state.message}
          hintText="say it"
          inputStyle={{fontSize: '175%'}}
          onChange={this.onInputChange}
          fullWidth={true}
        />
        <FlatButton
          type="submit"
          label="Submit"
          primary={true}
        />
      </form>,
    ];
    return (
      <div>
        <RaisedButton label="Details" onTouchTap={this.handleOpen} />
        <Dialog
          title={this.props.currentFriend}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <List>
            {this.state.receive.map(this.renderMessages)}
          </List>
        </Dialog>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateMessage }, dispatch);
}

export default connect(null, mapDispatchToProps)(Message);
