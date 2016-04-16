import React from 'react'

const iframeStyle = {
  border: 'none',
  overflow: 'hidden',
  width: '100%'
}

const BlogSidebar = (props) => (
  <div className="sidebar-container pure-u-1-5">
    <div className="sidebar-item">
      <img src="https://d30y9cdsu7xlg0.cloudfront.net/png/23242-200.png"/>
      <iframe src="http://snapwidget.com/in/?u=ZmFzdGNhbHxpbnwxMjV8MnwzfHxub3w1fG5vbmV8b25TdGFydHxub3x5ZXM=&ve=310316" title="Instagram Widget" className="snapwidget-widget" allowTransparency="true" frameBorder="0" scrolling="no" style={iframeStyle}></iframe>
    </div>
    <div className="sidebar-item">
      <img src="https://d30y9cdsu7xlg0.cloudfront.net/png/23267-200.png"/>
      <a className="twitter-timeline" href="https://twitter.com/fastcal" data-widget-id="715760741471690752">Tweets by @fastcal</a>
    </div>
  </div>
)

export default BlogSidebar
