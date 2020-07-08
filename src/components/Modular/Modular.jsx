import React, { useState } from 'react';
// import Modal from './Modal';
import './Modular.styles.scss';

const Modular = (props) => {
  return (
    <div>
      <div className='overlay-wrapper'>
        <div className='overlay-content'>
          <span className='close' onClick={props.showModular}>
            &times;
          </span>

          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Modular;
