const express = require('express');
const solrRoutes = express.Router();
const SolrNode = require('solr-node');
const Client = require('./solr.model');

let client = new SolrNode({
    host: '127.0.0.1',
    port: '8983',
    core: 'TestSolr',
    protocol: 'http'
});

// solrRoutes.route('/').get(function() {
//     client.find(function(err, clients){
//         if(err){
//           console.log(err);
//         }
//         else {
//           res.json(clients);
//         }
//       });
// });

solrRoutes.route('/add').post(function(req, res) {
    console.log(req.body);
    const data = {
        text: req.body
    }
    // Add Data to solr
    client.update(data, function(err, obj){
        if(err){
            console.log(err);
        } 

        console.log('Solr resopnse:', obj)
        
    })
});

solrRoutes.route('/search').post(function(req, res) {
    console.log(req.body)
    let Query = client.query()
                      .q(req.body)
                      .start(1)
                      .rows(20);
    client.search(Query, function (err, result) {
        if (err) {
            console.log(err);
            return;
        }
        console.log('Response:', result.response.docs)
        return result.response
    });
});

solrRoutes.route('/get').get(function(req, res){
    client._requestGet(req.body, function(err, result){
        if(err){
            console.log(err)
        }
        console.log(result)
    });
});

module.exports = solrRoutes;