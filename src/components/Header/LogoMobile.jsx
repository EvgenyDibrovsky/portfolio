import LogoMobile from '../../images/logo-mobile.svg';
import { Link } from 'react-router-dom';

const logoMobile = ({ closeHeader }) => {
  return (
    <Link to="./">
      <img src={LogoMobile} alt="Logo-edweb" onClick={closeHeader} className="w-8/12 h-auto mx-auto" width="8" height="20" />
    </Link>
  );
};
export default logoMobile;
