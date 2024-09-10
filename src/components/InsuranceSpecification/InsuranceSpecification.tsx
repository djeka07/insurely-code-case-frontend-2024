import { Company, Config } from 'types/v3';
import { Insurance } from 'types/v3/Insurance';
import { InsuranceOverview } from './components/InsuranceOverview';
import styles from './insuranceSpecification.module.css';
import { InsuranceInformation } from './components/InsuranceInformation';
import { InsuranceHolder } from './components/InsuranceHolder';

export interface InsuranceSpecificacationProps {
  insurance: Insurance;
  config: Config;
  companies: Company[];
}

const InsuranceSpecification = ({ insurance, config, companies }: InsuranceSpecificacationProps) => {
  return (
    <div className={styles.root}>
      <InsuranceOverview
        employerPaid={insurance.employerPaid}
        premiumAmountYearRounded={insurance.premiumAmountYearRounded}
        renewalDate={insurance.renewalDate}
        config={config}
      />
      <InsuranceInformation {...insurance} config={config} companies={companies} />
      <InsuranceHolder insuranceHolderName={insurance.insuranceHolderName} />
    </div>
  );
};

export default InsuranceSpecification;
