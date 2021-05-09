module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        primary: "var(--primary)",
        light: "var(--light)",
        dark: "var(--dark)",
        muted: "var(--muted)",
      },
      boxShadow: {
        theme:
          "0px 4px 88px rgba(21,0,64,0.06),0px 30.1471px 24.1177px rgba(21,0,64,0.02),0px 12.52px 10px rgba(21,0,64,0.02),0px 4.5288px 3.62304px rgba(21,0,64,0.02)",
      },
      fontFamily: {
        heading: "var(--headingfont)",
        body: "var(--textfont)",
        btn: "var(--btnfont)",
      },
      fontWeight: {
        heading: `var(--header_fontweight)`,
      },
      fontSize: {
        "size-10": "1rem",
        "size-12": "1.2rem",
        "size-14": "1.4rem",
        "size-16": "1.6rem",
        "size-18": "1.8rem",
        "size-20": "2rem",
        "size-22": "2.2rem",
        "size-24": "2.4rem",
        "size-26": "2.6rem",
        "size-30": "3rem",
        "size-35": "3.5rem",
        "size-40": "4rem",
        "size-45": "4.5rem",
        "size-50": "5rem",
        "size-64": "6.4rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
