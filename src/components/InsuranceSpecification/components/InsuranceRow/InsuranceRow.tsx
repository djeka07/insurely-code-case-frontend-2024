import { ParagraphCaption } from '@insurely/ui';
import styles from './insuranceRow.module.css';

interface InsuranceRowProps {
  label: string;
  value: string;
}

const InsuranceRow = ({ label, value }: InsuranceRowProps) => (
  <div className={styles.root}>
    <ParagraphCaption>{label}</ParagraphCaption>
    <ParagraphCaption className={styles.value}>{value}</ParagraphCaption>
  </div>
);

export default InsuranceRow;
