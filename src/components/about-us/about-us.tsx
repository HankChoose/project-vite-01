import classNames from 'classnames';
import styles from './about-us.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Card,Table,ListGroup} from 'react-bootstrap';

export interface AboutUSProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const AboutUS = ({ className }: AboutUSProps) => {
    return <div className={classNames(styles.root, className)}>
        <div className={classNames(styles.formRowRight)}>
            We are a website dedicated to technical exchange and improvement, aiming to assist developers with common interests in achieving better designs and producing superior products. We encourage enthusiasts to share their development experiences and knowledge to foster a collaborative learning environment.
        </div>
        <div className={classNames(styles.formRowRight)}>
            Team Members:
        </div>
        <div className={classNames(styles.card)}>
            
            <div className={classNames(styles.imagesdiv)}><span className={classNames(styles.people01)}></span></div>
            <div>Hank (Haiyin) Chen</div>
            <div>Developers of this Website</div>
            <div>Email:hankchenv@gmail.com</div>
            <div>Phone:+1 587-936-1806</div>
        </div>
         <div className={classNames(styles.card)}>
            <div>22222</div>
            <div>3333333</div>
            <div>
                333333
            </div>
            <div>333333</div>
            <div>333333</div>
            <div>3333333</div>
        </div>

         <div className={classNames(styles.card)}>
            <div>22222</div>
            <div>3333333</div>
            <div>
                333333
            </div>
            <div>333333</div>
            <div>333333</div>
            <div>3333333</div>
        </div>

       
    </div>;
};
