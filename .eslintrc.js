module.exports = {
    env: {
        node: true,
    },
    "parserOptions": { "parser": "@typescript-eslint/parser" },
    plugins: [
        '@typescript-eslint'
    ],
    extends: [
        'eslint:recommended',
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        'plugin:vue/vue3-recommended',
        'prettier'
    ],
    rules: {
        // override/add rules settings here, such as:
        // 'vue/no-unused-vars': 'error'
    }
}