const   express = require('express'),
        app = express(),
        upload = require('express-fileupload'),
        bodyParser = require('body-parser'),
        cors = require('cors'),
        PORT = 4000,
        solrRoute = require('./solr.route');

app.use(cors());
app.use(upload());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true }));

app.use('/solr', solrRoute);

app.listen(PORT, function () { 
 console.log('Server is runnning on Port:',PORT,'!!!'); 
});

//let textract = require('textract');

// app.get("/", function(req, res){
//     res.sendFile(__dirname + "/index.html");
// })

// app.post("/", function(req, res){
//     // console.log(req.body);
//      if(req.body){
//         // //Add Data to solr
//         // client.update(req.body, function(err, obj){
//         //     if(err){
//         //        console.log(err);
//         //     }else{
//         //        console.log('Solr response:', obj);
//         //     }
//         //  });

//         // //Search Data in solr
//         let strQuery = client.query().q()
//                              .addParams({
//                                  wt: 'json',
//                                  df: req.body.search
//                              })
//                              .start(1)
//                              .rows(10);
//          //console.log(strQuery)
//         client.search(strQuery, function (err, result) {
//             if (err) {
//                console.log(err);
//                return;
//             }
//             const test = [];
//             result.response.docs.forEach(element => {
//                 console.log(element.fulltext)
//                 test.push(element);
//             });
//             //console.log(test);
//         });
//     }
    
// });

// app.post("/", function(req, res){
//     //console.log(req.files)
//     if(req.files){
//         let {name, mv} = req.files.fulltext
//         mv("./upload/" + name, function(err){
//             if(err){
//                 console.log(err)
//                 res.send("error occured")
//             } else {
//                 res.send("Done")
//                     // fs.readFileSync('./upload/' + name, 'utf8', function(err, data){
//                     //     console.log(data);
//                     // });
//             }
//         })

//         //console.log(data)
//     }
// })