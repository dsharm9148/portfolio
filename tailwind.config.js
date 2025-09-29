/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
        fontFamily: {
        georgia: ['Georgia', 'serif'],
        times: ['"Times New Roman"', 'serif'],
        courier: ['"Courier New"', 'monospace'],
    },
  },
  plugins: [],
},
};
