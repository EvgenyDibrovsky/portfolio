import Logo from '../../image/logo.svg';
import { Link } from 'react-router-dom';

export default function logo() {
  return (
    <Link to="/">
      <img src={Logo} alt="Logo" className="w-8/12 mx-auto" />
    </Link>
  );
}
