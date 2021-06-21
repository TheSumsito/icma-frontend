import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import { LoginOutlined } from '@ant-design/icons'

//* Components
import LogoComponent from '../../components/Logo/Logo';

//* Sass style
import './Login.sass';

class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="login">
          <div className="title">
              <h1>Iniciar Sesión</h1>
          </div>
          <Form
            autoComplete="off"
          >
            <div className="email">
              <Form.Item 
                label="Ingrese su email"
                name="email"
              >
                <Input />
              </Form.Item>
            </div>
            <div className="password">
              <Form.Item 
                label="Ingrese su Contraseña"
                name="password"
              >
                <Input.Password />
              </Form.Item>
            </div>
            <div>
              <Button 
                type="primary" 
                icon={<LoginOutlined />}
              >
                Ingresar
              </Button>
            </div>
          </Form>
        </div>
        <LogoComponent />
      </React.Fragment>
    )
  }
}

export default Login;
