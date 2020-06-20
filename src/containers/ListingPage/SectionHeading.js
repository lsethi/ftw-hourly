import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import { InlineTextButton } from '../../components';
import SectionVenueTypeMaybe from './SectionVenueTypeMaybe';
import css from './ListingPage.css';

const getCertificateInfo = (certificateOptions, key) => {
  return certificateOptions.find(c => c.key === key);
};

const SectionHeading = props => {
  const {
    richTitle,
    publicData,
    listingCertificate,
    certificateOptions,
    venueTypeOptions,
    showContactUser,
    onContactUser,
  } = props;
  
  const certificate = getCertificateInfo(certificateOptions, listingCertificate);
  const showCertificate = certificate && !certificate.hideFromListingInfo;
  console.log('venueTypeOptions1',venueTypeOptions);
  return (
    <div className={css.sectionHeading}>
      <div className={css.heading}>
      <SectionVenueTypeMaybe publicData={publicData}
      venueTypeConfig={venueTypeOptions} />
        <h1 className={css.title}>{richTitle}</h1>
        <div className={css.author}>
          {showCertificate ? <span>{certificate.label}</span> : null}
          {showContactUser ? (
            <span className={css.contactWrapper}>
              {showCertificate ? <span className={css.separator}>•</span> : null}
              <InlineTextButton rootClassName={css.contactLink} onClick={onContactUser}>
                <FormattedMessage id="ListingPage.contactUser" />
              </InlineTextButton>
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default SectionHeading;
