const plugins = [
    require('postcss-preset-env')({
        stage: 1
    })
];

if (process.env.NODE_ENV === 'production') {
    plugins.push(require('cssnano'));
}

module.exports = {
    plugins
};
