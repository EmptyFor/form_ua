import React, { PureComponent } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import links from '../config/links';
import Login from '../components/Login';
import App from '../components/App';
import MainPage from '../components/MainPage';
import Provider from '../components/Provider';
import { MainTemplate } from '../components/themes';


class Routes extends PureComponent {
    render () {
      return (
        <App>
        <Switch>
          <Route path={links.login} component={Login} />

          <Redirect exact from='/' to={links.home} />

          <Provider>

            <MainTemplate>
            <Route exact path={links.home} component={MainPage} />

            </MainTemplate>

          </Provider>

        </Switch>
      </App>
      )
    }
  }

  export default withRouter(Routes);