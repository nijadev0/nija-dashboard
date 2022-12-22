module.exports = {
  plugins: [require('prettier-plugin-tailwindcss')],
  tailwindConfig: './tailwind.config.cjs',
  printWidth: 100,
  singleQuote: true,
  semi: false,
  overrides: [
    {
      files: ['**/*.css', '**/*.scss', '**/*.html', '**/*.vue'],
      options: {
        singleQuote: true,
      },
    },
  ],
}
