
import {baseUrl} from './constants';
import Cookies from 'js-cookie';
import axios, { AxiosResponse } from 'axios';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate} from 'react-router-dom';


const csrfToken = Cookies.get('csrftoken'); // 获取 CSRF token

const handleError = (error:any) => {
  // 处理错误，例如显示一个错误提示或者进行其他操作
  console.error('API Request Error:', error);
  throw error;
};

/////////////////////////////////////////////////fetch_data_token_get for /user-profile/
const fetch_data_token_get = async (url:string,token:any) => {
  const console_title='fetch_data_token_get';
  if (token) {
      const config_fetch_data_token_get = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`,
            }
      };
      try {
        const response = await fetch(`${baseUrl}${url}`, config_fetch_data_token_get);
        if (response.ok) {
            const data = await response.json();
            console.log(console_title+'response data',data);
            return data;

        } else {
          // 处理请求失败的情况
          console.error(console_title+' response data error:', response.status, response.statusText);
          return handleError(console_title+' response data error:'+response.status +response.statusText);
         
        }
        
      } catch (error) {
          console.error(console_title+' error:', error);
          return handleError(console_title+' error:'+ error);
         
      }
    } else {
      // 处理令牌不存在的情况
      console.error(console_title+' token is undefined or null');
      return handleError(console_title+' token is undefined or null');
     
    }

};


/////////////////////////////////////////////////fetch_data_token_get for /user-change-username/
const fetch_data_token_post = async (url:string,token:any,username:string) => { 
  const console_title='fetch_data_token_post';
  if (token) {
      const config_fetch_data_token_post = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`,
            },
        body: JSON.stringify({ new_username: username }),
      };
      try {
        const response = await fetch(`${baseUrl}${url}`, config_fetch_data_token_post);
        if (response.ok) {
            const data = await response.json();
            console.log(console_title+ 'response data',data);
            return data;

        } else {
          // 处理请求失败的情况
          console.error(console_title+ ' response data error:', response.status, response.statusText);
          return handleError(console_title+ ' response data error:'+response.status +response.statusText);
         
        }
        
      } catch (error) {
          console.error(console_title+ ' error:', error);
          return handleError(console_title+ ' error:'+ error);
         
      }
    } else {
      // 处理令牌不存在的情况
      console.error(console_title+ ' token is undefined or null');
      return handleError(console_title+ ' token is undefined or null');
     
    }

};

export { fetch_data_token_get, fetch_data_token_post };