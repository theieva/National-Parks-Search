const apiKey = "88ncNKZfn0QYxcy8jBvbyk0KEGogsurGpO1UE9GN";
const myURL = "https://developer.nps.gov/api/v1/parks";

function getResultsURL(){

}

function watchForm(){
    console.log("watchForm ran");
    $('#myForm').submit(event =>{
        event.preventDefault();
        const searchTerm = $('#search-term').val();
        const maxResults = $('#max-results').val();
        getResultsURL(searchTerm, maxResults);
    })
}
    

$(watchForm);
