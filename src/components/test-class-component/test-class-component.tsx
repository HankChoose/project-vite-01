import classNames from 'classnames';
import styles from './test-class-component.module.scss';
import React, { Component } from 'react';

interface TestClassComponentProps {
  name: string;
  age: number;
}

class TestClassComponent extends Component<TestClassComponentProps> {
    render() {
    const { name, age } = this.props;
    return (
      <div>
        <h1>Hello, {name}! You are {age} years old.</h1>
      </div>
    );
  }
}

export default TestClassComponent;
