import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Game from './Game';
import './Main.css';

export default () => (
  <main className="Main">
    <Switch>
      <Route path="/" component={Game} />
      {/* 将来用：ログイン */}
    </Switch>
  </main>
);
