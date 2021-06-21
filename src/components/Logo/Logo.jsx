import React, { Component } from 'react';

import Logo from '../../assets/img/logo.png';

class LogoComponent extends Component {
  render() {
    return (
      <div className="logo">
        <img src={Logo} alt="logo-icma"/>
      </div>
    )
  }
}

export default LogoComponent;