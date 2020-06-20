import React from 'react';
import { shape, string } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
//import ReadMore from '../../components/ReadMore/ReadMore';
import moment from 'moment';

import css from './section.css';

const KEY_CODE_ENTER = 13;

const SectionDetailsMaybe = props => {
  const { className, rootClassName, publicData, onOpenCancellationPolicy } = props;
  const classes = classNames(rootClassName || css.root, className);

  const handleCancellationPolicyKeyUp = e => {
    // Allow click action with keyboard like with normal links
    if (e.keyCode === KEY_CODE_ENTER) {
      onOpenCancellationPolicy();
    }
  };
  const cancellationPolicyLink = (
    <span
      className={css.cancellationPolicyLink}
      onClick={onOpenCancellationPolicy}
      role="button"
      tabIndex="0"
      onKeyUp={handleCancellationPolicyKeyUp}
    >
      <FormattedMessage id="ListingPage.cancellationPolicyLink" />
    </span>
  );

  const defaultMessageStudioText = (
    <span className={css.messagStudio}>Message venue for more</span>
  );

  const dayRateDiscountText =
    publicData && publicData.dayRateDiscount
      ? `${publicData.dayRateDiscount.discountPerecent}% off for ${
          publicData.dayRateDiscount.hoursForDiscount
        }+ hours`
      : defaultMessageStudioText;

  let minBookingText =
    publicData && publicData.minimumBooking
      ? `${publicData.minimumBooking} hour`
      : defaultMessageStudioText;

  if (publicData.minimumBooking > 1) {
    minBookingText += 's';
  }

  let studioHoursText = '';

  if (publicData.availability === 'alwaysAvailable') {
    studioHoursText = 'Always available 24/7';
  } else if (publicData.availability === 'messageForAvailability') {
    studioHoursText = 'Message for availability';
  } else if (publicData.availability === 'specificHours') {
    studioHoursText = `Daily from 
        ${moment.utc(publicData.specificHours_hourStart, 'hh:mm a').format('hh:mm a')} 
        to 
        ${moment.utc(publicData.specificHours_hourEnd, 'hh:mm a').format('hh:mm a')}
        `;
  } else {
    studioHoursText = defaultMessageStudioText;
  }
  // console.log(JSON.stringify(publicData, null, 2));

  return publicData ? (
    <div className={classes}>
      <h2 className={css.title}>
        <FormattedMessage id="ListingPage.detailsTitle" />
      </h2>
      <div>
        <div className={css.detailsRow}>
          <div className={css.detailsleftColumn}>
            <FormattedMessage id="ListingPage.minimumBookingLabel" />
          </div>
          <div className={css.detailsRightColumn}>{minBookingText}</div>
        </div>

        <div className={css.detailsRow}>
          <div className={css.detailsleftColumn}>
            <FormattedMessage id="ListingPage.maxVenueOccupancyLabel" />
          </div>
          <div className={css.detailsRightColumn}>
            {publicData.maximumOccupancyNumber
              ? `${publicData.maximumOccupancyNumber} people`
              : defaultMessageStudioText}
          </div>
        </div>

        {/* <div className={css.detailsRow}>
          <div className={css.detailsleftColumn}>
            <FormattedMessage id="ListingPage.venueHoursLabel" />
          </div>
          <div className={css.detailsRightColumn}>{studioHoursText}</div>
        </div> */}

        <div className={css.detailsRow}>
          <div className={css.detailsleftColumn}>
            <FormattedMessage id="ListingPage.minBookingNoticeLabel" />
          </div>
          <div className={css.detailsRightColumn}>
            {publicData.minimumNoticeToBook
              ? publicData.minimumNoticeToBook
              : defaultMessageStudioText}
          </div>
        </div>

        <div className={css.detailsRow}>
          <div className={css.detailsleftColumn}>
            <FormattedMessage id="ListingPage.dayRateDiscountLabel" />
          </div>
          <div className={css.detailsRightColumn}>{dayRateDiscountText}</div>
        </div>
        {/*
        <div className={css.detailsRow}>
          <div className={css.detailsleftColumn}>
            <FormattedMessage id="ListingPage.cancellationPolicyLabel" />
          </div>
          <div className={css.detailsRightColumn}>
            <FormattedMessage
              id="ListingPage.cancellationPolicyLinkOnly"
              values={{ cancellationPolicyLink }}
            />
          </div>
        </div> */}
      </div>
    </div>
  ) : null;
};

SectionDetailsMaybe.defaultProps = { className: null, rootClassName: null };

SectionDetailsMaybe.propTypes = {
  className: string,
  rootClassName: string,
};

export default SectionDetailsMaybe;
