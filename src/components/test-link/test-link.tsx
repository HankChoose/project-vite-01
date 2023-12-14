import classNames from 'classnames';
import styles from './test-link.module.scss';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';


export interface TestLinkProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const TestLink = ({ className }: TestLinkProps) => {
    return <div className={classNames(styles.root, className)}>
    
      <Link to="/react/userapply"> D </Link>
      <Link to="/react/signin"> S </Link>
      <Link to="/react/checkemail"> E1 </Link>
      <Link to="/react/checkemail2"> E2 </Link>
      <Link to="/react/testaxiospost"> TA </Link>
      <Link to="/react/testaxiospost2"> TA2 </Link>
      <Link to="/react/testaxiospost3"> TA3 </Link>
      <Link to="/react/testtoken"> TT </Link>
      <Link to="/react/testlist"> TL </Link>
      <Link to="/react/userprofile"> UP </Link>
      <Link to="/react/testnavigate"> TN </Link>
      <Link to="/react/testchangepw"> TP </Link>
    
    </div>;
};
