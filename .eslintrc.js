const config = {
    'development': {
        'env': {
            'browser': true,
            'commonjs': true,
            'es6': true,
            'node': true
        },
        'extends': [
            'eslint:recommended',
            'plugin:flowtype/recommended'
        ],
        'parser': 'babel-eslint',
        'plugins': [
            'flowtype'
        ],
        'parserOptions': {
            'sourceType': 'module'
        },
        'rules': {
            'indent': [
                'error',
                4
            ],
            'linebreak-style': [
                'error',
                'unix'
            ],
            'no-console': [
                'off',
            ],
            'quotes': [
                'error',
                'single'
            ],
            'semi': [
                'error',
                'always'
            ]
        }
    },
    'production': {
        'env': {
            'browser': true,
            'commonjs': true,
            'es6': true,
            'node': true
        },
        'extends': [
            'eslint:recommended',
            'plugin:flowtype/recommended'
        ],
        'parser': 'babel-eslint',
        'plugins': [
            'flowtype'
        ],
        'parserOptions': {
            'sourceType': 'module'
        },
        'rules': {
            'indent': [
                'error',
                4
            ],
            'linebreak-style': [
                'error',
                'unix'
            ],
            'no-console': [
                'error',
                {
                    allow: ['info', 'warn', 'error']
                }
            ],
            'quotes': [
                'error',
                'single'
            ],
            'semi': [
                'error',
                'always'
            ]
        }
    }
};

module.exports = config[process.env.NODE_ENV || 'development'];

