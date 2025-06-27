import { FunctionComponent } from 'react';

declare interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  isActive: (path: string) => string;
  isInfrastructureActive: () => string;
}

declare const MobileMenu: FunctionComponent<MobileMenuProps>;

export default MobileMenu;
