// commitlint.config.js
module.exports = {
  // Extend standard conventional commit rules
  extends: ["@commitlint/config-conventional"],

  // Extra rules if you want custom enforcement
  rules: {
    // Allowed commit types
    "type-enum": [
      2, // error level
      "always",
      ["feat", "fix", "docs", "style", "refactor", "test", "chore"]
    ],

    // Subject case rule (0 = off, 1 = warning, 2 = error)
    "subject-case": [0, "never", []] // allows any case for subject

    // Optional: you can enforce max length, e.g.
    // "header-max-length": [2, "always", 72]
  }
};
