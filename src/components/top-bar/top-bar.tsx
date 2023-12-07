import classNames from 'classnames';
import styles from './top-bar.module.scss';
import { useTopbar } from '../../TopbarContext';

export interface TopBarProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const TopBar = ({ className }: TopBarProps) => {
    const { topbarContent, updateTopbarContent } = useTopbar();
    return <div className={classNames(styles.root, className)}>
    
    <div>1,2</div>
    <div>3,4</div>
    
    <div>
      <img src={topbarContent.icon} alt="Topbar Icon" />
      <a href={topbarContent.link}>{topbarContent.text}</a>
      <button onClick={() => updateTopbarContent({
        icon: 'new-icon',
        link: '/new-link',
        text: 'New Topbar Content',
      })}>
        Change Topbar Content
      </button>
    </div>
    
    </div>;
};
