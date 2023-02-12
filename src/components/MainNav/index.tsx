import { FC } from "react";
import { Link } from "react-router-dom";
import { useUserSession } from "../../contexts/user-session";
import "./styles.css";

interface IProps {
  className?: string;
}

export const MainNav: FC<IProps> = ({ className }) => {
  const userSession = useUserSession()!;

  const renderRightContent = () => {
    if (userSession.isSignedIn) {
      return (
        <button className='sign-out'>
          Sign Out
        </button>
      );
    }

    return (
      <Link to='/sign-in'>
        Sign In
      </Link>
    )
  }

  return (
    <nav className={`main-nav ${className}`}>
      <Link to='/' className='logo'>
        Xample
      </Link>
      { renderRightContent() }
    </nav>
  );
};