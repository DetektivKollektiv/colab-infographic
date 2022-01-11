module.exports = {
    mode: 'jit',
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            sans: ['Cabin', 'ui-sans-serif', 'system-ui'],
            serif: ['EB Garamond', 'ui-serif', 'Georgia', 'serif'],
            headline: ['Space Grotesk', 'ui-sans-serif', 'system-ui'],
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
