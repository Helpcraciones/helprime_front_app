module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      'primario': '#7D41F0',
      'primarioT1': '#6336BF',
      'primarioT2': '#8547FF',
      'secundario': '#33CCCC',
      'amarillo': '#FFC300',
      'texto' : '#666666',
      'textoOscuro' : "#54595E"
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
],
content: [
  "./node_modules/flowbite/**/*.js"
]


}

