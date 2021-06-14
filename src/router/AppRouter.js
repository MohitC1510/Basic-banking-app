import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import DashboardPage from "../components/DashboardPage";
import Transactions from "../components/Transactions";
import Header from "../components/Header";
import NoMatchPage from "../components/NoMatchPage";

export const history= createBrowserHistory()

const AppRouter= () => (
    <BrowserRouter history={history}>
    <div>
      <Header/>
      <Switch>
        <Route path='/Transactions' component={Transactions} exact={true} />
        <Route path='/' component={DashboardPage} />
        <Route component={NoMatchPage} />
      </Switch>
    </div>
  </BrowserRouter>
  );
export default AppRouter;
