import PaulSignatureTtf from './fonts/PaulSignature-WEJY.ttf';

const paulSignature = {
  fontFamily: 'PaulSignature',
  fontStyle: 'normal',
  fontWeight: 'normal',
  src: `
    local('PaulSignature'),
    url(${PaulSignatureTtf}) format('truetype')
  `,
};

export const globalStyles = () => ({
  '@global': {
    '@font-face': [paulSignature],
    body: {
      color: '#3c4858',
      margin: 0,
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 300,
      lineHeight: '1.5em',
    },
    html: {
      '& *': {
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
      },
    },
  },
});
