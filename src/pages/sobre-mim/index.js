import React from 'react';

import PageDefault from '../../components/PageDefault';

import '../../css/normalize.css';
import '../../css/reset.css';
import '../../css/grid.css';
import '../../css/styles.css';

export default function About() {
  return (
    <PageDefault>
      <div className="container not-found">
        <h2 className="sub-title">Sobre Mim</h2>

        <div className="grid-4">
          {/* <img src={NotFoundImage} alt="Página não encontrada" /> */}
        </div>
        <div className="grid-12">
          <p>Nesta página irei contar um pouco sobre a minha vida.</p>
        </div>
      </div>
    </PageDefault>
  );
}
