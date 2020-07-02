import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from '../../util/reactIntl';
import { LISTING_STATE_DRAFT } from '../../util/types';
import { ListingLink } from '../../components';
import { EditListingPricingForm } from '../../forms';
import { ensureOwnListing } from '../../util/data';
import { types as sdkTypes } from '../../util/sdkLoader';
import config from '../../config';

import css from './EditListingPricingPanel.css';

// const { Money } = sdkTypes;

// const EditListingPricingPanel = props => {
//   const {
//     className,
//     rootClassName,
//     listing,
//     disabled,
//     ready,
//     onSubmit,
//     onChange,
//     submitButtonText,
//     panelUpdated,
//     updateInProgress,
//     errors,
//   } = props;

//   const classes = classNames(rootClassName || css.root, className);
//   const currentListing = ensureOwnListing(listing);
//   const { price,publicData } = currentListing.attributes;
//   const { additions } = publicData || {};
//   const intitalFormValues = {
//     additions,
//     price,
//   };
//   const isPublished = currentListing.id && currentListing.attributes.state !== LISTING_STATE_DRAFT;
//   const panelTitle = isPublished ? (
//     <FormattedMessage
//       id="EditListingPricingPanel.title"
//       values={{
//         listingTitle: (
//           <ListingLink listing={listing}>
//             <FormattedMessage id="EditListingPricingPanel.listingTitle" />
//           </ListingLink>
//         ),
//       }}
//     />
//   ) : (
//     <FormattedMessage id="EditListingPricingPanel.createListingTitle" />
//   );

//   const priceCurrencyValid = price instanceof Money ? price.currency === config.currency : true;
//   if (publicData.dayRateDiscount) {
//     intitalFormValues.discountPercentInputCheckbox = ['discountPercentChosen'];
//     intitalFormValues.discountPercentInput = publicData.dayRateDiscount.discountPerecent;
//   } else {
//     intitalFormValues.discountPercentInputCheckbox = null;
//   }
//   const form = priceCurrencyValid ? (
//     <EditListingPricingForm
//       className={css.form}
//       initialValues={{ price }}
//       onSubmit={onSubmit}
//       onChange={onChange}
//       saveActionMsg={submitButtonText}
//       disabled={disabled}
//       ready={ready}
//       updated={panelUpdated}
//       updateInProgress={updateInProgress}
//       fetchErrors={errors}
//     />
//   ) : (
//     <div className={css.priceCurrencyInvalid}>
//       <FormattedMessage id="EditListingPricingPanel.listingPriceCurrencyInvalid" />
//     </div>
//   );

//   return (
//     <div className={classes}>
//       <h1 className={css.title}>{panelTitle}</h1>
//       {form}
//     </div>
//   );
// };

// const { func, object, string, bool } = PropTypes;

// EditListingPricingPanel.defaultProps = {
//   className: null,
//   rootClassName: null,
//   listing: null,
// };

// EditListingPricingPanel.propTypes = {
//   className: string,
//   rootClassName: string,

//   // We cannot use propTypes.listing since the listing might be a draft.
//   listing: object,

//   disabled: bool.isRequired,
//   ready: bool.isRequired,
//   onSubmit: func.isRequired,
//   onChange: func.isRequired,
//   submitButtonText: string.isRequired,
//   panelUpdated: bool.isRequired,
//   updateInProgress: bool.isRequired,
//   errors: object.isRequired,
// };

// export default EditListingPricingPanel;

const { Money } = sdkTypes;

const EditListingPricingPanel = props => {
  const {
    className,
    rootClassName,
    listing,
    onSubmit,
    onChange,
    submitButtonText,
    panelUpdated,
    updateInProgress,
    errors,
  } = props;

  const classes = classNames(rootClassName || css.root, className);
  const currentListing = ensureOwnListing(listing);
  const { price, publicData } = currentListing.attributes;
  const { additions } = publicData || {};

  const panelTitle = currentListing.id ? (
    <FormattedMessage
      id="EditListingPricingPanel.title"
      values={{ listingTitle: <ListingLink listing={listing} /> }}
    />
  ) : (
    <FormattedMessage id="EditListingPricingPanel.createListingTitle" />
  );

  const priceCurrencyValid = price instanceof Money ? price.currency === config.currency : true;

  //format the existing publicData and pass it into the form to preconfigure fields when applicable!

  const intitalFormValues = {
    additions,
    price,
  };

  if (publicData.dayRateDiscount) {
    intitalFormValues.discountPercentInputCheckbox = ['discountPercentChosen'];
    intitalFormValues.discountPercentInput = publicData.dayRateDiscount.discountPerecent;
  } else {
    intitalFormValues.discountPercentInputCheckbox = null;
  }

  const form = priceCurrencyValid ? (
    <EditListingPricingForm
      className={css.form}
      initialValues={intitalFormValues}
      onSubmit={values => {
        const { additions, price } = values;
        //here is where we build up the public data for additional services,
        //assuming the user has chosen any of them
        const publicDataToSubmit = { additions };

        const dayRateDiscountChecked = Boolean(
          values.discountPercentInputCheckbox && values.discountPercentInputCheckbox.length
        );

        if (dayRateDiscountChecked) {
          const discountNumber = Number(values.discountPercentInput);

          if (isNaN(discountNumber)) {
            console.error('Invalid discount percentage');
          }

          publicDataToSubmit.dayRateDiscount = {
            discountPerecent: discountNumber,
            hoursForDiscount: 8,
          };
        } else {
          publicDataToSubmit.dayRateDiscount = null;
          publicData.dayRateDiscount = null;
        }
        const updatedValues = { price, publicData: publicDataToSubmit };
        onSubmit(updatedValues);
      }}
      onChange={values => {
        debugger;
      }}
      saveActionMsg={submitButtonText}
      updated={panelUpdated}
      updateError={errors.updateListingError}
      updateInProgress={updateInProgress}
    />
  ) : (
    <div className={css.priceCurrencyInvalid}>
      <FormattedMessage id="EditListingPricingPanel.listingPriceCurrencyInvalid" />
    </div>
  );

  return (
    <div className={classes}>
      <h1 className={css.title}>{panelTitle}</h1>
      {form}
    </div>
  );
};

const { func, object, string, bool } = PropTypes;

EditListingPricingPanel.defaultProps = {
  className: null,
  rootClassName: null,
  listing: null,
};

EditListingPricingPanel.propTypes = {
  className: string,
  rootClassName: string,

  // We cannot use propTypes.listing since the listing might be a draft.
  listing: object,

  onSubmit: func.isRequired,
  onChange: func.isRequired,
  submitButtonText: string.isRequired,
  panelUpdated: bool.isRequired,
  updateInProgress: bool.isRequired,
  errors: object.isRequired,
};

export default EditListingPricingPanel;
