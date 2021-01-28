import React from 'react';
import css from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const Dialogs = (props) => {
    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItem}>
                <div className={css.dialog}>
                    <NavLink to='/dialog/1'>Antonio</NavLink>
                </div>
                <div className={css.dialog}>
                    <NavLink to='/dialog/2'>Hulio</NavLink>
                </div>
                <div className={css.dialog}>
                    <NavLink to='/dialog/3'>Robert</NavLink>
                </div>
                <div className={css.dialog}>
                    <NavLink to='/dialog/4'>Nickolas</NavLink>
                </div>
            </div>
            <div className={css.messages}>
                <div className={css.dialog}>Hi</div>
                <div className={css.dialog}>How R U?</div>
                <div className={css.dialog}>Yo</div>
            </div>
        </div>
    )
}

export default Dialogs;