import React from 'react';
import { bool, func, shape, string } from 'prop-types';
import classNames from 'classnames';
import { compose } from 'redux';
import config from '../../config';
import { Form as FinalForm } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { intlShape, injectIntl, FormattedMessage } from '../../util/reactIntl';
//import { findOptionsForSelectFilter } from '../../util/search';
//import config from '../../config';
import { propTypes } from '../../util/types';
import { Button, FieldTextInput, FieldCheckboxGroup, Form } from '../../components';

import css from './EditListingFeaturesForm.css';

const EditListingFeaturesFormComponent = props => (
  <FinalForm
    {...props}
    mutators={{ ...arrayMutators }}
    render={formRenderProps => {
      const {
        amenities,
        disabled,
        ready,
        rootClassName,
        className,
        name,
        handleSubmit,
        intl,
        pristine,
        saveActionMsg,
        updated,
        updateInProgress,
        fetchErrors,
      } = formRenderProps;

      const classes = classNames(rootClassName || css.root, className);
      const submitReady = (updated && pristine) || ready;
      const submitInProgress = updateInProgress;
      const submitDisabled = disabled || submitInProgress;

      const { updateListingError, showListingsError } = fetchErrors || {};
      const errorMessage = updateListingError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingFeaturesForm.updateFailed" />
        </p>
      ) : null;

      const errorMessageShowListing = showListingsError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingFeaturesForm.showListingFailed" />
        </p>
      ) : null;

      const amenitiesMessage = intl.formatMessage({
        id: 'EditListingFeaturesForm.amenities',
      });
      const suppliesPlaceholderMessage = intl.formatMessage({
        id: 'EditListingFeaturesForm.suppliesPlaceholder',
      });
      const suppliesMessage = intl.formatMessage({
        id: 'EditListingFeaturesForm.supplies',
      });

      return (
        <Form className={classes} onSubmit={handleSubmit}>
          {errorMessage}
          {errorMessageShowListing}
          <label>{amenitiesMessage}</label>
          <FieldCheckboxGroup
            className={css.features}
            id={name}
            name={name}
            options={config.custom.amenities}
          />
          {/* <FieldTextInput
            id={name}
            name={name}
            className={css.features}
            type="textarea"
            label={amenitiesMessage}
            placeholder={amenitiesPlaceholderMessage}
          /> */}
          <FieldTextInput
            id="supplies"
            name="supplies"
            className={css.features}
            type="textarea"
            label={suppliesMessage}
            placeholder={suppliesPlaceholderMessage}
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

EditListingFeaturesFormComponent.defaultProps = {
  rootClassName: null,
  className: null,
  fetchErrors: null,
};

EditListingFeaturesFormComponent.propTypes = {
  rootClassName: string,
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
    showListingsError: propTypes.error,
    updateListingError: propTypes.error,
  }),
};

//const EditListingFeaturesForm = EditListingFeaturesFormComponent;

//export default EditListingFeaturesForm;

export default compose(injectIntl)(EditListingFeaturesFormComponent);
