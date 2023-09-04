import Logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

export default function logo({ closeHeader }) {
  return (
    <Link to="./">
      <img src={Logo} alt="Logo-Edweb" onClick={closeHeader} className="w-8/12 mx-auto" />
    </Link>
  );
}
