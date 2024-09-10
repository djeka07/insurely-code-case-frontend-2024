import { HeadlineEight } from '@insurely/ui';
import styles from './accordion.module.css';
import AccordionItem, { AccordionItemProps } from './components/AccordionItem/AccordionItem';

interface AccordionProps {
  title?: string;
  items: AccordionItemProps[];
}

const Accordion = ({ title, items }: AccordionProps) => {
  return (
    <div className={styles.root}>
      {title && <HeadlineEight>{title}</HeadlineEight>}
      {items.map((item) => (
        <AccordionItem key={item.name} name={item.name} description={item.description} icon={item.icon} />
      ))}
    </div>
  );
};

export default Accordion;
