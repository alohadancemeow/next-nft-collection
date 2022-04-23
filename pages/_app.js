import { createGlobalStyle, ThemeProvider, css } from 'styled-components'

// useing antd css
const antdCss = css`
  ${import('antd/dist/antd.css')}
  /* font-family: 'Fredoka', sans-serif; */
`;

// set global style --> reset css
const GlobalStyle = createGlobalStyle`
  ${antdCss}

  *,*::before,*::after {
    margin: 0;
    padding: 0;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    /* font-family: 'Akaya Telivigala', cursive; */
    font-family: 'Sora', sans-serif;
    vertical-align: baseline;
  }
  body {
    box-sizing: border-box;
    font-family: 'Sora', sans-serif;
    position: relative;
    font-size: 16px;
    line-height: 28px;
    font-weight: 400;
    min-height: 100%;
    background-color: #fff;
    overflow-x: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      color: inherit;
    }
  }
`

// set theme
// --> LightMode
const theme = {
  colors: {
    primary: '#058335', //green
    secondary: '#f35858', //red
    accent: '#588ef3' //blue
  },
  textColors: {
    body: '#fff',
    text: '#202020',
    bodyRgba: '255, 255, 255',
    textRgba: '32, 32, 32',
    carouselColor: '#EEEDDE'
  },
  breakpoints: {
    mobile: '576px',
    tablet: '820px',
    notebook: '1080px',

    // xs: '480px',
    // sm: '576px',
    // md: '768px',
    // lg: '992px',
    // xl: '1200px',
    // xxl: '1600px',
  },
  fonts: {
    xs: '0.75em',
    sm: '0.875em',
    md: '1em',  //1em = 16px
    lg: '1.25em',
    xl: '2em',
    xxl: '3em',
    xxxl: '4em',
    buttonFont: '0.875em'
  },
  navHeight: '5rem',
}

// --> DarkMode
export const darkMode = {
  textColors: {
    body: '#202020',
    text: '#fff',
    bodyRgba: '32, 32, 32 ',
    textRgba: '255, 255, 255',
    carouselColor: '#EEEDDE'
  },
  breakpoints: {
    mobile: '576px',
    tablet: '820px',
    notebook: '1080px',

    // xs: '480px',
    // sm: '576px',
    // md: '768px',
    // lg: '992px',
    // xl: '1200px',
    // xxl: '1600px',
  },
  fonts: {
    xs: '0.75em',
    sm: '0.875em',
    md: '1em',  //1em = 16px
    lg: '1.25em',
    xl: '2em',
    xxl: '3em',
    xxxl: '4em',
    buttonFont: '0.875em'
  },
  navHeight: '5rem',
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
