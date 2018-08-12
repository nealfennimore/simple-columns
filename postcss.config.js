module.exports = ( { file, options, env } ) => ( { // eslint-disable-line
    plugins: {
        'postcss-import': { root: file.dirname },
        'postcss-preset-env': { stage: 0 }
    }
} );
