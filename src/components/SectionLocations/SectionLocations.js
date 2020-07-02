import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './SectionLocations.css';

import nyImage from './images/ny-yogi.jpg';
import wedImage from './images/wedding.jpg';
import storageImage from './images/storage.jpg';
import lunchImage from './images/lunch.jpg';
import meetingImage from './images/conference.jpg';
import kidsImage from './images/kids.jpg';
import partyImage from './images/entertainment.jpg';

class LocationImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const LazyImage = lazyLoadWithDimensions(LocationImage);

const locationLink = (name, image, searchQuery) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
    <NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
      <div className={css.linkText}>
        <FormattedMessage
          id="SectionLocations.listingsInLocation"
          values={{ location: nameText }}
        />
      </div>
    </NamedLink>
  );
};

const SectionLocations = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionLocations.title" />
      </div>
      <div className={css.locations}>
        {locationLink(
          'Food & Dinks',
          lunchImage,
          '?pub_venueType=food_and_drinks%2Cfood'
        )}
        {locationLink(
          'Meeting & Conference',
          meetingImage,
         '?pub_venueType=meetings'
        )}
        {locationLink(
          'Kids Party & Social Events',
          kidsImage,
          '?pub_venueType=kids_party'
        )}    
      </div>
      <div className={css.locations}>
        {locationLink(
          'Storage Unit Fot Rental',
          storageImage,
          '?pub_venueType=storage'
        )}
        {locationLink(
          'Lunch Dinner Party',
          partyImage,
          '?pub_venueType=food'
        )}
        {locationLink(
          'Wedding',
          wedImage,
          '?pub_venueType=wedding'
        )}    
      </div>
    </div>
  );
};

SectionLocations.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionLocations.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionLocations;
