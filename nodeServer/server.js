
const express = require('express');
const app = express();
const fetch = require('node-fetch');
const cors = require('cors');
const port=3001;

app.use(cors());
app.use(express.json());


const localhost = "http://192.168.2.117/prototype-wp-wiki";

/* ============================================================================
 MEDIAWIKI 
============================================================================*/
app.get("/api/wiki/categories", (req,res)=>{
    //https://www.mediawiki.org/wiki/API:Categorymembers
    const url = localhost + `/wiki/api.php?action=query&list=categorymembers&cmtitle=Category:${req.headers.categorytitle}&format=json`;
    console.log("fetch wiki category url: ", url)
    fetch(url).then( results => results.json())
    .then( json => res.json(json))
    .catch(error => console.log("error fetching from: " + url + ", ", error))
})
  //https://www.mediawiki.org/wiki/API:Parsing_wikitext
app.get("/api/wiki/page", (req,res)=>{
    const url = localhost + `/wiki/api.php?action=parse&format=json&pageid=${req.headers.pageid}`;
    console.log("fetch wiki page url: ", url)
    fetch(url).then( results => results.json())
    .then( json => res.json(json))
    .catch(error => console.log("error fetching from: " + url + ", ", error))
})
//https://www.mediawiki.org/wiki/API:Allcategories
app.get("/api/wiki/allcategories", (req,res)=>{
    const url = localhost + `/wiki/api.php?action=query&format=json&list=allcategories`;
    console.log("fetch wiki page url: ", url)
    fetch(url).then( results => results.json())
    .then( json => res.json(json))
    .catch(error => console.log("error fetching from: " + url + ", ", error))
})

/* ============================================================================
 WORDPRESS 
============================================================================*/
// https://github.com/WP-API/Basic-Auth
// http://wp-api.org/node-wpapi/
//  http://v2.wp-api.org/reference/pages/
const wpJson = localhost + '/wordpress/wp-json';
const WPAPI = require('wpapi');
const wp = new WPAPI({ endpoint: wpJson });

/*=====================  Get JWT token from AAM plugin */
app.get("/api/wp/token", (req, res)=>{
    const apiHeader = {
        method: "POST",
        body: JSON.stringify({
            username: req.headers.username,
            password: req.headers.password,
        }),
        headers: {
            "Accept": "application/json; charset=utf-8",
            "Cache-Control": "no-cache",
            "Content-Type" :"application/json",
        }
    }
    fetch(wpJson + '/aam/v1/authenticate', apiHeader).then((token)=>{
        console.log("token: ", token)
        return token
    })
})

/*===================== Fetch posts */
app.get("/api/wp/pages", (req,res)=>{
    const url = wpJson + `/wp/v2/pages?per_page=${req.headers.per_page}`;
    wp.pages().then((pages)=>{
        console.log("wp pages: ", pages)
        res.json(pages)
    }).catch(error => console.log("error fetching from: " + url + ", ", error))
})

/*===================== Authentication */
app.get("/api/wp/authenticate", (req, res)=>{
    //Authenticate the user
    const apiPromise = new WPAPI({
        endpoint: localhost + '/wordpress/wp-json',
        username: req.headers.username,
        password: req.headers.password,
    })
    return apiPromise
})
/* ============================================================================
 LISTENING TO PORT... 
============================================================================*/

app.listen(port, ()=>{
    console.log("listening to port: ", port)
})