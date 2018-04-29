const express = require('express');
//Stitch is for Authorization
const stitch = require("mongodb-stitch");
const appId = 'react-web-application-cgsrj';
const clientPromise = stitch.StitchClientFactory.create(appId);

//mongo client is for fetching data from the server
var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
const MONGODB_URI = "mongodb+srv://jasper:n9SXYsDkvbagl90c@clustermockup-urc7d.mongodb.net/JAXDB";

module.exports = () => {
    const route = express.Router();    //Route

    route.get('/', (req, res) => {
      // Execute ping against the server
      clientPromise.then(client => {

      const db = client.service('mongodb', 'mongodb-atlas').db('JAXDB');

      client.login().then(() =>
        db.collection("Staff").find({gender:"Male"}).limit(100).execute()
      ).then(docs => {
        console.log("Found docs", docs)
        res.send(docs).end();
        console.log("[MongoDB Stitch] Connected to Stitch")
      }).catch(err => {
        console.error(err)
      });
      });
    });
    mongoose.connect(MONGODB_URI, function (err) {

       if (err) throw err;

       console.log('Successfully connected');

    });
    route.get('/staff', (req, res) => {
      // Execute ping against the server
      MongoClient.connect(MONGODB_URI, function(err, database) {

         collection = database.db("JAXDB").collection("Staff");
         // perform actions on the collection object
         collection.find({}, function(err, docs) {
           docs.each(function(err, doc) {
             if(doc) {
               res.write(JSON.stringify(doc) + "\n");
               res.status(200).send(doc).end();
             }
             else {
               res.end();
             }
           });
         });
      });
    });
    route.post('/createStaff',(req,res)=>{
      MongoClient.connect(MONGODB_URI, function(err, database) {
        var _id  = 0;
         collection = database.db("JAXDB").collection("Staff");
         // perform actions on the collection object
         if(_id !== 0){
           collection.updateOne(
            { _id: id },
            { $set: { "size.uom": "cm", status: "P" },
              $currentDate: { lastModified: true } })
          .then(function(result) {
            // process result
          })
        }
      });
    })
    route.put('/updateStaff',(req,res)=>{
      MongoClient.connect(MONGODB_URI, function(err, database) {
         collection = database.db("JAXDB").collection("Staff");
         // perform actions on the collection object
         if(_id !== 0){
           collection.updateOne(
            { _id: req.params.id },
            req.body
             )
          .then(function(result) {
            // process result
          })
        }
      });
    })
    route.delete('/deleteStaff',(req,res)=>{
      MongoClient.connect(MONGODB_URI, function(err, database) {

         collection = database.db("JAXDB").collection("Staff");
         // perform actions on the collection object

      });
    })
    route.get('/tasks', (req, res) => {

      clientPromise.then(client => {

      const db = client.service('mongodb', 'mongodb-atlas').db('JAXDB');

      client.login().then(() =>
      //update one row
        db.collection('Staff').updateOne({owner_id: client.authedId()}, {$set:{number:42}}, {upsert:true})
      ).then(() =>
        db.collection('Staff').find({owner_id: client.authedId()}).limit(100).execute()
      ).then(docs => {
        console.log("Found docs", docs)
        res.send(docs).end();
        console.log("[MongoDB Stitch] Connected to Stitch")
      }).catch(err => {
        console.error(err)
      });
    });
  });



    return route;
}
