import { Card, CompanyLogo, HeadlineEight, HeadlineSeven, ParagraphCaption, StatusText } from '@insurely/ui';
import classNames from 'classnames';

import React, { useContext } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import UserContext from 'contexts/user/UserContext';
import { useFormatMessage } from 'hooks';
import { SESSIONS_PAGE_ROUTE } from 'services/routes';

import { InsuranceResponse } from 'types/insurance';

import { wash } from 'utils/insurance';

import getMonthlyPayment from 'utils/getMontlyPayment';
import styles from './insuranceCard.module.css';

interface InsuranceCardProps {
  insurance: InsuranceResponse;
  className?: string;
}

export const InsuranceCard: React.FC<InsuranceCardProps> = ({ insurance, className }) => {
  const { sessionId } = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const formatMessage = useFormatMessage();

  const { config } = useContext(UserContext);

  const {
    insurance: { employerPaid, externalId, premiumAmountYearRounded, insuranceCompany, otherInsuranceHolder },
  } = insurance;

  const link = pathname.match(SESSIONS_PAGE_ROUTE) ? `/${SESSIONS_PAGE_ROUTE}/${sessionId}/${externalId}` : '';

  function printStatus() {
    const color = 'green';
    const text = formatMessage('Active');

    return <StatusText color={color} text={text} />;
  }

  return (
    <Card className={classNames(styles.card, className)} onClick={() => navigate(link)}>
      <div className={styles.top}>
        <div>
          <CompanyLogo company={insuranceCompany} width="36px" />
          <HeadlineSeven>
            {getMonthlyPayment({ employerPaid, formatMessage, config, premiumAmountYearRounded })}
          </HeadlineSeven>
        </div>

        <HeadlineEight margin="top" alternating>
          {wash(insurance.displayType)}
        </HeadlineEight>
        <ParagraphCaption className="ph-no-capture">{insurance.insurance.insuranceName}</ParagraphCaption>
      </div>

      <div className={styles.bottom}>
        <div>{printStatus()}</div>
        {otherInsuranceHolder && (
          <ParagraphCaption margin="top">{formatMessage('Other insurance holder')}</ParagraphCaption>
        )}
      </div>
    </Card>
  );
};
