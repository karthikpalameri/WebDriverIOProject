// https://webdriver.io/docs/organizingsuites/ 
// (dev,prod,uat) specs creation by overwriting default spec file 


const merge = require('deepmerge');
const wdioConf = require('./wdio.conf.js');

exports.config = merge(wdioConf.config, {
    specs: [
        'test/specs/EcommerceE2E.js'
    ],
    baseUrl: 'https://www.dev-rahulshettyacademy.com',
    waitforTimeout: 10000,
    // Options to be passed to Mocha.
    // See the full list at: http://mochajs.org
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000 , // wait until this many seconds before terminating while run or debugging 
        // grep:'smoke', //grep test cases name

    },
})