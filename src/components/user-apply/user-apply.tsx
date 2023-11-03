import classNames from 'classnames';
import styles from './user-apply.module.scss';
import React, { useRef, useState, Component } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { updateName, updateEmail, updateApplytype, updateRequirements } from "../../actions/userInfoActions";

export interface UserApplyProps {
    className?: string;
}

type RootState = {
    userInfo: {
        name: string;
        email: string;
        applytype: string;
        requirements: string;
    };
};
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const UserApply = ({ className }: UserApplyProps) => {

    const userInfo = useSelector((state:RootState) => state.userInfo);
    const dispatch = useDispatch();

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateName(e.target.value));
        console.log(e.target.value);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateEmail(e.target.value));
         console.log(e.target.value);
    };

    const handleApplytypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateApplytype(e.target.value));
        console.log(e.target.value);
    };

    const handleRequirementsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateRequirements(e.target.value));
        console.log(e.target.value);
    };

    return <div className={classNames(styles.root, className)}>
       <div>
        <input type="text" placeholder="Name" value={userInfo.name} onChange={handleNameChange} />
        <input type="text" placeholder="Email" value={userInfo.email} onChange={handleEmailChange} />
        <input type="text" placeholder="Applytype" value={userInfo.applytype} onChange={handleApplytypeChange} />
        <input type="text" placeholder="Requirements" value={userInfo.requirements} onChange={handleRequirementsChange} />
        </div>
    </div>;
};
