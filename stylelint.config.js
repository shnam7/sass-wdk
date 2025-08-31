export default {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-standard-scss',
    ],

    rules: {
        // Spacing and formatting flexibility
        'at-rule-empty-line-before': null,
        'scss/dollar-variable-empty-line-before': null,
        'scss/double-slash-comment-empty-line-before': null,
        'scss/dollar-variable-colon-space-after': null,
        'scss/operator-no-unspaced': null,

        // Naming patterns - allow flexible naming for library development
        'scss/dollar-variable-pattern': null,
        'scss/at-mixin-pattern': null,
        'scss/at-function-pattern': null,

        // Comment formatting
        'scss/comment-no-empty': null,
        'scss/double-slash-comment-whitespace-inside': null,

        // Control structure spacing
        'scss/at-if-closing-brace-newline-after': null,
        'scss/at-else-closing-brace-newline-after': null,
        'scss/at-else-closing-brace-space-after': null,
        'scss/at-if-closing-brace-space-after': null,

        // Color and value formatting
        'color-hex-length': null,
        'value-keyword-case': null,
    },
}
