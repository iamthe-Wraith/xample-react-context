import { FC } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

interface IProps {
  className?: string;
}

export const MainNav: FC<IProps> = ({ className }) => {
  return (
    <nav className={`main-nav ${className}`}>
      <Link to='/' className='logo'>
        Xample
      </Link>
      <Link to='/signin'>
        Sign In
      </Link>
    </nav>
  );
};