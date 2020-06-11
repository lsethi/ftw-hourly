import React from 'react';
import { FieldSelect } from '../../components';

import css from './EditListingDescriptionForm.css';

const CustomAvailabilityRadioGroup= props => {
  const { name, id, availability, intl } = props;
  const categoryLabel = intl.formatMessage({
    id: 'EditListingDescriptionForm.availabilityLabel',
  });

  return availability ? (
    <FieldSelect className={css.category} name={name} id={id} label={categoryLabel}>
      {category.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : null;
};

export default CustomAvailabilityRadioGroup;
