import React, { useState } from 'react';
import Title from '../title/title';

import InputText from '../inputText/inputText';
import RadioMenu from '../radioMenu/radioMenu';

import './formPanel.css';

const FormPanel = () => {
  const [nameInput, setNameInput] = useState('');
  const [breedInput, setBreedInput] = useState('');
  const [birthdayInput, setBirthdayInput] = useState('');
  const [genderInput, setGenderInput] = useState('');
  const [spayNeutInput, setSpayNeutInput] = useState('');
  const [weightInput, setWeightInput] = useState('');

  return (
    <div className="form-panel">
      <Title text="Yay, puppies! Ensure your pup gets the best care!" />

      <form className="form-panel__form">
        <div className="form-panel__split">
          <div className="form-panel__left">
            <InputText 
              placeholder="Pet's Name" 
              label="Name" 
              state={ nameInput } 
              setState={ setNameInput } 
            />
            <InputText 
              placeholder="Pet's Breed" 
              label="Breed" 
              state={ breedInput } 
              setState={ setBreedInput } 
            />
            <RadioMenu 
              title="Gender"
              name="pup-gender" 
              labels={["Female", "Male"]} 
              state={ genderInput }
              setState={ setGenderInput }
            />
          </div>

          <div className="form-panel__right">
            <InputText 
              type="date"
              label="Birthday" 
              placeholder="MM/DD/YYYY"
              setState={ setBirthdayInput } 
            />
            <RadioMenu 
              title="Spayed or Neutered"
              name="pup-spay-status" 
              labels={["Spayed", "Neutered"]} 
              setState={ setSpayNeutInput }
            />
          </div>
        </div>
        <div className="form-panel__full-width">
          <RadioMenu 
            title="Weight"
            name="pup-weight" 
            labels={["0-25lbs", "25-50lbs", "50-100lbs", "100 + lbs"]} 
            setState={ setWeightInput }
          />
        </div>
        <div className="form-panel__controls">
          <button className="form-panel__btn">Back</button>
          <button className="form-panel__btn">Next</button>
        </div>
      </form>
    </div>
  );
};

export default FormPanel;