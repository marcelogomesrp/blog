import React from 'react';
import style from './style.module.css';

//https://www.w3schools.com/howto/howto_css_parallax.asp

export default props => {
    const {module = "default", children, ... rest} = props;

    return (
        <div>
        <div className={style.parallax} {...rest}>
            {children}
        </div>
        <div className={style.outro}>
            aqui
        </div>
        </div>
    )

}