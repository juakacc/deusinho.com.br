import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import Footer from '../Footer';

import '../../css/normalize.css';
import '../../css/reset.css';
import '../../css/grid.css';
import '../../css/styles.css';
import SEO from '../seo';

require('typeface-rubik');
require('typeface-roboto');

function PageDefault({ children }) {
  return (
    <div>
      <SEO />
      <Header />
      { children }
      <Footer />
    </div>
  );
}

PageDefault.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any.isRequired,
};

export default PageDefault;
