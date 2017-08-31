import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';

const styles = {
  main: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };
  }

  handleChange(value) {
    this.setState({
      value: value,
    });
  }

  render() {
    return (
      <main style={styles.main}>

      <div>
        <Badge
          badgeContent={0}
          badgeStyle={{ top: 12, right: 12 }}
        >
          <IconButton tooltip="Notifications">
            <NotificationsIcon />
          </IconButton>
        </Badge>
        <Badge
          badgeContent={10}
          secondary={true}
          badgeStyle={{ top: 12, right: 12 }}
        >
          <IconButton tooltip="Notifications">
            <NotificationsIcon />
          </IconButton>
        </Badge>
      </div>

        <Tabs
          value={this.state.value}
          onChange={() => { this.handleChange(); }}
        >
          <Tab label="ACTION" value="a">
            <div>
              <h2 style={styles.headline}>Controllable Tab A</h2>
              <p>
                Tabs are also controllable if you want to programmatically pass them their values.
                This allows for more functionality in Tabs such as not
                having any Tab selected or assigning them different values.
              </p>
            </div>
          </Tab>
          <Tab label="ADVENTURE" value="b">
            <div>
              <h2 style={styles.headline}>Controllable Tab B</h2>
              <p>
                This is another example of a controllable tab. Remember, if you
                use controllable Tabs, you need to give all of your tabs values or else
                you wont be able to select them.
              </p>
            </div>
          </Tab>
          <Tab label="SPORTS" value="c">
            <div>
              <h2 style={styles.headline}>Controllable Tab C</h2>
              <p>
                This is another example of a controllable tab. Remember, if you
                use controllable Tabs, you need to give all of your tabs values or else
                you wont be able to select them.
              </p>
            </div>
          </Tab>
          <Tab label="BRAIN" value="d">
            <div>
              <h2 style={styles.headline}>Controllable Tab D</h2>
              <p>
                This is another example of a controllable tab. Remember, if you
                use controllable Tabs, you need to give all of your tabs values or else
                you wont be able to select them.
              </p>
            </div>
          </Tab>
          <Tab label="VARIETY" value="e">
            <div>
              <h2 style={styles.headline}>Controllable Tab D</h2>
              <p>
                This is another example of a controllable tab. Remember, if you
                use controllable Tabs, you need to give all of your tabs values or else
                you wont be able to select them.
              </p>
            </div>
          </Tab>
        </Tabs>
      </main>
    );
  }
}

export default Main;
