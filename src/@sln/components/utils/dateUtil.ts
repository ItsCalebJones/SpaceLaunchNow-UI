const date_builder = function (s:string) : string{

    // getting all of the date things :)
    const date = new Date(s)
    const month = date.toLocaleString('default', { month: 'long' });
    const day = date.getDate()
    const year = date.getFullYear()
    const str_time = date.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    })

    // building date string from date things and returning date string
    const date_string = `${month} ${day}, ${year}, ${str_time}`
    return date_string
}
export default date_builder