
const apiUrl = "http://localhost:3001/api";
const wpUrl = "https://grisanaggar.myramidnight.com/wp";
/* ============================================================================
 GENERAL  
============================================================================*/


/* ============================================================================
 WORDPRESS 
============================================================================*/
// https://github.com/WP-API/Basic-Auth
// http://wp-api.org/node-wpapi/

const WPAPI = require('wpapi');
const wp = new WPAPI({ endpoint: wpUrl + '/wp-json' })

/*===================== Fetch pages */
const fetchPages = ()=>{
  return wp.pages().then((json)=>{
    const newPagesList = [];
    //create a custom object to replace original in array
    json.forEach((page)=>{
      //create new object per page
      const newPage = [];
      newPage["type"] = "page";
      newPage["title"] = page.title.rendered;
      newPage["content"] = page.content.rendered;
      newPage["id"] = page.id;
      //get the featured media image of post
      wp.media().then((media)=>{
        const mediaFile = media.find(file=>file.id === page.featured_media).source_url;
        newPage["image"] = mediaFile;
        return mediaFile
      });
      newPagesList.push(newPage)
    })
    return newPagesList;
  }).catch(err=>console.log("ERROR fetching from Wordpress", err))
}

/*===================== Fetch categories  */
const wpCategory = ()=>{
  return wp.pages().then((json)=>{
    const newPagesList = [];
    //create a custom object to replace original in array
    json.forEach((page)=>{
      //create new object per page
      const newPage = [];
      newPage["type"] = "page";
      newPage["title"] = page.title.rendered;
      newPage["content"] = page.content.rendered;
      newPage["id"] = page.id;
      //get the featured media image of post
      wp.media().then((media)=>{
        let mediaFile = null
        if (media != null ) {
          mediaFile = media.find(file=>file.id === page.featured_media).source_url;
        } 
        newPage["image"] = mediaFile;
        return mediaFile
      });
      newPagesList.push(newPage)
    })
    return {category: "pages", pages: newPagesList};
  }).catch(err=>console.log("ERROR fetching from Wordpress", err))
}
/*===================== Authentication */
//https://aamplugin.com/help/how-to-authenticate-wordpress-user-with-jwt-token
//added AAM plugin to manage access
// password for test account, grisanaggar : zNBf((ZGh2m&RwQswAipYaJl
const wpAuthenticate = (username, password)=>{
  const apiFetchHeader = {
    headers:{
      username:username,
      password: password,
    }
  };
  console.log("authenticating...")
  return fetch(apiUrl + "/wp/authenticate", apiFetchHeader).then((site)=>{ console.log("Authentication success")})
}
//Fetch a session token from wordpress
const wpToken = (username, password)=>{
  const apiFetchHeader = {
    headers:{
      username:username,
      password: password,
    }
  };
  return fetch(apiUrl + "/wp/token", apiFetchHeader ).then((token)=>{
    console.log("Recieved token: ", token)
  })
}

/* ============================================================================
 MEDIAWIKI 
============================================================================*/
const wikiCategory = (categorytitle)=>{
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
    if(json.query.categorymembers.lenght !== 0){
      /* ========== IF CATEGORY HAS PAGES ========== */
      json.query.categorymembers.map((page)=>{
        const newPage = [];
        newPage["id"] = page.pageid;
        newPage["title"] = page.title;
        newPage["type"] = "wiki";
        //Fetch the content of each page
        fetch(apiUrl + "/wiki/page", {headers:{pageid: page.pageid}
        }).then(res=>res.json()).then((wikipage)=>{
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
    }    
    return newPagesList
  })
}

const wikiCategories = (categoriesList)=>{
  //"categoriesList" is a array with names of categories
  const myPromise = new Promise((resolve, reject)=>{
    //Start by fetching list of all wiki categories (names only)
    fetch(apiUrl + "/wiki/allcategories").then(res=>res.json()).then((query)=>{          
      //return only array of valid category names
      const newArray = []
      query.query.allcategories.forEach((item)=>{
        newArray.push(item["*"])
      })
      return newArray
    }).then((categories)=>{
      const groupCategories=[]
      //check if each category exists
      categoriesList.forEach((category)=>{
        if(categories.includes(category)===true){
          /* ========== IF CATEGORY EXISTS ========== */
          //fetch each page for this category
          wikiCategory(category).then((results)=>{            
            //create object for each category with pages
            const newCategory = {
              title: category,
              pages: results
            }
            groupCategories.push(newCategory);
          })
        } else {
          console.log( '"'+ category + '" is not an existing wiki category ')
        }
      })
      //resolve with the compiled category list
      resolve(groupCategories)
    }).catch(error => console.log("Failed to fetch wiki categories"))
  })
  return myPromise
}
/* ============= EXPORT ===*/
const exp = {
    //MediaWiki
    wikiCategory: wikiCategory,
    wikiCategories: wikiCategories, //fetch wiki pages under category
    //WordPress
    wpPages: fetchPages,
    wpAuthenticate: wpAuthenticate, //authenticate wordpress user single time
    wpToken: wpToken, // cookie token to varify login
    wpCategory: wpCategory
}
module.exports = exp;