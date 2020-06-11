import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import IconLogo from './IconLogo';
import config from '../../config';
import LogoImage from './open-bota.png';
import css from './Logo.css';

const Logo = props => {
  const { className, format, ...rest } = props;
  const mobileClasses = classNames(css.logoMobile, className);

  // If you want to use image instead of svg as a logo you can use the following code.
  // Also, remember to import the image as LogoImage here.
  // <img className={className} src={LogoImage} alt={config.siteTitle} {...rest} />
  if (format === 'desktop') {
    return (
      <img className={className} src={LogoImage}  alt={config.siteTitle} {...rest} />
    );
  }
  return <IconLogo className={mobileClasses} {...rest} />;
};

const { oneOf, string } = PropTypes;

Logo.defaultProps = {
  className: null,
  format: 'desktop',
};

Logo.propTypes = {
  className: string,
  format: oneOf(['desktop', 'mobile']),
};

export default Logo;
