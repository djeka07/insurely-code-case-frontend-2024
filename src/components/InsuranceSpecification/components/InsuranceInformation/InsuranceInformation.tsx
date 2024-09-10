import { HeadlineFive } from '@insurely/ui';
import { useFormatMessage } from 'hooks';
import { useMemo } from 'react';
import { formatCurrency } from 'translations/utils';
import { Company, Config } from 'types/v3';
import { Insurance } from 'types/v3/Insurance';
import styles from '../base.module.css';
import { InsuranceRow } from '../InsuranceRow';

interface InsuranceOverviewProps
  extends Pick<
    Insurance,
    | 'insuranceNumber'
    | 'insuranceCompany'
    | 'insuranceName'
    | 'insuranceObjectStreetAddress'
    | 'insuranceObjectPostalCode'
    | 'insuredMovablesAmount'
    | 'livingArea'
    | 'numberOfResidents'
  > {
  config: Config;
  companies: Company[];
}

const InsuranceInformation = ({
  insuranceNumber,
  insuranceCompany,
  insuranceName,
  insuranceObjectStreetAddress,
  insuranceObjectPostalCode,
  insuredMovablesAmount,
  livingArea,
  numberOfResidents,
  config,
  companies,
}: InsuranceOverviewProps) => {
  const formatMessage = useFormatMessage();
  const companyDisplayName = useMemo(
    () => companies.find((company) => company.insuranceCompany === insuranceCompany)?.insuranceCompanyDisplayName,
    [insuranceCompany, companies],
  );
  console.log(config);
  return (
    <div className={styles.root}>
      <HeadlineFive>{formatMessage('Insurance')}</HeadlineFive>
      <div>
        {!!insuranceNumber && <InsuranceRow label={formatMessage('Insurance number')} value={insuranceNumber} />}
        {!!companyDisplayName && <InsuranceRow label={formatMessage('Insurance company')} value={companyDisplayName} />}
        <InsuranceRow label={formatMessage('Insurance name')} value={insuranceName} />
        {!!insuranceObjectStreetAddress && (
          <InsuranceRow label={formatMessage('Insurance object address')} value={insuranceObjectStreetAddress} />
        )}
        {!!insuranceObjectPostalCode && (
          <InsuranceRow label={formatMessage('Insurance object postal code')} value={insuranceObjectPostalCode} />
        )}
        {!!insuredMovablesAmount && (
          <InsuranceRow
            label={formatMessage('Insurance object postal code')}
            value={formatCurrency(config, insuredMovablesAmount)}
          />
        )}
        {!!livingArea && <InsuranceRow label={formatMessage('Living area')} value={`${livingArea}m²`} />}
        {!!numberOfResidents && (
          <InsuranceRow label={formatMessage('Number of residents')} value={`${numberOfResidents}`} />
        )}
      </div>
    </div>
  );
};

export default InsuranceInformation;
