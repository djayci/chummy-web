import { FC } from 'react';
import { Button } from '../button/button';
import { Logo } from '../logo/logo';
import Styles from './header.module.css';

export const Header: FC = () => {
  return (
    <header className={Styles.header} >
      <div>
        <Logo />
      </div>
      <div>
        <input type="search" />
      </div>
      <nav>
        <Button link="https://google.com" text="Login" />
      </nav>
    </header>
  );
}