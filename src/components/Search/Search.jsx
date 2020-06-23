import React from 'react';
import './Search.scss';

const Search = (props) => {
  const onInputChange = (props && props.onInputChange) || null;
  const onSearch = (props && props.onSearch) || null; //porque es una funcion null
  const placeholder = (props && props.placeholder) || '';
  const buttonText = (props && props.buttonText) || '';
  if (onInputChange) {
    return (
    <form>
      <div className="search row">
        <div className="search__form form">
          <input
            type="text"
            className="form__control  input"
            placeholder={placeholder}
            onChange={(e) => onInputChange(e)}
          />
        </div>

        {
          buttonText && onSearch && (
            <div className="form__control  col-md-4 py-3">
              <button className="button__form btn" type="button" onClick={onSearch}>
              {buttonText}
              </button>
            </div>
          )
        }
      </div>
    </form>
    );
  }
  return null;
}

export default Search;
