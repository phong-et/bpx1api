'use strict'
let log = console.log
let scraper = require('../../scraper')
module.exports = async function (fastify, opts) {
  fastify.get('/scrap/:nameWhiteLabel/:typeSite', async function (request, reply) {
    //log(request.body)
    //log(request.query)
    //log(request.params)
    let nameWhiteLabel = request.params.nameWhiteLabel, 
    typeSite = request.params.typeSite,
    skipAuthentication = true
    log(nameWhiteLabel)
    log(typeSite)
    let siteData = await scraper.fetchWLSites(nameWhiteLabel)
    let data = {
        domains:await scraper.fetchWLDomains(nameWhiteLabel, typeSite, siteData, skipAuthentication),
        ips:await scraper.fetchWLSiteAddrs(nameWhiteLabel, typeSite, siteData, skipAuthentication)
    }
    reply.send(data)
    //log(request.headers)
    //log(request.raw)
    //log(request.id)
    //log(request.ip)
    //log(request.ips)
    //log(request.hostname)
    //request.log.info('some info')
  })
}
