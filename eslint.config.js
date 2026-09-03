import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import globals from "globals";

export default [
    {
        ignores: ["dist/", "node_modules/"],
    },

    js.configs.recommended,
    eslintConfigPrettier,

    {
        files: ["**/*.js"],

        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",

            globals: {
                ...globals.node,
            },
        },

        rules: {
            "no-unused-vars": "warn",
            "no-console": "off",
        },
    },
    {
        files: ["**/*.test.js", "**/*.spec.js"],

        languageOptions: {
            globals: {
                ...globals.jest,
            },
        },
    },
];
