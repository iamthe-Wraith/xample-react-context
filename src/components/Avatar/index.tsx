import { FC } from "react";
import "./styles.css";

interface IProps {
  src?: string;
  username: string;
}

export const Avatar: FC<IProps> = ({ src, username }) => {
  if (src) {
    return (
      <div className='avatar'>
        <img src={src} alt={`${username}'s avatar`} />
      </div>
    );
  }

  return <div className='avatar default-avatar'>{username[0]}</div>;
}