import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    plugins: {
      react: pluginReact
    },
    rules: {
      // 🔧 Reglas personalizadas recomendadas
      "no-unused-vars": "warn", // avisar si hay variables sin usar
      "no-console": "off",      // permitir console.log en desarrollo
      "react/react-in-jsx-scope": "off", // innecesario en React 17+
      "react/prop-types": "off" // si usas TS puedes desactivar
    },
    settings: {
      react: {
        version: "detect" // ✅ detecta automáticamente la versión de React
      }
    }
  },
  js.configs.recommended,
  pluginReact.configs.flat.recommended
]);
