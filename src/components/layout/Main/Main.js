import React from 'react';
import './Main.css';
import useCountries from '../../hooks/useCountries';
import CountryCard from '../../CountyCard/CountryCard';

export default function Main() {
  const { countries } = useCountries();
  return (
    <main className="main">
      {countries.map((country) => (
        <CountryCard key={country.id} {...country} />
      ))}
    </main>
  );
}
