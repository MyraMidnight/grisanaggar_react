export const groupBy = (prop)=>{
    //https://www.consolelog.io/group-by-in-javascript/
    Array.prototype.groupBy = ()=> {
        return this.reduce(function(groups, item) {
        const val = item[prop]
        groups[val] = groups[val] || []
        groups[val].push(item)
        return groups
        }, {})
    }
} 