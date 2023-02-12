import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import './styles.css';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button: FC<IProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={`button ${className}`}
      { ...props }
    >
      { children }
    </button>
  );
}