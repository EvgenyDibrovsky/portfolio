import Foto from '../../images/photo.png';
import { Link } from 'react-router-dom';

const foto = ({ closeHeader }) => {
  return (
    <Link to="/">
      <div className="w-24 h-24 flex items-center justify-center rounded-full bg-white dark:bg-bgSectionDark p-2">
        <img src={Foto} alt="Foto" onClick={closeHeader} className="w-full h-full  mx-auto rounded-full " width="96" height="96" />
      </div>
    </Link>
  );
};
export default foto;
