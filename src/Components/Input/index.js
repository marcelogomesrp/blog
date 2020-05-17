import React from 'react';
import style from './style.module.css';

export default props => {
    const { id = "default", children, ...rest } = props;

    return (
            <div className={style.user_input_wrp}>
                <br />
                <input id={id} type="text" className={style.inputText} required {...rest}/>
                <label for={id} className={style.floating_label}>{children}</label>
            </div>
    )

}