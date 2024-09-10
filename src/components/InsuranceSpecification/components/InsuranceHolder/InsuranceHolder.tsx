import { HeadlineFive } from '@insurely/ui';
import { useFormatMessage } from 'hooks';
import { Insurance } from 'types/v3/Insurance';
import { InsuranceRow } from '../InsuranceRow';
import styles from '../base.module.css';

interface InsuranceOverviewProps extends Pick<Insurance, 'insuranceHolderName'> {}

const InsuranceHolder = ({ insuranceHolderName }: InsuranceOverviewProps) => {
  const formatMessage = useFormatMessage();
  return (
    <div className={styles.root}>
      <HeadlineFive>{formatMessage('Insurance holder')}</HeadlineFive>
      {!!insuranceHolderName && <InsuranceRow label={formatMessage('Name')} value={insuranceHolderName} />}
    </div>
  );
};

export default InsuranceHolder;
