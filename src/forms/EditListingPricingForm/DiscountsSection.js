import React from 'react';
import { FormattedMessage, intlShape } from 'react-intl';
//import { formatMoney } from '../../util/currency';
import { LINE_ITEM_MIXING_FEE, propTypes } from '../../util/types';
//import Decimal from 'decimal.js';
import css from './EditListingPricingForm.css';
import { types as sdkTypes } from '../../util/sdkLoader';
//import { unitDivisor, convertMoneyToNumber, convertUnitToSubUnit } from '../../util/currency';
import { FieldTextInput, FieldCheckbox } from '../../components';

const { Money } = sdkTypes;

const DiscountsSection = props => {
  return (
    <div className={css.discountsSection}>
      <h3 className={css.servicesSubhead}>Discounts</h3>
      <FieldCheckbox
        id="discountPercentInputCheckbox"
        name="discountPercentInputCheckbox"
        value="discountPercentChosen"
        className={css.pricingCheckBox}
      />
      <FieldTextInput
        className={css.discountInput}
        type="text"
        id="discountPercentInput"
        name="discountPercentInput"
      />
      <FormattedMessage id="EditListingPricingForm.discount" />
      {/* <div className={css.subheadText}>
        <FormattedMessage id="EditListingPricingForm.dayRateDiscountSubtext" />
      </div> */}
    </div>
  );
};
export default DiscountsSection;
