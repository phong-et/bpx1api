'use strict'
let log = console.log
let scraper = require('../../scraper')
module.exports = async function (fastify, opts) {
  fastify.get('/scrap/:name/:typeSite', async function (request, reply) {
    let name = request.params.name, 
    typeSite = request.params.typeSite,
    skipAuthentication = true
    log(name)
    log(typeSite)
    let siteData = await scraper.fetchWLSites(name)
    let data = {
        domains:await scraper.fetchWLDomains(name, typeSite, siteData, skipAuthentication),
        ips:await scraper.fetchWLSiteAddrs(name, typeSite, siteData, skipAuthentication)
    }
    reply.send(data)
  })
}
