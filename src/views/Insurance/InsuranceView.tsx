import { HeadlineEight, Loader } from '@insurely/ui';
import { InsuranceExtent } from 'components/InsuranceExtent';
import { InsuranceHeader } from 'components/InsuranceHeader';
import { InsuranceSpecificationContainer } from 'components/InsuranceSpecification';
import { Layout } from 'components/Layout';
import { insurances } from 'data/insurances';
import { useFormatMessage } from 'hooks';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { InsuranceResponse } from 'types/insurance';
import { ProgressState } from 'types/progress.type';
import { wash } from 'utils/insurance';
import { sleep } from 'utils/sleep';
import styles from './insuranceView.module.css';

const InsuranceView = () => {
  const formatMessage = useFormatMessage();
  const { sessionId, externalId } = useParams() as {
    sessionId: string;
    externalId: string | undefined;
  };

  const [{ state, data }, setProgress] = useState<ProgressState<InsuranceResponse>>({ state: 'pending' });

  useEffect(() => {
    const simulateFetch = async () => {
      setProgress((prev) => ({ ...prev, state: 'pending' }));
      await sleep(500);
      setProgress((prev) => ({
        ...prev,
        state: 'ready',
        data: insurances.find((ins) => ins.insurance.externalId.toLowerCase() === externalId?.toLowerCase()),
      }));
    };
    simulateFetch();
  }, [externalId, sessionId]);

  const getTitle = useCallback(() => {
    if (state === 'pending') {
      return formatMessage('Fetching insurance');
    }

    if (!!data) {
      return `${wash(data.displayType)}, ${data.insurance.insuranceName}`;
    }

    return formatMessage('Not handled');
  }, [state]);

  const renderData = useCallback(() => {
    if (state === 'pending') {
      return (
        <div className={styles.loaderWrapper}>
          <HeadlineEight>{formatMessage('Fetching insurance')}</HeadlineEight>
          <Loader.Content className={styles.loader} />
        </div>
      );
    }

    if (state === 'ready' && !!data) {
      const {
        insurance: { insuranceName, insuranceCompany, ...rest },
      } = data;
      return (
        <>
          <InsuranceHeader name={insuranceName} company={insuranceCompany} type={data.displayType} />
          <div className={styles.content}>
            <InsuranceSpecificationContainer insurance={{ insuranceName, insuranceCompany, ...rest }} />
            <InsuranceExtent termsUrl={data.termsUrl} extents={data.parameters} />
          </div>
        </>
      );
    }

    return <div>{formatMessage('Not handled')}</div>;
  }, [state]);

  return (
    <Layout title={getTitle()} goback>
      {renderData()}
    </Layout>
  );
};

export default InsuranceView;
