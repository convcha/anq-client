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
          <div className="ui grid">
            <div className="row">
              <h1 className="ui huge header">
                Surveys
              </h1>
            </div>
            <div className="ui divider"/>
            <div className="ui divider"/>
            <div className="row">
              <table className="ui single line striped selectable table">
                <thead>
                <tr>
                  <th>
                    #
                  </th>
                  <th>
                    Header
                  </th>
                  <th>
                    Header
                  </th>
                  <th>
                    Header
                  </th>
                  <th>
                    Header
                  </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>
                    1,001
                  </td>
                  <td>
                    Lorem
                  </td>
                  <td>
                    ipsum
                  </td>
                  <td>
                    dolor
                  </td>
                  <td>
                    sit
                  </td>
                </tr>
                <tr>
                  <td>
                    1,002
                  </td>
                  <td>
                    amet
                  </td>
                  <td>
                    consectetur
                  </td>
                  <td>
                    adipiscing
                  </td>
                  <td>
                    elit
                  </td>
                </tr>
                <tr>
                  <td>
                    1,003
                  </td>
                  <td>
                    Integer
                  </td>
                  <td>
                    nec
                  </td>
                  <td>
                    odio
                  </td>
                  <td>
                    Praesent
                  </td>
                </tr>
                <tr>
                  <td>
                    1,003
                  </td>
                  <td>
                    libero
                  </td>
                  <td>
                    Sed
                  </td>
                  <td>
                    cursus
                  </td>
                  <td>
                    ante
                  </td>
                </tr>
                <tr>
                  <td>
                    1,004
                  </td>
                  <td>
                    dapibus
                  </td>
                  <td>
                    diam
                  </td>
                  <td>
                    Sed
                  </td>
                  <td>
                    nisi
                  </td>
                </tr>
                <tr>
                  <td>
                    1,005
                  </td>
                  <td>
                    Nulla
                  </td>
                  <td>
                    quis
                  </td>
                  <td>
                    sem
                  </td>
                  <td>
                    at
                  </td>
                </tr>
                <tr>
                  <td>
                    1,006
                  </td>
                  <td>
                    nibh
                  </td>
                  <td>
                    elementum
                  </td>
                  <td>
                    imperdiet
                  </td>
                  <td>
                    Duis
                  </td>
                </tr>
                <tr>
                  <td>
                    1,007
                  </td>
                  <td>
                    sagittis
                  </td>
                  <td>
                    ipsum
                  </td>
                  <td>
                    Praesent
                  </td>
                  <td>
                    mauris
                  </td>
                </tr>
                <tr>
                  <td>
                    1,008
                  </td>
                  <td>
                    Fusce
                  </td>
                  <td>
                    nec
                  </td>
                  <td>
                    tellus
                  </td>
                  <td>
                    sed
                  </td>
                </tr>
                <tr>
                  <td>
                    1,009
                  </td>
                  <td>
                    augue
                  </td>
                  <td>
                    semper
                  </td>
                  <td>
                    porta
                  </td>
                  <td>
                    Mauris
                  </td>
                </tr>
                <tr>
                  <td>
                    1,010
                  </td>
                  <td>
                    massa
                  </td>
                  <td>
                    Vestibulum
                  </td>
                  <td>
                    lacinia
                  </td>
                  <td>
                    arcu
                  </td>
                </tr>
                <tr>
                  <td>
                    1,011
                  </td>
                  <td>
                    eget
                  </td>
                  <td>
                    nulla
                  </td>
                  <td>
                    Class
                  </td>
                  <td>
                    aptent
                  </td>
                </tr>
                <tr>
                  <td>
                    1,012
                  </td>
                  <td>
                    taciti
                  </td>
                  <td>
                    sociosqu
                  </td>
                  <td>
                    ad
                  </td>
                  <td>
                    litora
                  </td>
                </tr>
                <tr>
                  <td>
                    1,013
                  </td>
                  <td>
                    torquent
                  </td>
                  <td>
                    per
                  </td>
                  <td>
                    conubia
                  </td>
                  <td>
                    nostra
                  </td>
                </tr>
                <tr>
                  <td>
                    1,014
                  </td>
                  <td>
                    per
                  </td>
                  <td>
                    inceptos
                  </td>
                  <td>
                    himenaeos
                  </td>
                  <td>
                    Curabitur
                  </td>
                </tr>
                <tr>
                  <td>
                    1,015
                  </td>
                  <td>
                    sodales
                  </td>
                  <td>
                    ligula
                  </td>
                  <td>
                    in
                  </td>
                  <td>
                    libero
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Layout;