/* 
================ WORDPRESS =============
*/
const apiUrl = "http://localhost:3001/api";
const wpHeader = {
    credentials: 'same-origin'
}
//Fetch pages
const fetchPages = ()=>{
    return fetch(apiUrl+"/wp/pages", wpHeader).then(res=>res.json()).then((json)=>{
      const newPagesList = [];
      json.forEach((page)=>{
        //create new object per page
        const newPage = [];
        newPage["title"] = page.title.rendered;
        newPage["content"] = page.content.rendered;
        newPage["id"] = page.id;

        newPagesList.push(newPage)
      })
      return newPagesList;
    })
}

/* 
================ Fetch Pages from MediaWiki =============
*/
const fetchWikiPages = ()=>{
  return fetch(apiUrl + "/wiki/categories").then(res=>res.json()).then((json)=>{
      const newPagesList = [];
      json.query.categorymembers.map((page)=>{
        const newPage = []
        //after getting list of pages
        //Fetch the content for wiki page
        fetch(apiUrl + "/wiki/page", {headers:{pageid: page.pageid}
        }).then(res=>res.json()).then((wikipage)=>{
          //remove all classes from html elements within the content
          newPage["content"] = wikipage.parse.text["*"].replace(/class=".*"/g, "");
        })
        //then create a 'newpage' object to return
        newPage["id"] = page.pageid;
        newPage["title"] = page.title;
        newPagesList.push(newPage);
        console.log("newPage: ", newPage)
      })
      /*
      json.query.categorymembers.forEach((page)=>{
        const newPage = [];
        //create new object per page
        newPage["title"] = page.title;
       //newPage["content"] = page.content.rendered;
        newPage["id"] = page.pageid;
        fetch(apiUrl + "/wiki/page", {headers:{pageid:page.pageid},}).then(res=>res.json()).then((wikipage)=>{
          //newPage["content"] = wikipage.content;
        }).then(end=>newPagesList.push(newPage))
        
      })*/
      return newPagesList
    })
}
/* ============= EXPORT ===*/
const exp = {
    fetchPages: fetchPages,
    fetchWikiPages: fetchWikiPages,
}
module.exports = exp;