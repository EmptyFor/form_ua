import React, { PureComponent } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import links from '../config/links';
import Login from '../components/Login';
import App from '../components/App';
import MainPage from '../components/MainPage';
import CreateAdvert from '../components/CreateAdvert';
import Provider from '../components/Provider';
import RegistrationFirst from '../components/Registration/FirstPage';
import { MainTemplate } from '../components/themes';
import RegistrationTwice from '../components/Registration/TwicePage';
import Search from '../components/Search';
import Profile from '../components/Profile'
import AdvertDetails from '../components/AdvertDetails';
import ConfidentionalPolitic from '../components/Footer/FooterLinks/politic';
import UserRules from '../components/Footer/FooterLinks/rules';


class Routes extends PureComponent {
  render() {
    return (
      <App>
        <Switch>
          <Route path={links.login} component={Login} />

          <Redirect exact from='/' to={links.home} />

          <Provider>
            <MainTemplate>
              <Route exact path={links.home} component={MainPage} />
              <Route exact path={links.details} component={AdvertDetails} />
              <Route exact path={links.profile} component={Profile} />
              <Route exact path={links.user_rules} component={UserRules} />
              <Route exact path={links.createAdvert} component={CreateAdvert} />
              <Route exact path={links.registrationFirst} component={RegistrationFirst} />
              <Route exact path={links.registrationTwice} component={RegistrationTwice} />
              <Route exact path={links.search} component={Search} />
              <Route exact path={links.confident_politic} component={ConfidentionalPolitic} />
            </MainTemplate>

          </Provider>

        </Switch>
      </App>
    )
  }
}

export default withRouter(Routes);