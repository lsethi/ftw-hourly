import React from 'react';
import { array, shape, string } from 'prop-types';
import classNames from 'classnames';
import config from '../../config';

import css from './section.css';

const SectionVenueTypeMaybe = props => {
  const { className, rootClassName, publicData, venueTypeConfig } = props;
  const classes = classNames(rootClassName || css.rootvenueTypes, className);
  const venueTypes = publicData.venueType || [];
  console.log('venueTypeConfig'+venueTypeConfig);
  const venueTypesWithLabels = venueTypes.filter(st => venueTypeConfig.find(c => c.key === st))
    .map(st => {
      const configObject = venueTypeConfig.find(c => c.key === st);
      return configObject && configObject.label ? configObject.label : st;
    });

  return publicData.venueType ? (
    <div className={classes}>{venueTypesWithLabels.join(' • ')}</div>
  ) : null;
};

SectionVenueTypeMaybe.defaultProps = {
  className: null,
  rootClassName: null,
  venueTypeConfig: config.custom.venueType,
};

SectionVenueTypeMaybe.propTypes = {
  className: string,
  rootClassName: string,
  publicData: shape({
    venueType: array,
  }).isRequired,
  venueTypeConfig: array,
};

export default SectionVenueTypeMaybe;