import React from 'react';
import Badge from 'material-ui/Badge';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import IconButton from 'material-ui/IconButton';
import MainGridList from './MainGridList';
import './Main.css';

const games = [
  {
    id: 1,
    title: 'Breakfast',
    description: 'easy',
    url: 'aaaa',
    category1: 1,
    category2: 2,
    category3: 3,
    iconUri: 'images/00-52-29-429_640.jpg',
    star: 4,
    access: 50,
  },
  {
    id: 2,
    title: 'Tasty burger',
    description: 'easy',
    url: 'aaaa',
    category1: 1,
    category2: 2,
    category3: 3,
    iconUri: 'images/burger-827309_640.jpg',
    star: 1,
    access: 10,
  },
  {
    id: 3,
    title: 'Camera',
    description: 'easy',
    url: 'aaaa',
    category1: 1,
    category2: 2,
    category3: 3,
    iconUri: 'images/camera-813814_640.jpg',
    star: 2,
    access: 30,
  },
  {
    id: 4,
    title: 'Morning',
    description: 'easy',
    url: 'aaaa',
    category1: 1,
    category2: 2,
    category3: 3,
    iconUri: 'images/morning-819362_640.jpg',
    star: 5,
    access: 200,
  },
  {
    id: 5,
    title: 'Hats',
    description: 'easy',
    url: 'aaaa',
    category1: 1,
    category2: 2,
    category3: 3,
    iconUri: 'images/hats-829509_640.jpg',
    star: 3,
    access: 60,
  },
  {
    id: 6,
    title: 'Honey',
    description: 'easy',
    url: 'aaaa',
    category1: 1,
    category2: 2,
    category3: 3,
    iconUri: 'images/honey-823614_640.jpg',
    star: 2,
    access: 15,
  },
  {
    id: 7,
    title: 'Vegetables',
    description: 'easy',
    url: 'aaaa',
    category1: 1,
    category2: 2,
    category3: 3,
    iconUri: 'images/vegetables-790022_640.jpg',
    star: 5,
    access: 320,
  },
  {
    id: 8,
    title: 'Water plant',
    description: 'easy',
    url: 'aaaa',
    category1: 1,
    category2: 2,
    category3: 3,
    iconUri: 'images/water-plant-821293_640.jpg',
    star: 5,
    access: 344,
  },
];

export default () => (
  <main className="Main">
    <NoticeBar />
    <div className="Container">
      <MainGridList category={1} games={games} />
    </div>
  </main>
);

const NoticeBar = () => (
  <div>
    <Badge badgeContent={0} badgeStyle={{ top: 12, right: 12 }}>
      <IconButton tooltip="Notifications"><NotificationsIcon /></IconButton>
    </Badge>
    <Badge badgeContent={10} secondary badgeStyle={{ top: 12, right: 12 }}>
      <IconButton tooltip="Notifications"><NotificationsIcon /></IconButton>
    </Badge>
  </div>
);
