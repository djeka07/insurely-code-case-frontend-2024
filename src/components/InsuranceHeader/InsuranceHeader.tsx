import { Button, CompanyLogo, HeadlineEight, HeadlineThree, IconDownload } from '@insurely/ui';
import { useFormatMessage } from 'hooks';
import { wash } from 'utils/insurance';
import styles from './insuranceHeader.module.css';

interface InsuranceHeaderProps {
  name: string;
  company?: string;
  type: string;
}

const InsuranceHeader = ({ name, company, type }: InsuranceHeaderProps) => {
  const formatMessage = useFormatMessage();

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <CompanyLogo company={company} width={50} height={50} />
        <div>
          <HeadlineEight>{wash(type)}</HeadlineEight>
          <HeadlineThree enableResponsive>{name}</HeadlineThree>
        </div>
      </div>
      <Button variant="secondary" icon={<IconDownload width={24} />}>
        {formatMessage('Download insurance data')}
      </Button>
    </div>
  );
};

export default InsuranceHeader;
