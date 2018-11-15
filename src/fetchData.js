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
      //create a custom object to replace original in array
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
const fetchWikiCategory = (categorytitle)=>{
  return fetch(apiUrl + "/wiki/categories", {headers:{categorytitle:categorytitle}}).then(res=>res.json()).then((json)=>{
      const newPagesList = [];
      //since category does not include page content,
      //we need to fetch the page content
      json.query.categorymembers.map((page)=>{
        const newPage = []
        //Fetch the content
        fetch(apiUrl + "/wiki/page", {headers:{pageid: page.pageid}
        }).then(res=>res.json()).then((wikipage)=>{
          //create "content" and then
          //remove all classes from html elements within the content
          newPage["content"] = wikipage.parse.text["*"].replace(/class=".*"/g, "");
        })
        //then create a 'newpage' object to return
        newPage["id"] = page.pageid;
        newPage["title"] = page.title;
        newPagesList.push(newPage);
      })
      //return new array of pages
      return newPagesList
    })
}
/* ============= EXPORT ===*/
const exp = {
    fetchPages: fetchPages,
    fetchWikiCategory: fetchWikiCategory,
}
module.exports = exp;