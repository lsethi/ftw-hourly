import React from 'react';
import { FieldSelect } from '../../components';

import css from './EditListingDescriptionForm.css';

const CustomCategorySelectField = props => {
  const { name, id, category, intl } = props;
  const categoryLabel = intl.formatMessage({
    id: 'EditListingDescriptionForm.categoryLabel',
  });

  return category ? (
    <FieldSelect className={css.category} name={name} id={id} label={categoryLabel}>
      {category.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : null;
};

export default CustomCategorySelectField;
