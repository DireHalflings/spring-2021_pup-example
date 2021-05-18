import PropTypes from 'prop-types';
import './inputText.css';

const InputText = ({ type, placeholder, label, state, setState }) => {
  
  
  return (
    <div className="text-input">
      <label className="text-input__label">{ label }</label>
      <input className="text-input__input" type={ type } placeholder={ placeholder } value={ state } onChange={ e => setState(e.target.value) } />
    </div>
  );
};

InputText.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

InputText.defaultProps = {
  type: "text",
  placeholder: "",
  label: ""
};

export default InputText;

