const cors = require('cors');
const express = require('express');
const app = express();

const port = 3001;

app.use(cors());
app.use(express.json());

app.get('/pages', (apiRes,apiReq)=>{
    apiRes.send(wp_pages())
})


const wp_pages = ()=>{
    const projectsURL = "http://localhost/prototype-wp-wiki/wordpress/wp-json/wp/v2/pages";
    fetch( ).then(res=>res.json()).then((json)=>{
      //console.log("list length: ", json.length)
      let newPagesList = [];
      json.forEach((page)=>{
        //console.log("Page: ", page);
        //create new object per page
        const newPage = [];
        newPage["title"] = page.title.rendered;
        newPage["content"] = page.content.rendered;
        newPage["slug"] = page.slug;
        newPage["description"] = page.excerpt.rendered.replace(/<[^>]+>/g, '');
        newPage["id"] = page.id;
        newPage["parent"] = page.parent;
        newPage["order"] = page.menu_order;

        wp_pages.push(newPage)
      })
      return newPagesList;
    })
}

app.listen(port, ()=>{
    console.log("listening to port: ", port)
})