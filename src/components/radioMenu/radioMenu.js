import React, { useState } from 'react';
import './radioMenu.css';

const RadioMenu = ({ title, name, labels, setState }) => {
  return (
    <div className="radio-menu-container">
      <div className="radio-title">{ title }</div>
      <div className="radio-menu">
        {
          labels.map(label => {
            return (
              <div className="radio-choice">
                <input 
                  className="radio-choice__dot" 
                  type="radio" 
                  name={ name } 
                  id={ name + label }
                  onClick={ e => setState(label) }
                />
                <label 
                  className="radio-choice__label" 
                  for={ name + label }
                >{ label }
                </label>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default RadioMenu;