import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import FriendDetail from './friend-detail';

import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import {List, ListItem} from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

let received = {};

export default class DetailBtn extends Component {

  constructor(props) {
    super(props);

    this.state = { open: false }
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);

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

  render() {
    return (
      <div>
        <RaisedButton label="Detail" onTouchTap={this.handleOpen} />
        <Dialog
          title={this.props.currentFriend}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
        <FriendDetail {...this.props}/>
        </Dialog>
      </div>
    )
  }
}