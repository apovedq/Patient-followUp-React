/** @type {import('tailwindcss').Config} */
export default {

  //Components you want Tailwind to work with
 content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
       fontFamily: {
        "sans": ['Source Sans Pro', "sans-serif"]
      }
    },
  },
  plugins: [],
}

