(async function () {
    let scraper = require('scraper')
    console.log(await scraper.fetchWLDomains('hanaha', 'mb'))
})()