import { useFormatMessage } from 'hooks';
import { formatCurrency } from 'translations/utils';
import { Config } from 'types/v3';
import { Insurance } from 'types/v3/Insurance';
import getMonthlyPayment from 'utils/getMontlyPayment';
import toPrettyDate from 'utils/toPrettyDate';
import { InsuranceRow } from '../InsuranceRow';

interface InsuranceOverviewProps extends Pick<Insurance, 'premiumAmountYearRounded' | 'renewalDate' | 'employerPaid'> {
  config: Config;
}

const InsuranceOverview = ({ premiumAmountYearRounded, renewalDate, employerPaid, config }: InsuranceOverviewProps) => {
  const formatMessage = useFormatMessage();
  return (
    <div>
      {!!premiumAmountYearRounded && (
        <>
          <InsuranceRow
            label={formatMessage('Monthly premium')}
            value={getMonthlyPayment({
              employerPaid,
              formatMessage,
              config,
              premiumAmountYearRounded,
            })}
          />
          <InsuranceRow
            label={formatMessage('Annual premium')}
            value={formatMessage('amount/month', {
              amount: formatCurrency(config, premiumAmountYearRounded),
            })}
          />
        </>
      )}
      {renewalDate && (
        <InsuranceRow label={formatMessage('Renewal date')} value={toPrettyDate(renewalDate, formatMessage)} />
      )}
    </div>
  );
};

export default InsuranceOverview;
