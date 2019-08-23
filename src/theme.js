import prismPreset from "@theme-ui/prism/presets/github.json";

export const theme = {
  initialColorMode: "light",
  useCustomProperties: true,
  colors: {
    text: "#000",
    background: "#fff",
    block: "hsl(0,0%,90%)",
    primary: "#446cff",
    dim: "#596bad",
    modes: {
      dark: {
        text: "#fff",
        background: "#2e3440",
        primary: "#ffc88f",
        block: "#1e2229",
      }
    }
  },
  breakpoints: [
    "56em", //'896px',
    "64em", //'1024px',
    "80em", //'1280px',
    "100em", //'1600px',
  ],
  fonts: {
    body: "system-ui, sans-serif",
    monospace: "Menlo, monospace"
  },
  fontWeights: {
    body: 400,
    heading: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  layouts: {
    Body: {
      /*
       * Uncomment below for indepenent scrolling.
       **/
      // display: 'flex',
      // flex: '1 1 auto',
      // height: ['','80vh'],
      // overflowY: ['','hidden'],
      // backgroundColor: 'cornflowerblue',
      // justifyContent: 'space-between',
      // flexDirection: ['column', 'row'],
    },
    Main: {
      /*
       * Uncomment below for indepenent scrolling.
       **/
      // width: '100%',
      // overflowY: ['','scroll'],
      // scrollbarWidth: "thin",
      // "&::-webkit-scrollbar": {
      //     width: "10px",
      //     background: "rgba(0,0,0,0.06)",
      // },
      // "&::-webkit-scrollbar-thumb": {
      //     background: "rgba(0,0,0,0.2)",
      // },
    },
    Sidebar: {
      /*
       * Uncomment below for indepenent scrolling.
       **/
      // flex: '0 0 12em',
      // overflowY: ['','scroll'],
      // scrollbarWidth: "thin",
      // "&::-webkit-scrollbar": {
      //     width: "10px",
      //     background: "rgba(0,0,0,0.06)",
      // },
      // "&::-webkit-scrollbar-thumb": {
      //     background: "rgba(0,0,0,0.2)",
      // },
    }
  },
  styles: {
    img: {
      width: 'auto',
      height: 'auto',
      display: 'inherit',
      border: 0,
    },
    pre: {
      ...prismPreset,
      padding: '0.5em',
      fontSize: '0.8em',
      marginBottom: '10px',
      border: "1px solid rgba(0,0,0,0.06)",
      maxHeight: "500px",
      overflow: "scroll",
      ".line-numbers-rows": {
        padding: '0.5em',
        borderRight: "3px solid rgba(0,0,0,0.06)"
      },
      "&::-webkit-scrollbar": {
        height: "5px",
        width: "5px",
        background: "rgba(0,0,0,0.06)"
      },
      "&::-webkit-scrollbar-thumb": {
        background: "rgba(0,0,0,0.2)"
      },
      "&::-webkit-scrollbar-corner": {
        background: "rgba(0,0,0,0.2)"
      },
    },
    a: {
      color: 'primary',
    },
    Link: {
      color: 'primary',
    },
    td: {
      padding: '10px',
      textAlign: 'left',
      borderRight: '1px solid',
      borderColor: 'dim'
    },
    th: {
      padding: '10px',
      textAlign: 'left',
      borderRight: '1px solid',
      borderColor: 'dim'
    },
    tr: {
      background: 'none',
      borderBottom: '1px solid',
      borderColor: 'dim',
    },
    table: {
      border: '1px solid',
      borderColor: 'dim'
    }
  }
};
