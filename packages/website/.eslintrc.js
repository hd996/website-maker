module.exports = {
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:import/typescript', 'plugin:prettier/recommended'],
  rules: {
    'no-console': 'off',
    'vue/no-v-html': 'off',
    'vue/no-v-for-template-key': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/multi-word-component-names': 'off',
  },
}
