/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export default function Footer() {
  const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.5rem',
    padding: '3rem',
  };

  return (
    <div className="footer" style={style}>
      <a
        href="https://github.com/aalbino221"
        style={{ textDecoration: 'none', color: 'black' }}
      >
        <i className="fa-brands fa-github" style={{ marginRight: '0.2rem' }} />
        aalbino221
      </a>
    </div>
  );
}
