import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'

import Layout from './components/Layout'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import MyAwesomeReactComponent from './MyAwesomeReactComponent';
//
// const App = () => (
//   <MuiThemeProvider>
//     <MyAwesomeReactComponent />
//   </MuiThemeProvider>
// );

const store = createStore(reducers);

render(
    <MuiThemeProvider>
      {/* <MyAwesomeReactComponent /> */}
        <Provider store={store}>
          <Layout/>
        </Provider>
    </MuiThemeProvider>
  ,
  document.getElementById('root')
);
