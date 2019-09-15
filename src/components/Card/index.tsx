import React, { ReactElement } from 'react';
import './styles.css';

interface IProps {
  children: ReactElement | ReactElement[];
  className?: string;
  title?: string;
  subTitle?: string;
}

export default function Card({ children, title, subTitle, className }: IProps) {
  return (
    <div className={`card ${className}`}>
      {(title || subTitle) && (
        <div className="card__title-container">
          <h2 className="card__title">{title}</h2>
          <h4 className="card__sub-title">{subTitle}</h4>
        </div>
      )}
      {children}
    </div>
  );
}
