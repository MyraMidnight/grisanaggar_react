const defaultState = {
    currentUser: {}, //is the user logged in? who is it?
	wpDashboard: "http://192.168.2.117/prototype-wp-wiki/wordpress/wp-admin",
    pages:[], //wordpress pages
    wikiPages: [], //mediawiki articles
    currentPage:{//what page to display
        page: 'wiki',
		data: {},
    }, 
	newsItems: [], //wordpress posts
	wikiCategories: [],
	headerLinks: [{
			component: "Wiki",
			path: "/wiki",
			link: "Wiki",
			title: "Grísanaggar Wiki",
		},{
			component: "WpPages",
			path: "/pages",
			link: "Ýmislegt",
			title: "Ýmislegt",
		},{
			component: "Dashboard",
			path: "/dashboard",
			link: "Dashboard",
			title: "Stjórnborð",
		}
	]
};

const reducer = (state=defaultState, action)=>{
  console.log("redux actionType: ", action.type)
	switch (action.type) {
		case 'CHANGE_CURRENT_PAGE':
			return {...state, currentPage: action.payload};
		case 'UPDATE_CURRENT_USER':
			return {...state, currentUser: action.payload};
		case 'UPDATE_NEWS':
			return {...state, newsItems: action.payload};
        case 'GET_WIKI_PAGES':
            return {...state, wikiPages: action.payload};
		case 'GET_WIKI_CATEGORIES':
			return {...state, wikiCategories: action.payload};
		case 'GET_PAGES':
			return {...state, pages: action.payload};
		default:
			return state;
	}
}

export default reducer;