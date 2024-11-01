import globals from 'globals';
import pluginJs from '@eslint/js';
import daStyle from 'eslint-config-dicodingacademy';

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,

        Feature: 'readonly',
        Scenario: 'readonly',
        I: 'readonly',
        actor: 'readonly',
      },
    },
  },
  pluginJs.configs.recommended,
  daStyle,
];
