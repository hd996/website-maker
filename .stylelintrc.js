module.exports = {
  processors: [],
  plugins: ["stylelint-scss"],
  extends: "stylelint-config-standard",
  rules: {
    "at-rule-no-unknown": [ true, {
      ignoreAtRules: ['extend', 'at-root', 'debug', 'warn', 'error', 'if', 'else', 'for', 'each', 'while', 'mixin', 'include', 'content', 'return', 'function', 'use']
    }],
  }
};
