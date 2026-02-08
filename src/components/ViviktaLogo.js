import React from 'react';
import './ViviktaLogo.css';
import viviktaLogo from '../assets/vivikta.png';

const ViviktaLogo = ({ size = 40, className = '' }) => {
  return (
    <div className={`vivikta-logo ${className}`} style={{ width: size, height: 'auto' }}>
      <img src={viviktaLogo} alt="Vivikta Entertainers" style={{ width: '100%', height: 'auto' }} />
    </div>
  );
};

export default ViviktaLogo;

