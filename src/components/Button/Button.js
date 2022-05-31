import React from "react";
import './Button.css'

const Button = ({onClickBtn, type, disabled, children}) => {

    return (
        <div className='pagination'>
       <button
           type={type}
           onClick={onClickBtn}
           disabled={disabled}>
           {children}
       </button>
     </div>
    );
}

export default Button
