export function GetLS(name) {
    const value = JSON.parse(localStorage.getItem(name));

    if (value) {
        return(value)
    } else {
        return(false)
    } 
}
