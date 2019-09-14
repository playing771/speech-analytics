import React, { ReactElement } from 'react';
import './styles.css';

interface IProps {
  children: ReactElement | ReactElement[];
  className?: string;
}

export default function Card(props: IProps) {
  return <div className={`card ${props.className}`}>{props.children}</div>;
}
