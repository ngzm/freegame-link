import React from 'react';
import Badge from 'material-ui/Badge';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import IconButton from 'material-ui/IconButton';
import RdxGamesList from '../containers/RdxGamesList';
import './Main.css';

export default () => (
  <main className="Main">
    <NoticeBar />
    <RdxGamesList />
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
