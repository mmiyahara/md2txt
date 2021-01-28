module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ["prismjs", {
        "languages": ["markdown"],
        "plugins": ["line-numbers"],
        "theme": "twilight",
        "css": true
    }]
  ],
}
