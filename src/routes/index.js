import React from 'react';
import { Switch } from 'react-router-dom';
import SignIn from '~/pages/SignIn';
import Route from './Route';
import Deliveries from '~/pages/Deliveries';
import Deliverymen from '~/pages/Deliverymen';
import Recipients from '~/pages/Recipients';


export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/encomendas" component={Deliveries} isPrivate />
      <Route path="/entregadores" component={Deliverymen} isPrivate />
      <Route path="/destinatarios" component={Recipients} isPrivate />
      {/* 
      <Route path="/destinatarios" component={Deliveries} isPrivate />
      <Route path="/problemas" component={Deliveries} isPrivate /> */}

      <Route component={() => <h1>404</h1>} />
    </Switch>
  );
}
