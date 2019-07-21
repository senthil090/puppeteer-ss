const puppeteer = require('puppeteer');

const takescreenshot = async (url , path) => {
    // Launching a new browser instance
    const browser = await puppeteer.launch();

    // Opening a new page . simply like new tab
    const tab = await browser.newPage();

    // Setting a view port to desktop
    tab.setViewport({
        width: 1366,
        height: 768
    });

    // go to the destinated web page
    await tab.goto(url);

    // get page title
    let pagetitle = await tab.title();

    // take a screenshot of page
    await tab.screenshot( {
        path: path + '/' + pagetitle.replace(' ','') + '-Desktop-1366X786.png' 
    } );

    // Set tab viewport sizes
    tab.setViewport({
        width: 768,
        height: 1024
    });

    await tab.screenshot( {
        path: path + '/' + pagetitle.replace(' ','') + '-Tab-768X1024.png' 
    });

    // Set mobile sizes
    tab.setViewport({
        width: 480,
        height: 800
    });

    await tab.screenshot({
        path: path + '/' + pagetitle.replace(' ','') + '-Phone-480X800.png'
    });


    // Close the browser after all operations
    await browser.close();


}

takescreenshot( process.argv[2] , process.argv[3] );