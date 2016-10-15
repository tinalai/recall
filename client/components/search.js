import React, { Component, PropTypes } from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

export default class SearchFriend extends Component {

  constructor(props) {
    super(props);

    this.state = { search: '' }
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ friend: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.setState({ search: '' })
    console.log('searching');
  }

  // For now, please input first and last name
  // e.g. 'sara gee'
  render() {
    return (
      <form 
        style={{marginLeft: '50%'}}
        onSubmit={this.onFormSubmit}>
        <TextField
          value={this.state.search}
          inputStyle={{fontSize: '175%'}}
          onChange={this.onInputChange}
        />
        <RaisedButton
          style={{marginLeft: '50px', marginTop: '25px'}}
          type="submit"
          label="Search"
        />
      </form>
    );
  }
}
