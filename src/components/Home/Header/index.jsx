import React from 'react';
import image from '../../../assets/author.jpg';
import './styles.css';

export default function Header() {

  return (
    <header className='home-header'>
      <h1>My Blog</h1>
      <div className='profile-picture'>
      <img
              className="topImg" 
              src={image}
              alt="image"
      />
      </div>
    </header>
  );
};


