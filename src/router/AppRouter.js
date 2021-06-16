import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import DashboardPage from "../components/DashboardPage";
import AboutUsPage from "../components/AboutUsPage";
import ContactUsPage from "../components/ContactUsPage";
import Transactions from "../components/Transactions";
import TransferPage from "../components/TransferPage";
import Accounts from "../components/AccountsPage";
import Header from "../components/Header";
import NoMatchPage from "../components/NoMatchPage";

export const history= createBrowserHistory()

const AppRouter= () => (
    <BrowserRouter history={history}>
    <div>
      <Header/>
      <Switch>
        <Route path='/' component={DashboardPage} exact={true} />
        <Route path='/transactions' component={Transactions} />
        <Route path='/transfer' component={TransferPage} />
        <Route path='/aboutus' component={AboutUsPage} />
        <Route path='/contactus' component={ContactUsPage} />
        <Route path='/accounts' component={Accounts} />
        <Route component={NoMatchPage} />
      </Switch>
    </div>
  </BrowserRouter>
  );
export default AppRouter;
