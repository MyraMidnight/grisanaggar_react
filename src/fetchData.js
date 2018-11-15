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
      //console.log("list length: ", json.length)
      let newPagesList = [];
      json.forEach((page)=>{
        //console.log("Page: ", page);
        //create new object per page
        const newPage = [];
        newPage["title"] = page.title.rendered;
        newPage["content"] = page.content.rendered;
        //newPage["slug"] = page.slug;
        newPage["description"] = page.excerpt.rendered.replace(/<[^>]+>/g, '');
        newPage["id"] = page.id;
        newPage["parent"] = page.parent;
        newPage["order"] = page.menu_order;

        newPagesList.push(newPage)
      })
      return newPagesList;
    })
}

const wpAuth = ()=>{

}
/* 
================ Fetch Pages from MediaWiki =============
*/
const fetchWikiPages = ()=>{
  //http://localhost/prototype-wp-wiki/wiki/api.php?action=query&list=categorymembers&cmtitle=Category:Pages&format=json
  //http://localhost/prototype-wp-wiki/wiki/api.php?action=parse&format=json&page=Main_Page

     /*const fetchHeader = {
        //method: 'GET',
        //'Access-Control-Request-Method': 'GET',
        //mode: 'cors',
        //credentials: 'include',
        //origin: "http://localhost:3000/",
        //"Access-Control-Allow-Credentials": true,
      headers: {
        //'Access-Control-Allow-Origin': "http://localhost:3000/",
      }
     };*/
    return fetch(apiUrl + "/wiki/categories").then((results)=>{
      console.log("WikiPages: ", results.json())
      return results
    })
}
fetchWikiPages();
/* ============= EXPORT ===*/
const exp = {
    fetchPages: fetchPages,
    fetchWikiPages: fetchWikiPages,
}
module.exports = exp;