import { FC, ReactNode } from 'react';
import { MainNav } from '../../components/MainNav';
import './styles.css';

interface IProps {
  children: ReactNode;
  className?: string;
}

export const Screen: FC<IProps> = ({
  children,
}) => {
  return (
    <div className='screen'>
      <MainNav />
      <div className='screen-content'>
        { children }
      </div>
    </div>
  );
};
