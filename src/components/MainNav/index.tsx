import { FC } from "react";
import { Link } from "react-router-dom";
import { useUserSession } from "../../contexts/user-session";
import { Avatar } from "../Avatar";
import "./styles.css";

interface IProps {
  className?: string;
}

export const MainNav: FC<IProps> = ({ className }) => {
  const userSession = useUserSession()!;

  const renderRightContent = () => {
    if (userSession.isSignedIn) {
      return (
        <div className='user-data-container'>
          <button className='sign-out' onClick={userSession.signout}>
            Sign Out
          </button>
          <Link to='/profile'>
            <Avatar username={ userSession.data?.username! } />
          </Link>
        </div>
      );
    }

    return (
      <Link to='/signin'>
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