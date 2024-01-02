
import {baseUrl} from './constants';
import Cookies from 'js-cookie';
import axios, { AxiosResponse } from 'axios';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate} from 'react-router-dom';

/*
1.Cross-Site Request Forgery csrfToken
2.Authorization token
3.Content-Type 'application/json','multipart/form-data'
4.
*/

const csrfToken = Cookies.get('csrftoken'); // 获取 CSRF token Cross-Site Request Forgery

const handleError = (error:any) => {
  // 处理错误，例如显示一个错误提示或者进行其他操作
  console.error('API Request Error:', error);
  
  // You can return a specific value or object here
  const errorResponse = { error: true, message: error };
  return errorResponse;
};


/*
//////////////////////////////////////fetch_data_token_get
'Content-Type': 'application/json',
1. /user-profile/
2.
*/
const fetch_data_csrf_get = async (url:string) => {
  const console_title='fetch_data_csrf_get';
  const config_fetch_data_csrf_get = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': csrfToken ?? '', // Use an empty string if csrfToken is undefined
      }
  };
  try {
    const response = await fetch(`${baseUrl}${url}`, config_fetch_data_csrf_get);
    console.log(console_title + ' response:', response);
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
};

/*
//////////////////////////////////////fetch_data_token_get
'Content-Type': 'application/json',
1. /user-profile/
2.
*/
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
      console.log(console_title + ' response:', response);
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

/*
//////////////////////////////////////fetch_data_token_post 
'Content-Type': 'application/json', body: JSON.stringify({ new_username: username }),
1./user-change-username/
2.
*/
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


/*
//////////////////////////////////////axios_form_data_post 
'Content-Type':'multipart/form-data','application/x-www-form-urlencoded'
1./accounts/signup/
2.
*/
const axios_form_data_post = async (url:string,userData:any,contentType:string) => { 
  const console_title='axios_form_data_post';
  const config_axios_form_data_post  = {
      method: 'POST',
        headers: {
          'Content-Type': contentType,
          'X-CSRFToken': csrfToken, // 你的CSRF令牌的名称可能不同
        },
  };
  try {
    const response = await axios.post(`${baseUrl}${url}`,userData, config_axios_form_data_post);
    if (response.status === 200) {
        console.log(console_title+ 'response data',response.data);
        return response.data;

    } else {
      // 处理请求失败的情况
      console.error(console_title+ ' response data error:', response.status, response.statusText);
      return handleError(console_title+ ' response data error:'+response.status +response.statusText);
      
    }
    
  } catch (error) {
      console.error(console_title+ ' error:', error);
      return handleError(console_title+ ' error:'+ error);
      
  }
};

/*
//////////////////////////////////axios_json_data_post 
'Content-Type':'application/json',body: JSON.stringify(userData),
1. /user-token/  
2./accounts/password/reset/
*/
const axios_json_data_post = async (url:string,userData:any) => { 
  const console_title='axios_json_data_post';
  const config_axios_json_data_post  = {
      method: 'POST',
        headers: {
          'Content-Type':'application/json',
          'X-CSRFToken': csrfToken, // 你的CSRF令牌的名称可能不同
        },
      body: JSON.stringify(userData),
  };
  try {
    const response = await axios.post(`${baseUrl}${url}`,userData, config_axios_json_data_post);
    if (response.status === 200) {
        console.log(console_title+ 'response data',response.data);
        return response.data;

    } else {
      // 处理请求失败的情况
      console.error(console_title+ ' response data error:', response.status, response.statusText);
      return handleError(console_title+ ' response data error:'+response.status +response.statusText);
      
    }
    
  } catch (error) {
      console.error(console_title+ ' error:', error);
      return handleError(console_title+ ' error:'+ error);
      
  }
};


/*
//////////////////////////////////axios_json_data_post 
'Content-Type':'application/json',
1. /user-token/  
2./accounts/password/reset/
*/
const axios_json_data_get = async (url:string) => { 
  const console_title='axios_json_data_get';
  const config_axios_json_data_get  = {
      method: 'GET',
        headers: {
          'Content-Type':'application/json',
          'X-CSRFToken': csrfToken, // 你的CSRF令牌的名称可能不同
        },
  };
  try {
    const response = await axios.get(`${baseUrl}${url}`,config_axios_json_data_get);
    if (response.status === 200) {
        console.log(console_title+ 'response data',response.data);
        return response.data;

    } else {
      // 处理请求失败的情况
      console.error(console_title+ ' response data error:', response.status, response.statusText);
      return handleError(console_title+ ' response data error:'+response.status +response.statusText);
      
    }
    
  } catch (error) {
      console.error(console_title+ ' error:', error);
      return handleError(console_title+ ' error:'+ error);
      
  }
};

export { fetch_data_token_get, fetch_data_token_post , axios_form_data_post, axios_json_data_post ,axios_json_data_get , fetch_data_csrf_get};