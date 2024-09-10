import { FormatMessage } from 'hooks/useFormatMessage';
import { formatCurrency } from 'translations/utils';
import { Config } from 'types/v3';
import { Insurance } from 'types/v3/Insurance';

type MontlyPaymentParams = Pick<Insurance, 'employerPaid' | 'premiumAmountYearRounded'> & {
  formatMessage: FormatMessage;
  config: Config;
};

const getMonthlyPayment = ({ employerPaid, premiumAmountYearRounded, formatMessage, config }: MontlyPaymentParams) => {
  if (employerPaid) return formatMessage('Employer paid');
  if (!premiumAmountYearRounded) return formatMessage('UNKNOWN_PREMIUM_FREQUENCY');
  return formatMessage('amount/month', {
    amount: formatCurrency(config, Math.ceil(premiumAmountYearRounded / 12)),
  });
};

export default getMonthlyPayment;
