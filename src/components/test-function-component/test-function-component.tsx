import classNames from 'classnames';
import styles from './test-function-component.module.scss';

interface TestFunctionComponentProps {
  name: string;
  age: number;
}

export const TestFunctionComponent = (props:TestFunctionComponentProps) => {
  const { name, age } = props;

  return (
    <div>
      <h1>Hello, {name}! You are {age} years old.</h1>
    </div>
  );
}

