import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from '../common/store/configureStore'
import routes from '../common/routes'

const initialState = window.__INITIAL_STATE__
const store = configureStore(initialState)
const rootElement = document.getElementById('app')

const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  rootElement
)
