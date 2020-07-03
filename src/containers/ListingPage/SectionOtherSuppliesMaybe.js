import React from 'react';
import { shape, string } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import ReadMore from '../../components/ReadMore/ReadMore';

import css from './section.css';

const SectionOtherSuppliesMaybe = props => {
  const { className, rootClassName, publicData } = props;
  const classes = classNames(rootClassName || css.root, className);
  return publicData.supplies ? (
    <div className={classes}>
      <h2 className={css.title}>
        <FormattedMessage id="ListingPage.suppliesTitle" />
      </h2>
      <p className={css.content}>
        <ReadMore children={publicData.supplies} lines={5} />
      </p>
    </div>
  ) : null;
};

SectionOtherSuppliesMaybe.defaultProps = { className: null, rootClassName: null };

SectionOtherSuppliesMaybe.propTypes = {
  className: string,
  rootClassName: string,
  publicData: shape({
    otherSupplies: string,
  }).isRequired,
};

export default SectionOtherSuppliesMaybe;
