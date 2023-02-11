import { FC, ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  className?: string;
}

export const Screen: FC<IProps> = ({
  children,
}) => {
  return (
    <div className='screen'>
      { children }
    </div>
  );
};
