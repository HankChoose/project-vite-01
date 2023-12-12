import classNames from 'classnames';
import styles from './test-axios-post.module.scss';
import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useState } from 'react';
import { Tabs, Tab, Form, Button } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


export interface TestAxiosPostProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const TestAxiosPost = ({ className }: TestAxiosPostProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [action, setAction] = useState('login');
  const csrfToken = Cookies.get('csrftoken'); // 获取 CSRF token

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleShowPasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const apiUrl = 'https://zhiyouyuec.com/user-demand-create/';

    const userData = {
        username: 'hank2',
        email: 'choose_last@163.com',
        demand_type: 'AAA',
        demand_description: 'ABC'
    };
    
    /*

    const userData = {
      username: 'hankchenv111', // 用户名
      email: 'choose_last@163.com',
      password: 'chy123hank$A', // 电子邮件

    };
   ;
    const userData = {
      username: 'hankchenv111@gmail.com', // 用户名
      password: 'chy123hank$A', // 电子邮件
      password2: 'chy123hank$A', // 密码
     
    };
    const userData = { email, password };
    
    const userData = {
      email: 'choose_last@163.com',
      password: '1234',
      // 添加要发送给Django的数据
    };
    const userData = {
      username: 'hank2', // 用户名
      email: 'hankchenv111@gmail.com', // 电子邮件
      password: 'chy123hank$A', // 密码
     
    };
   
    const userData = {
        username: 'hank',
        email: 'hankchenv@gmail.com',
        demand_type: 'aaa',
        demand_description: '123435666asdf',
     
    };
    */
   
    /*  
    
    
    const dataToSend = {
      key1: 'value1',
      key2: 'value2',
      // 添加要发送给Django的数据
    };
    */

    try {

      //const response = await axios.post('/send-data/',  { email, password } , {
      /*
      const response = await axios.post('/send-data/', userData , {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          //'X-CSRFToken': csrfToken,
        },
        body: JSON.stringify(userData),
      });
      */
      // 设置CSRF令牌作为请求头
      const config = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrfToken, // 你的CSRF令牌的名称可能不同
        },
        body: JSON.stringify(userData),
      };
     
      const response = await axios.post(apiUrl, userData, config);
      //const response = await axios.post('/send-data/', userData);
      //const response = await axios.post(`/api/${action}/`, userData);
      //console.log('Response:',response.data.message);
      console.log('Response from Django:', response.data);
    } catch (error) {
      //console.error(error);
      console.error('Error sending data to Django:', error);
    }
  };

    return (
    <>
      <ButtonGroup size="lg" className="mb-2">
        <Button variant="warning" onClick={() => setAction('login')}>Login</Button>
        <Button variant="warning" onClick={() => setAction('register')}>Register</Button>
      </ButtonGroup>
   
      <h2>User {action}</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="loginEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleEmailChange} required />
          </Form.Group>
          <Form.Group controlId="loginPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type={showPassword ? 'text' : 'password'} placeholder="Password" value={password} onChange={handlePasswordChange} required />
            <Form.Check type="checkbox" label="Show Password" onChange={handleShowPasswordToggle} />
          </Form.Group>
          <Button as="input" type="submit" value="Submit" />{''}
        </Form>
       
    </>
   
  );
};
