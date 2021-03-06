module.exports = {
  content: ["content/**/*.md", "layouts/**/*.html"],
  theme: {
    fontFamily: {
      'title': ['Arial','Helvetica','sans-serif'],
      'lyrics': ['"Times New Roman"','Times','serif']
    },
    extend: {
      keyframes: {
        scroll_lp: {
          from: { transform: 'translateX(0%)'},
          to: { transform: 'translateX(-100%)'}
        },
        scroll_rp: {
          from: { transform: 'translateX(100%)'},
          to: { transform: 'translateX(0%)'}
        },
      },
      animation: {
        scroll_lp: 'scroll_lp 24s linear infinite',
        scroll_rp: 'scroll_rp 24s linear infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}
