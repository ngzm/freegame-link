import React from 'react';
import PropTypes from 'prop-types';
import Badge from 'material-ui/Badge';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import IconButton from 'material-ui/IconButton';
import RdxGamesList from '../containers/RdxGamesList';
import './Main.css';

const Main = ({ wsize }) => (
  <main className="Main">
    <NoticeBar />
    <RdxGamesList wsize={wsize} />
  </main>
);
Main.propTypes = { wsize: PropTypes.number.isRequired };
export default Main;

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
