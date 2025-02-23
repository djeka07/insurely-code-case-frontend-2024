import classNames from 'classnames';
import React, { CSSProperties, ReactElement, ReactNode } from 'react';

import styles from './pill.module.css';

interface PillProps {
  styleType: string;
  className?: string;
  onClick?: () => void;
  children?: ReactNode;
  disabled?: boolean;
  style?: CSSProperties;
}

const Pill = ({ className, onClick, children, disabled, styleType, style }: PillProps): ReactElement => (
  <button
    type="button"
    disabled={disabled}
    onClick={onClick}
    className={classNames(styles.pill, styles[styleType], className)}
    style={style}
  >
    {React.isValidElement(children) ? children : <span className={styles.text}>{children}</span>}
  </button>
);

export default Pill;
