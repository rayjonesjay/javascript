// const dataSet = "qqq http://qqqqq q qqqqq https://something.com/hello qqqqqqq qhttp://example.com/hello?something=youanother=one";
// get all valid urls
function getURL(dataSet){
  const urlREGEX = /https?:\/\/\S+/g; // match urls
  return dataSet.match(urlREGEX) || []
}
function greedyQuery(dataSet){
  const urls = getURL(dataSet);
  return  urls.filter(url => {
    // split the url into two parts , base and query
    const queryString = url.split('?')[1];

    // if not query strings have been found return false
    if (!queryString) return false;

    // split the query string into individual query parameters, since the query
    // parameters are separated by '&' symbol, using the split() method
    const queryParameters = queryString.split('&')

    // queryParameters is an array containing the found query parameters found in the
    // query string, and if length of the array is at least 3 then return true.
    return queryParameters.length >= 3;
  });
}
function notSoGreedy(dataSet){
  // get the valid urls from the given list of urls
  const urls = getURL(dataSet)

  const filtered = urls.filter(url => {
    // split the url in order to get the string before(scheme) and after ? which denotes start of query string
    const [, queryString] = url.split('?')
    // if not query string was found then we return false to indicate that the url passed did not contain the query string
    if (!queryString) return false;
    // extract the query parameters which are separated by '&' symbols
    const queryParameters = queryString.split('&')
    return (queryParameters.length > 1 && queryParameters.length <= 3);
  })
return filtered
}
// console.log(notSoGreedy(dataSet))
// console.log(greedyQuery(dataSet))
// console.log(getURL(dataSet))