import antfu from '@antfu/eslint-config'

export default antfu({
  stylistic: {
    quotes: 'single',
  },
  typescript: true,
  vue: true,
  ignores: [
    'node_modules/*',
    '.github/',
    'dist/',
  ],
})
