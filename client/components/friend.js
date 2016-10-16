import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import DetailBtn from './detail-btn';

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

class Detail extends Component {

  constructor(props) {
    super(props);

    this.state = { users: [] }
    this.renderFriend = this.renderFriend.bind(this);

    let friend = '';

      this.props.socket.on('addedFriend', (data) => {
      this.setState({ users: data });

      // Set localStorage profile to user's socket ID
      localStorage.setItem('profile', this.props.socket.id);
    });
  }

  renderFriend(data) {
    return (
      <ListItem key={data}
        style={{padding: 30}}
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
            <DetailBtn currentFriend={data.join(' ')} {...this.props}/>
          </RaisedButton>
        }
      />
    );
  };

  render() {
    return (
      <List style={{paddingTop: 200}}>
        {this.state.users.map(this.renderFriend)}
      </List>
    )
  }
}

function mapStateToProps({ friend }) {
  return { friend };
}

export default connect(mapStateToProps)(Detail);
