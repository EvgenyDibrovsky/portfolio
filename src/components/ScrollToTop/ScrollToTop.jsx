import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Проверяем, доступен ли объект window
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        left: 0,
        // Включаем плавную прокрутку
        behavior: 'smooth',
      });
    }
  }, [pathname]);

  return null;
}
