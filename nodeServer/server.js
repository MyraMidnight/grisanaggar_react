
const express = require('express');
const app = express();
const fetch = require('node-fetch');
const cors = require('cors');
const port=3001;

app.use(cors());
app.use(express.json());

const localhost = "http://localhost/prototype-wp-wiki";
/*
*********** FETCH TO MEDIAWIKI
*/
app.get("/api/wiki/categories", (req,res)=>{
    const url = localhost + `/wiki/api.php?action=query&list=categorymembers&cmtitle=Category:${req.headers.categorytitle}&format=json`;
    console.log("fetch wiki category url: ", url)
    fetch(url).then( results => results.json())
    .then( json => res.json(json))
    .catch(error => console.log("error fetching from: " + url + ", ", error))
})
  //http://localhost/prototype-wp-wiki/wiki/api.php?action=parse&format=json&page=Main_Page
  app.get("/api/wiki/page", (req,res)=>{
    const url = localhost + `/wiki/api.php?action=parse&format=json&pageid=${req.headers.pageid}`;
    console.log("fetch wiki page url: ", url)
    fetch(url).then( results => results.json())
    .then( json => res.json(json))
    .catch(error => console.log("error fetching from: " + url + ", ", error))
})
/*
*********** FETCH TO WORDPRESS
*/
app.get("/api/wp/pages", (req,res)=>{
    const url = localhost + "/wordpress/wp-json/wp/v2/pages";
    fetch( url).then(results => results.json()).then((json)=>{
        res.json(json)
    }).catch(error => console.log("error fetching from: " + url + ", ", error))
})

app.listen(port, ()=>{
    console.log("listening to port: ", port)
})