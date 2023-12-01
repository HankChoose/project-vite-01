import classNames from 'classnames';
import styles from './test-token.module.scss';

export interface TestTokenProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const TestToken = ({ className }: TestTokenProps) => {

    const token = localStorage.getItem('accessToken');
    console.log('Token=',token);
    return <div className={classNames(styles.root, className)}>
         <div>
        {token ? (
            <div>
            <p>Welcome, {token}</p>
          
            </div>
        ) : (
            <p>No token.</p>
        )}
        </div>
    
    
    </div>;
};
