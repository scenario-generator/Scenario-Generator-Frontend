import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './App';
import Router from './Router';
import ENV from '../../env'

/**
 * Component is exported for conditional usage in Root.js
 */
module.exports = class Root extends Component {
  componentDidMount() {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({
        google_ad_client: ENV.pageAds.client,
        enable_page_level_ads: true
      });
    }
    catch(err) {}
  }

  render() {
    const { store, history } = this.props;
    return (
      /**
       * Provider is a component provided to us by the 'react-redux' bindings that
       * wraps our app - thus making the Redux store/state available to our 'connect()'
       * calls in component hierarchy below.
       */
      <Provider store={store}>
        <Router history={history} />
      </Provider>
    );
  }
};
