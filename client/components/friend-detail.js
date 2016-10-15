import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import CommunicationEmail from 'material-ui/svg-icons/communication/email';
import CommunicationCall from 'material-ui/svg-icons/communication/call';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

export default class FriendDetail extends Component {

  constructor(props) {
    super(props);
    this.state = { edit: false };
    this.editClicked = this.editClicked.bind(this);
  }

  editClicked() {
    this.setState({ edit: true })
  }

  render() {
    return (
      <div>
        <List>
          <ListItem
              rightIcon={<CommunicationCall />}
              primaryText="(323) 555 - 6789"
            />          
            <ListItem
              rightIcon={<CommunicationEmail />}
              primaryText="sgee03@gmail.com"
            />
          <ListItem
            primaryText="9/13/1990"
            rightIcon={<CommunicationChatBubble />}
          />
          <ListItem
            insetChildren={true}
            primaryText="Leave a note"
            rightIcon={<CommunicationChatBubble />}
          />
        </List>
        <RaisedButton
          backgroundColor="#a4c639"
          fullWidth={true}
          onClick={this.editClicked}
          label="Edit"
        />
      </div>
    )
  }
}