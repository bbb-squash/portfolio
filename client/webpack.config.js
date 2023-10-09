const GoogleFontsPlugin = require("google-fonts-webpack-plugin")

module.exports = {
  "entry": "index.js",
  plugins: [
    new GoogleFontsPlugin({ fonts: [
      { family: "Source Sans Pro" },
      { family: "M PLUS Rounded 1c" },
      { family: "Noto Sans JP" },
      { family: "Roboto" }
    ] })
  ]
}
