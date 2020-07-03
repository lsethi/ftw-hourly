import React from 'react';
import { FieldSelect } from '../../components';

import css from './EditListingDescriptionForm.css';

const CustomMaximumOccupancyNumberSelectField = props => {
  const { name, id, maximumOccupancyNumber, intl } = props;
  const MaximumOccupancyNumberLabel = intl.formatMessage({
    id: 'EditListingDescriptionForm.MaximumOccupancyNumberLabel',
  });

  return maximumOccupancyNumber ? (
    <FieldSelect
      className={css.maximumOccupancyNumber}
      name={name}
      id={id}
      label={MaximumOccupancyNumberLabel}
    >
      {maximumOccupancyNumber.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : null;
};

export default CustomMaximumOccupancyNumberSelectField;
