import React from 'react';
import { arrayOf, bool, func, shape, string } from 'prop-types';
import { compose } from 'redux';
import { Form as FinalForm } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { intlShape, injectIntl, FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { propTypes } from '../../util/types';
import config from '../../config';
import { maxLength, required, composeValidators } from '../../util/validators';
import { Form, Button,FieldCheckboxGroup,FieldRadioButton,FieldTextInput } from '../../components';

//import CustomCertificateSelectFieldMaybe from './CustomCertificateSelectFieldMaybe';
import CustomSpecificHourHourStartSelectField from './CustomSpecificHourHourStartSelectField';
import CustomMinimumBookingSelectField from './CustomMinimumBookingSeletField';
import CustomMaximumOccupancyNumberSelectField from './CustomMaximumOccupancyNumberSelectField';
import CustomMinimumNoticeToBookSelectField from './CustomMinimumNoticeToBookSeletField';
import css from './EditListingDescriptionForm.css';

const TITLE_MAX_LENGTH = 60;

const EditListingDescriptionFormComponent = props => (
  <FinalForm
    {...props}
    mutators={{ ...arrayMutators }}
    render={formRenderProps => {
      const {
        minimumNoticeToBook,
        hourStart,
        maximumOccupancyNumber,
        minimumBooking,
        name,
        className,
        disabled,
        ready,
        handleSubmit,
        intl,
        invalid,
        pristine,
        saveActionMsg,
        updated,
        updateInProgress,
        fetchErrors,
      } = formRenderProps;

      const titleMessage = intl.formatMessage({ id: 'EditListingDescriptionForm.title' });
      const titlePlaceholderMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.titlePlaceholder',
      });
      const titleRequiredMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.titleRequired',
      });
      const maxLengthMessage = intl.formatMessage(
        { id: 'EditListingDescriptionForm.maxLength' },
        {
          maxLength: TITLE_MAX_LENGTH,
        }
      );

      const descriptionMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.description',
      });
      const descriptionPlaceholderMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.descriptionPlaceholder',
      });
      const maxLength60Message = maxLength(maxLengthMessage, TITLE_MAX_LENGTH);
      const descriptionRequiredMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.descriptionRequired',
      });
      const venueTypeLabelMessage = intl.formatMessage({
        id :'EditListingDescriptionForm.venueTypeLabel',
      });
      const venueHoursMessage = intl.formatMessage({
        id :'EditListingDescriptionForm.venueHoursLabel',
      });
      const alwaysAvailableLabel = intl.formatMessage({
        id :'EditListingDescriptionForm.alwaysAvailableLabel',
      });
      const messageForAvailabilityLabel = intl.formatMessage({
        id :'EditListingDescriptionForm.messageForAvailabilityLabel',
      });
      const specificHoursLabel = intl.formatMessage({
        id :'EditListingDescriptionForm.specificHoursLabel',
      });

      const { updateListingError, createListingDraftError, showListingsError } = fetchErrors || {};
      const errorMessageUpdateListing = updateListingError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingDescriptionForm.updateFailed" />
        </p>
      ) : null;

      // This error happens only on first tab (of EditListingWizard)
      const errorMessageCreateListingDraft = createListingDraftError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingDescriptionForm.createListingDraftError" />
        </p>
      ) : null;

      const errorMessageShowListing = showListingsError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingDescriptionForm.showListingFailed" />
        </p>
      ) : null;

      const classes = classNames(css.root, className);
      const submitReady = (updated && pristine) || ready;
      const submitInProgress = updateInProgress;
      const submitDisabled = invalid || disabled || submitInProgress;
      const showAsRequired = pristine;
      return (
        <Form className={classes} onSubmit={handleSubmit}>
          {errorMessageCreateListingDraft}
          {errorMessageUpdateListing}
          {errorMessageShowListing}
          <FieldTextInput
            id="title"
            name="title"
            className={css.title}
            type="text"
            label={titleMessage}
            placeholder={titlePlaceholderMessage}
            maxLength={TITLE_MAX_LENGTH}
            validate={composeValidators(required(titleRequiredMessage), maxLength60Message)}
            autoFocus
          />

          <FieldTextInput
            id="description"
            name="description"
            className={css.description}
            type="textarea"
            label={descriptionMessage}
            placeholder={descriptionPlaceholderMessage}
            validate={composeValidators(required(descriptionRequiredMessage))}
          />
          <FieldCheckboxGroup
            className={css.VenueType}
            id={name}
            name={name}
            label={venueTypeLabelMessage}
            options={config.custom.VenueType}
          />
          <div className={css.selectsRow} >
            <div className={css.selectsSplit}>
              <CustomMinimumBookingSelectField
                id="minimumBooking"
                name="minimumBooking"
                minimumBooking={minimumBooking}
                intl={intl}
              />
            </div>
            <div className={css.selectsSplit}>
              <CustomMaximumOccupancyNumberSelectField
                id="maximumOccupancyNumber"
                name="maximumOccupancyNumber"
                maximumOccupancyNumber={maximumOccupancyNumber}
                intl={intl}
              />
            </div>
          </div>
          {/* <div className={css.availabilityRadioGroup}>
            <div>
              {venueHoursMessage}
              <div className={css.radioRow}>
                <FieldRadioButton
                  id= 'availability1'
                  name="availability"
                  label={alwaysAvailableLabel}
                  value="alwaysAvailable"
                  showAsRequired={showAsRequired}
                />
              </div>
              <div className={css.radioRow}> 
                <FieldRadioButton
                  id= 'availability2'
                  name="availability"
                  label={messageForAvailabilityLabel}
                  value="messageForAvailability"
                  showAsRequired={showAsRequired}
                />
              </div>
              <div className={css.radioRow}> 
                <FieldRadioButton
                  id= 'availability3'
                  name="availability"
                  label={specificHoursLabel}
                  value="specificHours"
                  showAsRequired={showAsRequired}
                />
                <CustomSpecificHourHourStartSelectField
                  id="specificHours_hourStart"
                  name="specificHours_hourStart"
                  hourStart={hourStart}
                /> 
                to
                <CustomSpecificHourHourStartSelectField
                  id="specificHours_hourStart"
                  name="specificHours_hourStart"
                  hourStart={hourStart}
                /> 
              </div>
            </div>
          </div> */}


          <CustomMinimumNoticeToBookSelectField
            id="minimumNoticeToBook"
            name="minimumNoticeToBook"
            minimumNoticeToBook={minimumNoticeToBook}
            intl={intl}
          />
          
          <Button
            className={css.submitButton}
            type="submit"
            inProgress={submitInProgress}
            disabled={submitDisabled}
            ready={submitReady}
          >
            {saveActionMsg}
          </Button>
        </Form>
      );
    }}
  />
);

EditListingDescriptionFormComponent.defaultProps = { className: null, fetchErrors: null };

EditListingDescriptionFormComponent.propTypes = {
  className: string,
  intl: intlShape.isRequired,
  name: string.isRequired,
  onSubmit: func.isRequired,
  saveActionMsg: string.isRequired,
  disabled: bool.isRequired,
  ready: bool.isRequired,
  updated: bool.isRequired,
  updateInProgress: bool.isRequired,
  fetchErrors: shape({
    createListingDraftError: propTypes.error,
    showListingsError: propTypes.error,
    updateListingError: propTypes.error,
  }),
  hourStart: arrayOf(
    shape({
      key: string.isRequired,
      label: string.isRequired,
    })
  ),
  minimumNoticeToBook: arrayOf(
    shape({
      key: string.isRequired,
      label: string.isRequired,
    })
  ),
  maximumOccupancyNumber: arrayOf(
    shape({
      key: string.isRequired,
      label: string.isRequired,
    })
  ),
  minimumBooking: arrayOf(
    shape({
      key: string.isRequired,
      label: string.isRequired,
    })
  ),
  
};

export default compose(injectIntl)(EditListingDescriptionFormComponent);
