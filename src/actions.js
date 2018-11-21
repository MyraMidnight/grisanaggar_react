const actionTypes = {
//	USER_LOGGED_IN: 'USER_LOGGED_IN',
    CHANGE_CURRENT_PAGE: 'CHANGE_CURRENT_PAGE',
    UPDATE_CURRENT_USER: 'UPDATE_CURRENT_USER',
    GET_WIKI_PAGES: 'GET_WIKI_PAGES',
    GET_PAGES: 'GET_PAGES',
    GET_WIKI_CATEGORIES: 'GET_WIKI_CATEGORIES',
    GET_WP_CATEGORIES: 'GET_WP_CATEGORIES',
    UPDATE_HEADER_IMAGE: 'UPDATE_HEADER_IMAGE',

}
//CHANGE_CURRENT_PAGE
export const changeCurrentPage = (page)=>{
    return {type: actionTypes.CHANGE_CURRENT_PAGE, payload:page}
}
//UPDATE_CURRENT_USER
export const updateCurrentUser = (user)=>{
    return {type: actionTypes.UPDATE_CURRENT_USER, payload:user}
}
//GET_PAGES
export const getPages = (pages)=>{
    return {type: actionTypes.GET_PAGES, payload:pages}
}
//GET_WIKI_PAGES
export const getWikiPages = (pages)=>{
    return {type: actionTypes.GET_WIKI_PAGES, payload:pages}
}
//GET_WIKI_PAGES
export const getWikiCategories = (categories)=>{
    return {type: actionTypes.GET_WIKI_CATEGORIES, payload:categories}
}
//GET_WP_CATEGORIES
export const getWpCategories = (categories)=>{
    return {type: actionTypes.GET_WP_CATEGORIES, payload:categories}
}
//UPDATE_HEADER_IMAGE
export const updateHeaderImage = (imageUrl)=>{
    return {type: actionTypes.UPDATE_HEADER_IMAGE, payload:imageUrl}
}