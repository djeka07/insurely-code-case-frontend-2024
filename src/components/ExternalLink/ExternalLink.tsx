import { IconLink } from '@insurely/ui';
import React, { ReactElement } from 'react';

interface ExternalLinkProps {
  url: string;
  text: string;
  className?: string;
}

const ExternalLink = ({ url, text, className }: ExternalLinkProps): ReactElement => (
  <a
    className={className}
    href={url}
    rel="noopener noreferrer"
    target="_blank"
    style={{
      display: 'flex',
      alignItems: 'center',
      fontSize: 14,
      fontWeight: 600,
    }}
  >
    <IconLink aria-hidden width="32px" color="var(--green)" />
    {text}
  </a>
);

export default ExternalLink;
