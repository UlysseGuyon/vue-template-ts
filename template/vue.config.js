const path = require('path');

module.exports = {
    outputDir: path.resolve(__dirname, './dist'),
    devServer: {
        port: 8080{{ #makeProxy }},
        proxy: {
            '{{ proxyRoute }}': {
                target: '{{ devServ }}'
            }
        }
        {{ /makeProxy }}
    }
};
