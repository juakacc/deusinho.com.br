import React from 'react';

import PageDefault from '../../components/PageDefault';

import './styles.css';

export default function About() {
  return (
    <PageDefault>
      <div className="about-cover" />

      <div className="container">
        <h2 className="sub-title">Sobre Mim</h2>
      </div>

      <div className="container">
        <div className="grid-16">
          <p>Nesta página irei contar um pouco sobre a minha vida.</p>
        </div>
      </div>
    </PageDefault>
  );
}
