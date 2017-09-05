import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Badge from 'material-ui/Badge';
import { GridList, GridTile } from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Star from 'material-ui/svg-icons/toggle/star';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import IconButton from 'material-ui/IconButton';
import AppStyle, { getWinSize } from './AppStyle';
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
    const winSize = getWinSize();
    const mainSize = (winSize > AppStyle.MINIMUM_PC_WIDTH)
      ? (winSize - 300) * 0.88
      : winSize * 0.88;
    const cols = Math.floor(mainSize / AppStyle.MAIN_GRIDTILE_WIDTH);

    const acnt = (tilesData.length % cols) > 0 ? cols - (tilesData.length % cols) : 0;
    const additional = [];
    for (let i = 0; i < acnt; i += 1) {
      const key = `additional-${i}`;
      additional.push(<GridTile key={key} />);
    }

    console.log(`cols = ${cols}`);
    const gwidth = (cols * (AppStyle.MAIN_GRIDTILE_WIDTH + AppStyle.MAIN_GRIDLIST_PAD)) + 18;
    console.log(`gwidth = ${gwidth}`);

    const style = {
      gridList: {
        width: gwidth,
      },
      gridTile: {
        width: AppStyle.MAIN_GRIDTILE_WIDTH,
      },
    };

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
          <GridList
            style={style.gridList}
            cellHeight={AppStyle.MAIN_GRIDTILE_HEIGHT}
            padding={AppStyle.MAIN_GRIDLIST_PAD}
            cols={cols}
          >
            <Subheader>December</Subheader>
            {tilesData.map(tile => (
              <GridTile
                key={tile.img}
                style={style.gridTile}
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
            {additional}
          </GridList>
        </div>
      </main>
    );
  }
}
