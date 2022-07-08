import React from 'react';
import {styles} from '../styles';
import PropTypes from 'prop-types';

export class CopyCat extends React.Component {

  render() {
    const {copying, toggleTape, images, inputValue, handleChange, catName} = this.props;

    return (
      <div>
        <h1 style={{ marginBottom: '80px' }}>Copy Cat {catName || 'Tom'}</h1>
        <input type='text'
            value={inputValue}
            onchange={handleChange} />
        <img style={styles.imgStyles}
          alt='cat'
          src={copying ? images.copycat : images.quietcat}
          onClick={toggleTape}
        />
        <p>{copying && inputValue}</p>
      </div>
    );
  };
}

CopyCat.propTypes = {
  copying: PropTypes.bool.isRequired,
  toggleTape: PropTypes.func.isRequired,
  images: PropTypes.object.isRequired,
  inputValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  catName: PropTypes.string.isRequired
}