/* 
================ WORDPRESS =============
*/
const apiUrl = "http://localhost:3001/api";
//Fetch pages
const fetchPages = ()=>{
  const apiFetchHeader = {
    headers:{
      //what category to fetch
      per_page:50,
    }
  };
  //todo: group pages by parent
  return fetch(apiUrl+"/wp/pages", apiFetchHeader).then(res=>res.json()).then((json)=>{
    const newPagesList = [];
    //create a custom object to replace original in array
    json.forEach((page)=>{
      //create new object per page
      const newPage = [];
      newPage["title"] = page.title.rendered;
      newPage["content"] = page.content.rendered;
      newPage["id"] = page.id;
      newPage["parent"] = "parent_" + page.parent;
      newPagesList.push(newPage)
    })
    return newPagesList;
  })/*.then((pageList)=>{
    const groupParents = pageList.groupBy('parent');
    //console.log("parents: ", groupParents)
    return groupParents
  })*/
}

/* 
================ Fetch Pages from MediaWiki =============
*/
const fetchWikiCategory = (categorytitle)=>{
  const apiFetchHeader = {
    headers:{
      //what category to fetch
      categorytitle:categorytitle,
    }
  };
  return fetch(apiUrl + "/wiki/categories", apiFetchHeader ).then(res=>res.json()).then((json)=>{
    const newPagesList = [];
    //since category does not include page content,
    //we need to fetch the page content
    json.query.categorymembers.map((page)=>{
      const newPage = [];
      newPage["id"] = page.pageid;
      newPage["title"] = page.title;
      //Fetch the content
      fetch(apiUrl + "/wiki/page", {headers:{pageid: page.pageid}
      }).then(res=>res.json()).then((wikipage)=>{
        //create "content" and then
        newPage["content"] = wikipage.parse.text["*"]
          //https://alligator.io/js/string-replace/
          //remove [edit] links from content 
          .replace(/<span class="mw-editsection".*]<\/span><\/span>/g,"")
          //replace 'Contents' navigation title
          .replace(/<h2>Contents<\/h2>/,"<h2>Page contents</h2>")
          //then remove all classes from the remaining html elements
          //.replace(/class=".*."/g, "") //it removes all links too... 
      })
      //then create a 'newpage' object to return
      return newPagesList.push(newPage);
    })
    //return new array of pages
    return newPagesList
  })
}
const fetchWikiCategories = (categories)=>{
  const myPromise = new Promise((resolve, reject)=>{
    //categories will be put into this object
    const groupCategories=[];
    //go through the array of listed categories
    categories.forEach((category)=>{
      fetchWikiCategory(category).then((results)=>{
        //create object for each category with pages
        const newCategory = {
          category: category,
          pages: results
        }
        groupCategories.push(newCategory);
      })
    })
    resolve(groupCategories)
  })
  return myPromise
  
}
/* ============= EXPORT ===*/
const exp = {
    fetchPages: fetchPages,
    fetchWikiCategory: fetchWikiCategory,
    fetchWikiCategories: fetchWikiCategories,
}
module.exports = exp;