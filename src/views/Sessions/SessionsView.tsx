import { HeadlineSix, HeadlineThree } from '@insurely/ui';
import React, { useContext, useEffect, useState } from 'react';

import { Navigate, useNavigationType, useSearchParams } from 'react-router-dom';

import { Layout } from 'components/Layout';
import UserContext from 'contexts/user/UserContext';
import { useFormatMessage } from 'hooks';
import utils from 'services/utils';
import { Session } from 'types/v3';

import toPrettyDate from 'utils/toPrettyDate';
import styles from './sessionsView.module.css';
import { SessionCard } from 'components/SessionCard';

function groupSessionsByDate(sessions: Session[]) {
  return sessions.reduce((r, a) => {
    // eslint-disable-next-line no-param-reassign
    r[utils.datetimeToDate(a.creationDate)] = r[utils.datetimeToDate(a.creationDate)] || [];
    r[utils.datetimeToDate(a.creationDate)].push(a);
    return r;
  }, Object.create(null));
}

export const SessionsView: React.FC = () => {
  const formatMessage = useFormatMessage();
  const [redirectUrl] = useState<string | undefined>();
  const { sessions } = useContext(UserContext);

  const navigationType = useNavigationType();
  const [searchParams] = useSearchParams();

  const sessionsByDate: Session[][] = groupSessionsByDate(sessions);

  useEffect(() => {
    if (navigationType === 'PUSH' && searchParams) window.scrollTo(0, 0);
  }, [navigationType, searchParams]);

  if (redirectUrl) {
    return <Navigate to={redirectUrl} />;
  }

  return (
    <Layout title={formatMessage('Sessions')}>
      <div className={styles.container}>
        <HeadlineThree margin="top bottom-large">{formatMessage('Sessions')}</HeadlineThree>
        {Object.entries(sessionsByDate)
          .reverse()
          .map(([date, dateSessions]) => (
            <div key={date} className={styles.day}>
              <HeadlineSix margin="top bottom">
                <strong>{toPrettyDate(date, formatMessage)}</strong>
              </HeadlineSix>
              <div className={styles.sessions}>
                {dateSessions.reverse().map((session: Session) => (
                  <SessionCard key={session.sessionId} session={session} type="insurance" />
                ))}
              </div>
            </div>
          ))}
      </div>
    </Layout>
  );
};
