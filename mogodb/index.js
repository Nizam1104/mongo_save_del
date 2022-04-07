// const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost/sampleDB", {useNewUrlParser : true});

// var db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error'));

// db.once('open', ()=>{
//      console.log("connected")
// })

// var col2sch = new mongoose.Schema({
//      "name":String
// })

// col2sch.methods.speak= function(){
//      var greeting = "my name is "+ this.name
//      console.log(greeting)
// }

// var c2s = mongoose.model('c2s', col2sch);

// var sil = new c2s({name : "silence"});
// // console.log(sil.name)

// // sil.speak();

// sil.save(function(err, sil){
//      if(err) return console.error(err)
//      sil.speak();
// })


// const kittySchema = new mongoose.Schema({
//      name: String
// });

// var harrykitten= new Kitten({ name: 'harryKitty' });
// console.log(harrykitty.name); // 'Silence'

// kittySchema.methods.speak = function () {
//      var greeting = this.name
//      console.log(greeting);
// }

// harrykitty.save(function (err, harrykitty) {
//   if (err) return console.error(err);
//   harrykitty.speak();
// });



// mongoose.connect('mongodb://localhost:27017/sampleDB');

// mongoose.connect('mongodb://localhost:27017/myapp');
// const MyModel = mongoose.model('Test', new Schema({ name: String }));
// // Works
// MyModel.findOne(function(error, result) { 
//      if(err) {return error;}
//      else{
//           console.log("connected")
//      }
     
// });



// const mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost/books', {useNewUrlParser: true});

// const Schema = mongoose.Schema
// const BookSchema = new Schema({
// name : String
// })

// const Model = mongoose.model
// const Book = Model('books',BookSchema)

// const NodeJsGuide = new Book({name : 'NodeJS : A Guide' })

// const nodebook = new Book({
//      name : "nodebook"
// })

// NodeJsGuide.save((err,result)=>{
//      if(err) console.log(err)
//      console.log(result);
// })

// nodebook.save((err, res)=>{
//      if(err) console.log(err)
//      console.log(res)
// })

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/cars")

const schema = mongoose.Schema

const carsschema = new schema({
     name : String,
     colour: String,
     price: Number,
})

const model = mongoose.model

const car = model('cars', carsschema)

const nexon = new car({
     name : "nexon",
     colour : "black",
     price: 2500000
})

const tesla = new car({
     name : "modelX",
     colour : "blue",
     price: 25000000

})

// nexon.save((err,res)=>{
//      if(err) return err
//      console.log(res)
// })

// tesla.save((err,res)=>{
//      if(err) return err
//      console.log(res)
// })

// car.find((err,document)=> {
//      console.log(document)
//      })

// car.find({"name" : "modelX"},(err,res)=>{
//      console.log(res)
// })

car.updateOne({name:'nexon'},{name: 'ferrari'},(err,res)=>{
     console.log(res);
     })