/** @type {import('tailwindcss').Config} */
module.exports = {
  //Con (**/*.jsx) le decimos que sea cargado en todos los archivos con terminacion jsx
  content: ['./index.html','./src/**/*.jsx'],//Archivos en donde se cargara Tailwind
  theme: {
    extend: {},
  },
  plugins: [],
}
