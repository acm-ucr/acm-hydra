module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ["plugin:react/recommended", "google", "prettier",
        "next/core-web-vitals"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: "module",
    },
    plugins: ["react"],
    rules: {
        "require-jsdoc": "off",
    },
    settings: {
        react: {
            version: "detect",
        },
    },
};
