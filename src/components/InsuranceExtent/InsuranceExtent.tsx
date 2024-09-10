import { Button, Card, HeadlineFive, IconCheckMark, IconClose } from '@insurely/ui';
import { Accordion } from 'components/Accordion';
import { ExternalLink } from 'components/ExternalLink';
import { useFormatMessage } from 'hooks';
import { useMemo } from 'react';
import { Parameter } from 'types/insurance';
import { groupBy } from 'utils/array';
import { sortBy } from '../../utils/array';
import styles from './insuranceExtent.module.css';

interface InsuranceExtentProps {
  extents: Parameter[];
  termsUrl?: string;
}

const InsuranceExtent = ({ extents, termsUrl }: InsuranceExtentProps) => {
  const formatMessage = useFormatMessage();
  const groupedExtents = useMemo(
    () => Object.entries(groupBy(sortBy(extents, 'parameterGroupOrder'), 'parameterGroup')),
    [extents],
  );
  return (
    <Card className={styles.root}>
      <div className={styles.header}>
        <div>
          <HeadlineFive>{formatMessage('Coverage')}</HeadlineFive>
          <Button size="small" variant="secondary">
            {formatMessage('Compare')}
          </Button>
        </div>
        {!!termsUrl && (
          <ExternalLink className={styles.link} url={termsUrl} text={formatMessage('Complete insurance terms')} />
        )}
      </div>
      <div className={styles.wrapper}>
        {groupedExtents.map(([key, values]: [string, Parameter[]]) => (
          <Accordion
            key={key}
            title={key}
            items={values?.map((value) => ({
              name: value.parameterDisplayName,
              description: value.parameterDescription,
              icon:
                value.value === 'true' ? (
                  <IconCheckMark width={25} color="var(--green)" />
                ) : (
                  <IconClose width={25} color="var(--red01)" />
                ),
            }))}
          />
        ))}
      </div>
    </Card>
  );
};

export default InsuranceExtent;
