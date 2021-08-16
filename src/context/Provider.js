// src/context/Provider.js

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider(props) {

  const [state, setState] = useState({
    cars: {
      red: false,
      blue: false,
      yellow: false,
    },
  })

  const handleSetState = (key, value) => {
    setState({
      cars: {
        ...state.cars,
        [key]: value,
      }
    })
  }

  const moveCar = (car, side) => {
    handleSetState(car, side);
  };

    const context = {
      ...state,
      moveCar,
    };

    const { children } = props;

    return (
      <CarsContext.Provider value={context}>
        {children}
      </CarsContext.Provider>
    );

};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
