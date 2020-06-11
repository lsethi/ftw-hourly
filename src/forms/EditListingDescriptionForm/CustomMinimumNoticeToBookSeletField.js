import React from 'react';
import { FieldSelect } from '../../components';

import css from './EditListingDescriptionForm.css';

const CustomMinimumNoticeToBookSelectField = props => {
  const { name, id, minimumNoticeToBook, intl } = props;
  const minimumNoticeToBookLabel = intl.formatMessage({
    id: 'EditListingDescriptionForm.minimumNoticeToBookLabel',
  });

  return minimumNoticeToBook ? (
    <FieldSelect className={css.minimumNoticeToBook} name={name} id={id} label={minimumNoticeToBookLabel}>
      {minimumNoticeToBook.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : null;
};

export default CustomMinimumNoticeToBookSelectField;
