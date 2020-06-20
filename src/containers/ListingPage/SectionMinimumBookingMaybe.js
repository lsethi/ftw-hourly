import React from 'react';
import { shape, string } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import ReadMore from '../../components/ReadMore/ReadMore';

import css from './section.css';

const SectionMinimumBookingMaybe = props => {
  const { className, rootClassName, publicData } = props;
  const classes = classNames(rootClassName || css.root, className);
  return publicData.minimumBooking ? (
    <div className={classes}>
      <h2 className={css.title}>
        <FormattedMessage id="ListingPage.minimumBookingTitle" />
      </h2>
      <p className={css.content}>
        <ReadMore children={publicData.minimumBooking} lines={5} />
      </p>
    </div>
  ) : null;
};

SectionMinimumBookingMaybe.defaultProps = { className: null, rootClassName: null };

SectionMinimumBookingMaybe.propTypes = {
  className: string,
  rootClassName: string,
  publicData: shape({
    minimumBooking: string,
  }).isRequired,
};

export default SectionMinimumBookingMaybe;
