import Foto from '../../images/photo.png';
import { Link } from 'react-router-dom';

export default function foto({ closeHeader }) {
  return (
    <Link to="/">
      <img src={Foto} alt="Foto" onClick={closeHeader} className="w-6/12 mx-auto rounded-full " />
    </Link>
  );
}
