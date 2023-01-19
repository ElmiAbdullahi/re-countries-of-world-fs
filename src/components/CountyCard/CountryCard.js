import React from 'react';
import './CountryCard.css';

export default function CountryCard(country) {
  return (
    <div className="country-card">
      <h3>{country.name}</h3>
      <h4>{country.local_name}</h4>
    </div>
  );
}
