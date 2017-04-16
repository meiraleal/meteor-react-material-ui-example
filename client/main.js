import {Meteor} from 'meteor/meteor';
import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import Sidebar from '../imports/ui/layout/sidebar';
import routes from '../imports/startup/lib/routes';
import reducers from '../imports/reducers'

injectTapEventPlugin();

const store = createStore(reducers, {});

const PetClinicApp = () => (
    <Provider store={store}>
      <Router>
        <MuiThemeProvider>
          <div>
            <Sidebar routes={routes}/>
            <AppBar title="Pet Clinic" showMenuIconButton={false}/>
            <Paper style={{padding: '30px', margin: '30px', marginLeft: '280px'}}>
              {routes.map((route, index) => (
                  <Route key={index} path={route.path} exact={route.exact} component={route.main}/>))}
            </Paper>
          </div>
        </MuiThemeProvider>
      </Router>
    </Provider>
)

Meteor.startup(() => {
    render(<PetClinicApp />, document.getElementById('root'));
});
