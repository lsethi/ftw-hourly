import React from 'react';
import { bool, func, object, string } from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from '../../util/reactIntl';
import { ensureOwnListing } from '../../util/data';
//import { findOptionsForSelectFilter } from '../../util/search';
import { LISTING_STATE_DRAFT } from '../../util/types';
import { ListingLink } from '../../components';
import { EditListingDescriptionForm } from '../../forms';
import config from '../../config';

import css from './EditListingDescriptionPanel.css';
const DESCRIPTION_NAME = 'venueType';
const EditListingDescriptionPanel = props => {
  const {
    className,
    rootClassName,
    listing,
    disabled,
    ready,
    onSubmit,
    onChange,
    submitButtonText,
    panelUpdated,
    updateInProgress,
    errors,
  } = props;

  const classes = classNames(rootClassName || css.root, className);
  const currentListing = ensureOwnListing(listing);
  const { description, title, publicData } = currentListing.attributes;

  const isPublished = currentListing.id && currentListing.attributes.state !== LISTING_STATE_DRAFT;
  const panelTitle = isPublished ? (
    <FormattedMessage
      id="EditListingDescriptionPanel.title"
      values={{
        listingTitle: (
          <ListingLink listing={listing}>
            <FormattedMessage id="EditListingDescriptionPanel.listingTitle" />
          </ListingLink>
        ),
      }}
    />
  ) : (
    <FormattedMessage id="EditListingDescriptionPanel.createListingTitle" />
  );

  //const certificateOptions = findOptionsForSelectFilter('certificate', config.custom.filters);
  return (
    <div className={classes}>
      <h1 className={css.title}>{panelTitle}</h1>
      <EditListingDescriptionForm
        className={css.form}
        name={DESCRIPTION_NAME}
        initialValues={{ title, description ,
          venueType:publicData.venueType,minimumBooking:publicData.minimumBooking,
          maximumOccupancyNumber:publicData.maximumOccupancyNumber,
          minimumNoticeToBook:publicData.minimumNoticeToBook,
          hourStart:publicData.hourStart 
         }}
        saveActionMsg={submitButtonText}
        onSubmit={values => {
          const { title, description,venueType,minimumBooking,
            maximumOccupancyNumber,minimumNoticeToBook,hourStart } = values;
          const updateValues = {
            title: title.trim(),
            description,
            publicData: {venueType,minimumBooking,maximumOccupancyNumber,
              minimumNoticeToBook,hourStart },
          };

          onSubmit(updateValues);
        }}
        onChange={onChange}
        disabled={disabled}
        ready={ready}
        updated={panelUpdated}
        updateInProgress={updateInProgress}
        fetchErrors={errors}
        venueType={config.custom.venueType}
        minimumBooking={config.custom.minimumBooking}
        maximumOccupancyNumber = {config.custom.maximumOccupancyNumber}
        minimumNoticeToBook = {config.custom.minimumNoticeToBook}
        hourStart ={config.custom.hourStart}
      />
    </div>
  );
};

EditListingDescriptionPanel.defaultProps = {
  className: null,
  rootClassName: null,
  errors: null,
  listing: null,
};

EditListingDescriptionPanel.propTypes = {
  className: string,
  rootClassName: string,

  // We cannot use propTypes.listing since the listing might be a draft.
  listing: object,

  disabled: bool.isRequired,
  ready: bool.isRequired,
  onSubmit: func.isRequired,
  onChange: func.isRequired,
  submitButtonText: string.isRequired,
  panelUpdated: bool.isRequired,
  updateInProgress: bool.isRequired,
  errors: object.isRequired,
};

export default EditListingDescriptionPanel;
