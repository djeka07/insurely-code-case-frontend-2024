import { HeadlineFive, HeadlineThree } from '@insurely/ui';

import { useContext, useState } from 'react';

import { useParams } from 'react-router-dom';

import { InsuranceListing } from 'components/InsuranceListing/InsuranceListing';

import { Layout } from 'components/Layout';
import UserContext from 'contexts/user/UserContext';
import { insurances } from 'data/insurances';
import { useFormatMessage } from 'hooks';
import { InsuranceResponse } from 'types/insurance';
import { Session } from 'types/v3';

import { EmptySessionState } from 'components/EmptySessionState';
import styles from './sessionView.module.css';

export type insuranceCollection = { insurances: InsuranceResponse[]; collectionId: string };

export const SessionView = () => {
  const formatMessage = useFormatMessage();
  const { sessionId } = useParams() as {
    sessionId: string;
  };
  const { sessions } = useContext(UserContext);
  const [session] = useState(sessions.find((s) => s.sessionId === sessionId) as Session);

  const [items] = useState<InsuranceResponse[]>(insurances);

  function renderData() {
    if (!session) {
      return <HeadlineFive>{formatMessage('Could not find the session')}</HeadlineFive>;
    }

    if (items.length > 0) {
      return <InsuranceListing insurances={items} />;
    }

    return <EmptySessionState />;
  }

  return (
    <Layout title={formatMessage('Insurances')} className={styles.page} goback>
      <div className={styles.headlineContainer}>
        <HeadlineThree style={{ marginBottom: '5px' }} className="ph-no-capture">
          {session?.freeText}
        </HeadlineThree>
      </div>
      {renderData()}
    </Layout>
  );
};
