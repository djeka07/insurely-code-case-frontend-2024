import { IconPlus, ParagraphBodySmall, ParagraphCaption } from '@insurely/ui';
import classNames from 'classnames';
import { ReactNode, useState } from 'react';
import styles from './accordionItem.module.css';

export interface AccordionItemProps {
  name: string;
  description?: string;
  icon?: ReactNode;
  initialIsOpen?: boolean;
  className?: string;
}

const AccordionItem = ({ name, description, className, initialIsOpen = false, icon }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(initialIsOpen);
  const toggleIsOpen = () => setIsOpen((prev) => !prev);

  return (
    <div className={classNames(styles.root, className)}>
      <div
        className={classNames(styles.name, { [styles.clickable]: !!description })}
        onClick={!!description ? toggleIsOpen : undefined}
      >
        {description && <IconPlus className={classNames(styles.icon, { [styles.open]: isOpen })} width={20} />}
        <ParagraphCaption>{name}</ParagraphCaption>
        {icon && icon}
      </div>
      <div aria-hidden={!isOpen} className={styles.content}>
        <div>
          <ParagraphBodySmall className={styles.description}>{description}</ParagraphBodySmall>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
