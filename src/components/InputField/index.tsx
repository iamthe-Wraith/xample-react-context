import { FC, InputHTMLAttributes } from 'react';
import './styles.css';

interface IProps {
  className?: string;
  id: string;
  inputProps: InputHTMLAttributes<HTMLInputElement>;
  label?: string | JSX.Element;
}

export const InputField: FC<IProps> = ({
  className,
  id,
  label,
  inputProps,
}) => {
  return (
    <div className={`input-field ${className}`}>
      { label && <label htmlFor={id}>{label}</label> }
      <input
        id={id}
        {...inputProps}
      />
    </div>
  )
}