import classNames from 'classnames';
import styles from './top-bar.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import { useTopbar } from '../../TopbarContext';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import { BsPersonUp,BsPerson,BsPersonFill,BsHouseDoor,BsHouseFill,BsSearchHeart,BsPersonFillDash,BsPersonVcard,BsSendPlusFill} from "react-icons/bs";

export interface TopBarProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const TopBar = ({ className }: TopBarProps) => {
    return <div className={classNames(styles.root, className)}>
    
    <div className={classNames(styles.toRow)}>
     <a href="https://zhiyouyuec.com">
      <span className={classNames(styles.logoImage)}></span>
      <span className={classNames(styles.logoWord)}></span>
     </a>
    <a href="https://zhiyouyuec.com"><BsHouseFill />Home</a>
    <Link to="/react/testlink"><BsSearchHeart />T</Link>
    </div>
   

    <div  className={classNames(styles.toRowUser)}>
      <Link to="/react/signin"><BsPersonUp />Sign In</Link>
      <Link to="/react/signup"><BsPersonFillDash />Sign Out</Link>
      <Link to="/react/signup"><BsPersonVcard />Account</Link>
      <Link to="/react/userapply"><BsSendPlusFill />Demand</Link>
    </div>
    
  </div>;
};
