const defaultOptions = {
  scrollYOffset: 'nav.navbar',
  hideDownloadButton: true,
  expandSingleSchemaField: true,
  menuToggle: true,
  suppressWarnings: true,
};

const DOCUSAURUS = {
  darkGray: '#303846',
  dark: {
    primaryText: '#f5f6f7',
    secondaryText: 'rgba(255, 255, 255, 1)',
    backgroundColor: 'rgb(24, 25, 26)',
    innerDark: "#424347",
    innderLight: "#636363",
  },
};

const LIGHT_THEME_OPTIONS = {
  colors: {
    primary: {
      main: '#25c2a0',
    },
  },
  typography: {
    fontFamily: 'var(--ifm-font-family-base)',
    fontSize: 'var(--ifm-font-size-base)',
    lineHeight: 'var(--ifm-line-height-base)',
    fontWeightLight: 'var(--ifm-font-weight-light)',
    fontWeightRegular: 'var(--ifm-font-weight-base)',
    fontWeightBold: 'var(--ifm-font-weight-bold)',
    headings: {
      fontFamily: 'var(--ifm-font-family-base)',
      fontWeight: 'var(--ifm-font-weight-semibold)',
      lineHeight: 'var(--ifm-line-height-base)',
    },
    code: {
      fontFamily: 'var(--ifm-font-family-monospace)',
      lineHeight: 'var(--ifm-pre-line-height)',
    },
  },
  sidebar: {
    width: '300px',
    backgroundColor: '#ffffff',
  },
  rightPanel: {
    backgroundColor: DOCUSAURUS.darkGray,
  },
};

const DARK_THEME_OPTIONS = {
  colors: {
    primary: {
      main: '#25c2a0',
    },
    text: {
      primary: DOCUSAURUS.dark.primaryText,
      secondary: DOCUSAURUS.dark.secondaryText,
      grey: DOCUSAURUS.dark.primaryText,
    },
    gray: {
      50: '#787878',
      100: '#F5F5F5',
    },
    border: {
      dark: '#ffffff',
      light: 'rgba(0,0,0, 0.1)',
    },
    light: {
      main: DOCUSAURUS.dark.innderLight
    },
    secondary: {
      main: DOCUSAURUS.dark.primaryText,
      contrastText: DOCUSAURUS.dark.innerDark,
    }
  },
  typography: {
    code: {
      color: DOCUSAURUS.dark.innerDark,
    }
  },
  schema: {
    nestedBackground: DOCUSAURUS.dark.backgroundColor,
    typeNameColor: DOCUSAURUS.dark.secondaryText,
    typeTitleColor: DOCUSAURUS.dark.secondaryText,
  },
  sidebar: {
    backgroundColor: DOCUSAURUS.dark.backgroundColor,
    textColor: DOCUSAURUS.dark.primaryText,
    arrow: {
      color: DOCUSAURUS.dark.primaryText,
    },
  },
  modal: {
    backgroundColor: DOCUSAURUS.dark.innerDark,
    titleColor: DOCUSAURUS.dark.primaryText,
  },
};

export const lightTheme = LIGHT_THEME_OPTIONS;
export const darkTheme = DARK_THEME_OPTIONS;
export const redocOptions = defaultOptions;