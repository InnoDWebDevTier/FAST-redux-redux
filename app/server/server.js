/* eslint-disable no-console, no-use-before-define */

import path from 'path'
import Express from 'express'
import qs from 'qs'

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../webpack.config'

import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'

import configureStore from '../common/store/configureStore'
import App from '../common/containers/App'
import { setCounterFromAPI } from '../common/actions/counter'
import { setSidebarFromAPI } from '../common/actions/sidebar'
import { setPhotosFromAPI } from '../common/actions/photo'

import { match, RouterContext, createMemoryHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'
import routes from '../common/routes'

const app = new Express()
const port = 3000

// Use this middleware to set up hot module reloading via webpack.
const compiler = webpack(webpackConfig)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

// This is fired every time the server side receives a request
app.use(handleRender)

function matchRoutes(history, url) {
  return new Promise((resolve, reject) => {
    match({ history, routes, location: url }, (error, redirect, render) => {
      if (error) { reject(error) }
      resolve([redirect, render])
    })
  })
}

function handleRender(req, res) {
  // Read the counter from the request, if provided
  const params = qs.parse(req.query)
  const counter = parseInt(params.counter, 10) || 0

  // Compile an initial state
  const initialState = { counter }

  // Create a new Redux store instance
  const store = configureStore(initialState)

  // Create an enhanced history that syncs navigation events with the store
  const memoryHistory = createMemoryHistory(req.originalUrl)
  const history = syncHistoryWithStore(memoryHistory, store)

  matchRoutes(history, req.url).then((results) => {
    const [redirectLocation, renderProps] = results

    if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
      return Promise.reject('Redirect')
    }

    if (renderProps) {
      return renderProps
    }

    res.status(404).send('Not found - 404')
    return Promise.reject('Not found')
  }).then((renderProps) => {
    return Promise.all([
      store.dispatch(setCounterFromAPI()),
      store.dispatch(setPhotosFromAPI()),
      store.dispatch(setSidebarFromAPI())
    ]).then(() => {
      return renderProps
    })
  }).then((renderProps) => {

    // Render the component to a string
    const html = renderToString(
      <Provider store={store}>
        <RouterContext {...renderProps} />
      </Provider>
    )

    // Grab the initial state from our Redux store
    const finalState = store.getState()

    // Send the rendered page back to the client
    res.send(renderFullPage(html, finalState))
  }).catch((error) => {
    if (error === 'Not found' || error === 'Redirect') {
      return
    }

    console.error(error.stack)

    res.status(500).send('Something broke!')
  })
}

function renderFullPage(html, initialState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `
}

app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`)
  }
})
