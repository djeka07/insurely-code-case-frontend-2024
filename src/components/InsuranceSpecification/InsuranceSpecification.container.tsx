import UserContext from 'contexts/user/UserContext';
import { useContext } from 'react';
import InsuranceSpecification, { InsuranceSpecificacationProps } from './InsuranceSpecification';

const InsuranceSpecificationContainer = ({ insurance }: Pick<InsuranceSpecificacationProps, 'insurance'>) => {
  const { config, companies } = useContext(UserContext);
  return <InsuranceSpecification insurance={insurance} config={config} companies={companies} />;
};

export default InsuranceSpecificationContainer;
