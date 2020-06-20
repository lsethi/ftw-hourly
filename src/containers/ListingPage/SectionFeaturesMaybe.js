import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import { PropertyGroup } from '../../components';
import { richText } from '../../util/richText';
import css from './ListingPage.css';

const SectionFeaturesMaybe = props => {
  const { options, publicData } = props;
  if (!publicData) {
    return null;
  }

  const selectedOptions = publicData && publicData.amenities ? publicData.amenities : [];
  const selectedConfigOptions = options.filter(o => selectedOptions.find(s => s === o.key));
  
  return (
    <div className={css.sectionFeatures}>
      <h2 className={css.featuresTitle}>
        <FormattedMessage id="ListingPage.featuresTitle" />
      </h2>
      <PropertyGroup
        id="ListingPage.amenities"
        options={selectedConfigOptions}
        selectedOptions={selectedOptions}
        twoColumns={selectedConfigOptions.length > 5}
      />

      <h2 className={css.otherSuppliesTitle}>
        <FormattedMessage id="ListingPage.otherSuppliesTitle" />
      </h2>
      <p className={css.description}>
        {richText(publicData.supplies, {
          longWordMinLength: 5,
          longWordClass: css.longWord,
        })}
      </p>
    </div>
  );
};

export default SectionFeaturesMaybe;
