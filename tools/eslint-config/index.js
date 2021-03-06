require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "@typescript-eslint/triple-slash-reference": [
            "off"
        ],
        "spaced-comment": [
            "off"
        ],
        "no-duplicate-imports": [
            "off"
        ]
    },
    "extends": [
        "@pixi/eslint-config"
    ]
};