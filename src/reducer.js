const defaultState = {
    currentUser: {}, //is the user logged in? who is it?
    pages:[], //wordpress pages
    currentPage:{//what page to display
        page: 'page-main',
        title: 'Main page',
    }, 
    newsItems: [], //wordpress posts
    wikiItems: [], //mediawiki articles
};

const reducer = (state=defaultState, action)=>{
  console.log("redux actionType: ", action.type)
	switch (action.type) {
		case 'CHANGE_CURRENT_PAGE':
			return {...state, currentPage: action.payload}
		default:
			return state;
	}
}

export default reducer;