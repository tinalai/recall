import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addNewFriend } from '../actions/index';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

class AddFriend extends Component {

  constructor(props) {
    super(props);

    this.state = { friend: '' }
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  static propTypes = {
    addNewFriend: PropTypes.func.isRequired,
  }

  onInputChange(event) {
    this.setState({ friend: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    // this.props.addNewFriend(this.state.friend);
    this.props.socket.emit('addFriend', this.state.friend)
    this.setState({ friend: '' })
  }

  // For now, please input first and last name
  // e.g. 'sara gee'
  render() {
    return (
      <form
        style={{marginLeft: '50%'}}
        onSubmit={this.onFormSubmit}>
        <TextField
          value={this.state.friend}
          hintText="insert friend"
          inputStyle={{fontSize: '175%'}}
          onChange={this.onInputChange}
          floatingLabelText="Friends"
        />
        <RaisedButton
          style={{marginLeft: '50px', marginTop: '25px'}}
          type="submit"
          label="Add Friend"
        />
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addNewFriend }, dispatch);
}

export default connect(null, mapDispatchToProps)(AddFriend);
