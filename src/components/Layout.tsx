import * as React from 'react';

// const logo = require('../logo.svg');

const Layout: React.SFC = ({children}) => (
  <>
    <div className="ui inverted huge borderless fixed fluid menu">
      <a className="header item">ANQ</a>
      <div className="right menu">
        <div className="item">
          <div className="ui small input">
            <input placeholder="Search..."/>
          </div>
        </div>
        <a className="item">ダッシュボード</a><a className="item">Settings</a><a className="item">Profile</a>
        <a className="item">Help</a>
      </div>
    </div>
    <div className="ui grid">
      <div className="row">
        <div className="column" id="sidebar">
          <div className="ui secondary vertical fluid menu">
            <a className="active item">Overview</a><a className="item">Reports</a><a className="item">Analytics</a>
            <a className="item">Export</a>
            <div className="ui hidden divider"/>
            <a className="item">Nav item</a><a className="item">Nav item again</a><a className="item">One more nav</a>
            <a className="item">Another nav item</a><a className="item">More navigation</a>
            <div className="ui hidden divider"/>
            <a className="item">Macintosh</a><a className="item">Linux</a><a className="item">Windows</a>
          </div>
        </div>
        <div className="column" id="content">
          {children}
        </div>
      </div>
    </div>
  </>
);

export default Layout;