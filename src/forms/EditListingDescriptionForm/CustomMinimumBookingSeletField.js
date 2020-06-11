import React from 'react';
import { FieldSelect } from '../../components';

import css from './EditListingDescriptionForm.css';

const CustomMinimumBookingSelectField = props => {
  const { name, id, minimumBooking, intl } = props;
  const minimumBookingLabel = intl.formatMessage({
    id: 'EditListingDescriptionForm.minimumBookingLabel',
  });

  return minimumBooking ? (
    <FieldSelect className={css.minimumBooking} name={name} id={id} label={minimumBookingLabel}>
      {minimumBooking.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : null;
};

export default CustomMinimumBookingSelectField;
