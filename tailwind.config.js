/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      xs: '320px', // extra small devices, phones
      sm: '640px', // small devices, tablets
      md: '768px', // medium devices, small laptops
      lg: '1024px', // large devices, laptops
      xl: '1280px', // extra large devices, large laptops, desktops
      xxl: '1440px', // xxl devices, large desktops
      '2xl': '1920px', // Full HD screens
      '3xl': '2560px', // QHD screens
      '4xl': '3840px', // 4K screens
      '5xl': '100%', // covers everything above
    },
    container: {
      padding: {
        xs: '5px', // extra small devices, phones
        sm: '10px', // small devices, tablets
        md: '15px', // medium devices, small laptops
        lg: '20px', // large devices, laptops
        xl: '25px', // extra large devices, large laptops, desktops
        xxl: '30px', // xxl devices, large desktops
        '2xl': '35px', // Full HD screens
        '3xl': '40px', // QHD screens
        '4xl': '45px', // 4K screens
        '5xl': '50px', // covers everything above
      },
    },
    extend: {
      colors: {
        mainColor: ' #fa9600',
        bgBody: '#fff',
        bgBodyDark: '#333',
        bgHeader: '#f7f7f7',
        bgHeaderDark: '#333',
        bgHeroSection: '#f7f7f7',
        bgHeroSectionDark: '#333',
        bgFooter: '#f7f7f7',
        bgFooterDark: '#333',
        bgSection: '#fff',
        bgSectionDark: '#222',
        bgContainer: '#fff',
        bgContainerDark: '#222',

        colorBorderNavMenu: ' #dbdbdb',
        colorBorderNavMenuDark: '#4f4f4f',
        colorBorder: ' #c3c3c3',
        colorBorderDark: '#4f4f4f',
        bgHover: '#ddd',
        textColor: '#333333',
        textColorDark: '#8b8b8b',

        // icons
        bgIcons: '#dbdbdb',
        bgIconsDark: '#444',
        iconColor: '#333333',
        iconColorDark: '#ffffff',

        // Loader

        bgCardsItem: '#ffffff',
        textPrimary: '#000',
        textSecondary: '#36a6de',
        colorLoader: '#0A192F',
        bordercardsListItem: '#0A192F',
        bgcardsListItem: '#0A192F',
        hoverMenuHeaader: '#36a6de',
        hoverToggleLang: '#36a6de',
        switherTheme: '#36a6de',
        colorLogo: '#36a6de',
        colorMobileMenuIcon: '#36a6de',
        colorIconAuthHeader: '#36a6de',
        bgModal: 'rgba(0,0,0,0.5)',
        borderLabelForm: '#36a6de',
        btnSignUpForm: '#36a6de',
        btnAuthForm: '#36a6de',
        checkboxColor: '#36a6de',
        titleLine: '#36a6de',
      },
      backgroundImage: {
        'hero-pattern': "url('./image/bg-section-home.jpg')",
      },
      keyframes: {
        iconTitle: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
        animloader: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        iconTitle: 'iconTitle 5s linear infinite',
        animloader: 'animloader 1s linear infinite',
      },
      boxShadow: {
        'md-up': '0 0px 6px -1px rgba(0, 0, 0, 0.1), 0 4px 9px 0px rgba(0, 0, 0, 0.06)',
      },
      fontFamily: {
        marck: ['Marck Script', 'cursive'], // 'marck' - это просто пример названия. Вы можете выбрать любое другое.
        Montserrat: ['Montserrat', 'sans-serif'], // 'marck' - это просто пример названия. Вы можете выбрать любое другое.
        Poppins: ['Poppins', 'sans-serif'], // 'marck' - это просто пример названия. Вы можете выбрать любое другое.
      },
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true }), require('@tailwindcss/forms')],
};
