/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        textPrimary: "#272727",
        inputBackground: "#F0F0F0",
        textPlaceholder: "#848484",
        backgroundLight: "#F9FAFF",
        linkPrimary: "#00398F",
        textMuted: "#565656",
        borderDark: "#222222",
        textSecondary: "#848484",
        success: "#0A8200",
        iconColor: "#444E66",
        textTertiary: '#002482',
        text: '#223263',
        inputBorder: '#EBF0FF',
        inputText: '#9098B1',

      },
      screens: {
        // xs: "340",
        sm: '640px',
        md: '768px',
        smallDesktop:'910px',
        lg: '1024px',
        xl: '1280px',
        "2xl": '1536px',
      }
    },
  },
  plugins: [],
}