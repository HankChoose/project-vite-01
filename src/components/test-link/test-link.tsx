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
      <div>
        <Link to="/react/signin"> signin </Link>
      </div>
      <div>
        <Link to="/react/userapply"> userapply </Link>
        <Link to="/react/userprofile"> userprofile </Link>
      </div>
      <div>
        <Link to="/react/checkemail"> checkemail </Link>
        <Link to="/react/checkemail2"> checkemail2 </Link>
      </div>
      <div>
        <Link to="/react/testaxiospost"> testaxiospost </Link>
        <Link to="/react/testaxiospost2"> testaxiospost2 </Link>
        <Link to="/react/testaxiospost3">testaxiospost3 </Link>
      </div>
      <div>
        <Link to="/react/testtoken"> testtoken </Link>
        <Link to="/react/testlist"> testlist </Link>
        <Link to="/react/testnavigate"> testnavigate </Link>
        <Link to="/react/testchangepw"> testchangepw </Link>
        <Link to="/react/testrequest"> testrequest </Link>
      </div>
      <div>
        <Link to="/react/testupload"> testupload </Link>
        <Link to="/react/testgetimages"> testgetimages </Link>
        <Link to="/react/testgetimages2"> testgetimages2 </Link>
        <Link to="/react/testgetimagesarrays"> testgetimagesarrays </Link>
       
      </div>
    </div>;
};
