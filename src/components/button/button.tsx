import Link from 'next/link';
import { FC } from 'react';

import Styles from './button.module.css';

interface Props {
  link: string;
  text: string;
}

export const Button: FC<Props> = ({ link, text }) => {
  return (
    <Link href={link}>
      <a className={Styles.button}>{text}</a>
    </Link>
  );
};
