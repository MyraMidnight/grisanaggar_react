const actionTypes = {
//	USER_LOGGED_IN: 'USER_LOGGED_IN',
    CHANGE_CURRENT_PAGE: 'CHANGE_CURRENT_PAGE'
}
//CHANGE_CURRENT_PAGE
export const changeCurrentPage = (page)=>{
    return {type: actionTypes.CHANGE_CURRENT_PAGE, payload:page}
}