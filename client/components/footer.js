import React, {Component} from 'react';

import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import Favorite from 'material-ui/svg-icons/action/favorite';
import People from 'material-ui/svg-icons/social/people';

const recentsIcon = <People />
const favoritesIcon = <Favorite />;

export default class Footer extends Component {

  constructor(props) {
    super(props);

    this.state = { selectedIndex: 0 };
    this.select = (index) => this.setState({selectedIndex: index});
  }


  render() {
    return (
      <div style={{bottom: '0', position: 'fixed', width: '100%'}}>
        <Paper style={{height: '50px'}} zDepth={1}>
          <BottomNavigation selectedIndex={this.state.selectedIndex}>
            <BottomNavigationItem
              label="Recents"
              icon={recentsIcon}
              onTouchTap={() => this.select(0)}
            />
            <BottomNavigationItem
              label="Favorites"
              icon={favoritesIcon}
              onTouchTap={() => this.select(1)}
            />
          </BottomNavigation>
        </Paper>
      </div>
    );
  }
}