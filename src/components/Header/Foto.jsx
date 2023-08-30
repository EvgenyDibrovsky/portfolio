import Foto from '../../images/photo.jpg';
import { Link } from 'react-router-dom';

export default function foto() {
  return (
    <Link to="/">
      <img src={Foto} alt="Foto" className="w-6/12 mx-auto rounded-full " />
    </Link>
  );
}
