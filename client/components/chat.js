import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Message from './message';

import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  height: 150,
  width: 150,
  margin: 40,
  textAlign: 'center',
  fontSize: '48px',
  cursor: 'pointer',
};

class Chat extends Component {

  constructor(props) {
    super(props);

    this.state = { users: [] }
    this.renderUsers = this.renderUsers.bind(this);

    let friend = '';

      this.props.socket.on('addedFriend', (data) => {
      this.setState({ users: data });
      this.props.addFriend(data);

      // Set localStorage profile to user's socket ID
      localStorage.setItem('profile', this.props.socket.id);
    });
  }

  renderUsers(data) {
    console.log(data)
    return (
      <ListItem key={data}
        pimaryText={data}
        style={{marginTop: 10, padding: 50}}
        leftAvatar={
          <Avatar
            style={{left: 10}}
          >
            {data.charAt(0).toUpperCase()}
            {function() {
              data = data.split(' ');
              return data[1].charAt(0).toUpperCase();
            }()}
          </Avatar>
        }
        rightIcon={
          <RaisedButton style={{marginRight: '50px'}}>
            <Message currentFriend={data.join(' ')} {...this.props}/>
          </RaisedButton>
        }
      />
    );
  };

  render() {
    return (
      <List>
        {this.state.users.map(this.renderUsers)}
      </List>
    )
  }
}

function mapStateToProps({ friend }) {
  return { friend };
}

export default connect(mapStateToProps)(Chat);