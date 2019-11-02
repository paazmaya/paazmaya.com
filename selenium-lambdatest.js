// https://www.npmjs.com/package/selenium-webdriver
const {Builder, By, until} = require('selenium-webdriver');

/*
    Setup remote driver
    Params
    ----------
    platform : Supported platform - (Windows 10, Windows 8.1, Windows 8, Windows 7,  macOS High Sierra, macOS Sierra, OS X El Capitan, OS X Yosemite, OS X Mavericks)
    browserName : Supported platform - (chrome, firefox, Internet Explorer, MicrosoftEdge, Safari)
    version :  Supported list of version can be found at https://www.lambdatest.com/capabilities-generator/
*/

const USERNAME = process.env.LT_USERNAME || 'paazmaya';
const KEY = process.env.LT_ACCESS_KEY || '';
const GRID_HOST = 'hub.lambdatest.com/wd/hub';
const SERVER = `https://${USERNAME}:${KEY}@${GRID_HOST}`;

async function searchTextOnGoogle() {
    // Setup Input capabilities
    const capabilities = {
        platform: 'Windows 10',
        browserName: 'chrome',
        version: '67.0',
        resolution: '1280x800',
        network: true,
        visual: true,
        console: true,
        video: true,
        name: 'Color changes',
        build: 'b1ee3ddfe0349cd32ce9d70b2e181a0f4ee99009'
    }

    const driver = await new Builder()
        .usingServer(SERVER)
        .withCapabilities(capabilities)
        .build();

    await driver.get('https://paazmaya.com');
    const bgColor = await driver.findElement(By.css('html')).getCssValue('background-color');
    console.log(bgColor);
    await driver.quit();
}
searchTextOnGoogle();
