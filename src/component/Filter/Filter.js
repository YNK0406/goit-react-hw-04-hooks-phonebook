import React from "react";
import s from "./Filter.module.scss";
import PropTypes from "prop-types";
const Filter = ({ value, onChange })=> (
      <label className={s.label} >
      Find contacts by name
      <input
         className={s.input}
         name="filter"  
         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        type='text'
        value={value}
        onChange={onChange}
      />
    </label>
  
);
Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
export default Filter;
