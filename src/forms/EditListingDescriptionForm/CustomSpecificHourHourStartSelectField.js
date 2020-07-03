import React from 'react';
import { FieldSelect } from '../../components';

import css from './EditListingDescriptionForm.css';

const CustomSpecificHourHourStartSelectField = props => {
  const { name, id, hourStart } = props;

  return hourStart ? (
    <FieldSelect className={css.hourStart} name={name} id={id}>
      {hourStart.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : null;
};

export default CustomSpecificHourHourStartSelectField;
