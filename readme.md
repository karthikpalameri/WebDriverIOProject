# Foobar

webdriverio framework for dealing with all automation (web,mobile)

## Installation
Clone the framework and
Use the package manager npm -i to install all the dependencies.

```bash
npm -i
```

## Usage

```javascript
npx wdio run wdio.conf.js
or 
npx wdio run wdio.conf.js --mocha.Opts.grep "End2End" #to pick grep based group
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Helpful links
"CrossBrowser Testing Help" : # Foobar

webdriverio framework for dealing with all automation (web,mobile)

## Installation
Clone the framework and
Use the package manager npm -i to install all the dependencies.

```bash
npm -i
```

## Usage

```bash
npx wdio run wdio.conf.js #run conf

npx wdio run wdio.conf.js --mocha.Opts.grep "End2End" #run grep based group

npx wdio run wdio.conf.js --suite suite1 #run suite1 configured in wdio.conf.js

npx wdio run wdio.conf.js --spec test/specs/EcommerceE2E.js # run only given spec.js file

npx wdio run wdio.conf.js --spec test/specs/EcommerceE2E.js test/specs/firstTest.js # run multiple spec.js file 

npx wdio run wdio.dev.conf.js # run dev version of conf.js , this will copy default wdio.conf.js and overwrite it smartly 

xit # will skip this test 
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Helpful links
"CrossBrowser Testing Help" : 
https://www.lambdatest.com/blog/webdriverio-tutorial-with-examples-for-cross-browser-testing/

"Test Suite Run" : https://webdriver.io/docs/organizingsuites/#running-specific-tests-with-mochaopts