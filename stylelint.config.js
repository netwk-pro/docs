/* =========================================================================
stylelint.config.js

Copyright © 2025 Network Pro Strategies (Network Pro™)
SPDX-License-Identifier: CC-BY-4.0 OR GPL-3.0-or-later
This file is part of Network Pro.
========================================================================= */

/** @type {import('stylelint').Config} */
export default {
  extends: [
    "stylelint-config-recommended", // Base recommended config
    "stylelint-config-html/html", // For linting HTML files
    "stylelint-config-html", // Added from provided config for linting HTML
  ],
  plugins: ["stylelint-order"], // Add stylelint-order plugin
  rules: {
    "property-no-vendor-prefix": null, // Allow vendor prefixes
    "selector-no-vendor-prefix": null,
    "selector-pseudo-element-colon-notation": [
      "double",
      {
        severity: "warning",
      },
    ],
    "media-feature-name-no-vendor-prefix": null,
    "font-family-no-duplicate-names": [
      true,
      {
        ignoreFontFamilyNames: ["monospace"],
      },
    ],
    "selector-class-pattern": [
      "^(?!fa-).*$", // Disallow classes starting with "fa-"
      {
        message:
          "Class names must not start with 'fa-' (FontAwesome classes are ignored)",
      },
    ],
    "order/properties-order": [
      [
        {
          groupName: "Positioning",
          properties: ["position", "top", "right", "bottom", "left", "z-index"],
        },
        {
          groupName: "Box Model",
          properties: [
            "display",
            "flex",
            "flex-grow",
            "flex-shrink",
            "flex-basis",
            "justify-content",
            "align-items",
            "align-self",
            "width",
            "height",
            "padding",
            "margin",
            "border",
            "box-shadow",
          ],
        },
        {
          groupName: "Typography",
          properties: [
            "font",
            "font-size",
            "font-weight",
            "line-height",
            "letter-spacing",
            "color",
            "text-align",
          ],
        },
        {
          groupName: "Visual",
          properties: [
            "background",
            "background-color",
            "background-image",
            "opacity",
            "visibility",
          ],
        },
        {
          groupName: "Animation & Transform",
          properties: ["transition", "transform", "animation"],
        },
      ],
      {
        unspecified: "bottomAlphabetical", // Place unspecified properties alphabetically at the bottom
      },
    ],
  },
  reportDescriptionlessDisables: false, // Do not report disables without descriptions
  reportInvalidScopeDisables: true, // Report invalid scope disables
  reportNeedlessDisables: true, // Report unnecessary disables
  ignoreFiles: ["build/**"], // Ignore the build directory
};
