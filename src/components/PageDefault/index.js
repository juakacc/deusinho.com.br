import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import Footer from '../Footer';

function PageDefault({ children }) {
  return (
    <div>
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
