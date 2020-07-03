import React from 'react';
import { shape, string } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import ReadMore from '../../components/ReadMore/ReadMore';

import css from './section.css';

const SectionVenueHoursMaybe = props => {
  const { className, rootClassName, publicData } = props;
  const classes = classNames(rootClassName || css.root, className);
  return publicData.venueHours ? (
    <div className={classes}>
      <h2 className={css.title}>
        <FormattedMessage id="ListingPage.venueHoursTitle" />
      </h2>
      <p className={css.content}>
        <ReadMore children={publicData.venueHours} lines={5} />
      </p>
    </div>
  ) : null;
};

SectionVenueHoursMaybe.defaultProps = { className: null, rootClassName: null };

SectionVenueHoursMaybe.propTypes = {
  className: string,
  rootClassName: string,
  publicData: shape({
    venueHours: string,
  }).isRequired,
};

export default SectionVenueHoursMaybe;
