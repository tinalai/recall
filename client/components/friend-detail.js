import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import CommunicationEmail from 'material-ui/svg-icons/communication/email';
import CommunicationCall from 'material-ui/svg-icons/communication/call';
import Cake from 'material-ui/svg-icons/social/cake';
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
            rightIcon={<Cake />}
          />
        </List>
        <div style={{width: '100%'}}>
          <RaisedButton
            style={{width: '100%', marginBottom: '10px'}}
            onClick={this.editClicked}
            label="Leave a Note"
          />
          <RaisedButton
            backgroundColor="#a4c639"
            style={{width: '100%'}}
            onClick={this.editClicked}
            label="Edit"
          />
        </div>
      </div>
    )
  }
}