import { MenuLink } from '@insurely/ui';
import { NavLink } from 'react-router-dom';
import { LinkItemType } from './linkItem.type';

interface LinkItemProps {
  link: LinkItemType;
  onClick: () => void;
}

const LinkItem = ({ link, onClick }: LinkItemProps) => (
  <NavLink key={link.route} end={false} to={link.route} onClick={onClick}>
    {({ isActive }) => (
      <MenuLink isActive={isActive}>
        {link.icon}
        {link.label}
      </MenuLink>
    )}
  </NavLink>
);

export default LinkItem;
