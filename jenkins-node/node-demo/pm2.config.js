module.exports = {
    apps: [
        {
            name: 'app',
            script: './index.js',
            env: {
                NODE_ENV: 'production',

                // 透传变量
                ENV_LABEL: process.env.ENV_LABEL,
            },
        },
    ],
};
