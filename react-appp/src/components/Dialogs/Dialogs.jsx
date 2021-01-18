import React from 'react';
import css from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItem}>
                <div className={css.dialog}>
                    Antonio
                </div>
                <div className={css.dialog}>
                    Hulio
                </div>
                <div className={css.dialog}>
                    Robert
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