import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Badge from 'material-ui/Badge';
import { GridList, GridTile } from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Star from 'material-ui/svg-icons/toggle/star';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import IconButton from 'material-ui/IconButton';
import './Main.css';

const tilesData = [
  {
    img: 'images/00-52-29-429_640.jpg',
    title: 'Breakfast',
    author: 'aaaabbbb',
  },
  {
    img: 'images/burger-827309_640.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'images/camera-813814_640.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'images/morning-819362_640.jpg',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: 'images/hats-829509_640.jpg',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'images/honey-823614_640.jpg',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'images/vegetables-790022_640.jpg',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: 'images/water-plant-821293_640.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };
  }

  handleChange(value) {
    this.setState({ value });
  }

  render() {
    const cols = (this.props.winSize > 1280)
      ? ((this.props.winSize - 380 - 60) / 250)
      : ((this.props.winSize - 60) / 250);

    return (
      <main className="Main">
        <div>
          <Badge badgeContent={0} badgeStyle={{ top: 12, right: 12 }}>
            <IconButton tooltip="Notifications">
              <NotificationsIcon />
            </IconButton>
          </Badge>
          <Badge badgeContent={10} secondary badgeStyle={{ top: 12, right: 12 }}>
            <IconButton tooltip="Notifications">
              <NotificationsIcon />
            </IconButton>
          </Badge>
        </div>
        <div className="Container">
          <GridList className="GridList" cellHeight={180} padding={10} cols={cols}>
            <Subheader>December</Subheader>
            {tilesData.map(tile => (
              <GridTile
                key={tile.img}
                className="GridTile"
                title={tile.title}
                subtitle={
                  <div>
                    <StarBorder style={{ width: 10, height: 10 }} color="white" />
                    <StarBorder style={{ width: 10, height: 10 }} color="white" />
                    <Star style={{ width: 10, height: 10 }} color="yellow" />
                    <Star style={{ width: 10, height: 10 }} color="yellow" />
                    <Star style={{ width: 10, height: 10 }} color="yellow" />
                    /
                    12345
                    /
                    876543
                  </div>
                }
                actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
              >
                <img src={tile.img} alt={tile.title} />
              </GridTile>
            ))}
          </GridList>
        </div>
      </main>
    );
  }
}

Main.propTypes = { winSize: PropTypes.number.isRequired };
