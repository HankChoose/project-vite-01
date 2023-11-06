import classNames from 'classnames';
import styles from './page-2.module.scss';
import { UserApply } from '../user-apply/user-apply';
import { UserApply2 } from '../user-apply-2/user-apply-2';
import rootReducer from '../../reducers/rootReducer';
import { createStore } from 'redux';
import axios from "axios";
import React, { useRef, useState, Component, ChangeEvent } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Button } from '../button/button';

export interface Page2Props {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const Page2 = ({ className }: Page2Props) => {
    type RootState = {
        userInfo: {
            name: string;
            email: string;
        };
    };
    type RootState2 = {
        userInfo2: {
            applytype: string;
            requirements: string;
        };
    };
    const handleSubmission = () => {
        // Combine userInfo and userInfo2 from the store
        //const userInfo = useSelector((state: RootState) => state.userInfo);
        const userInfo2 = useSelector((state: RootState2) => state.userInfo2);
        //console.log("userInfo:",userInfo);
        console.log("userInfo2:",userInfo2);
    };
    return <div className={classNames(styles.root, className)}>
         <UserApply2 />Page2
    </div>;
};
