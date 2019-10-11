const apiKey = "88ncNKZfn0QYxcy8jBvbyk0KEGogsurGpO1UE9GN";
const myURL = "https://developer.nps.gov/api/v1/parks";


function displayResults(responseJson){
    $('#results-list').empty();
    for (let i = 0; i < responseJson.data.length; i++){
        $('#results-list').append(
            `<li><h3>${responseJson.data[i].fullName}
            <p>${responseJson.data[i].description}</p>
            <a href = "${responseJson.data[i].url}" target = "_blank">Link to website</a>
            </li>`
        );
    }
    $('#results').removeClass('hidden');
}

function getResultsURL(searchTerm, maxResults=10){
    let states = searchTerm.split(" ");
    let queryString = "";
    const params = {
        stateCode: states,
        limit: maxResults,
        api_key: apiKey
    };
    
    for (let i = 0; i < states.length; i++){
        queryString+= `stateCode=${states[i]}&`;
    }
    queryString += `limit=${maxResults}&api_key=${apiKey}`;
    const url = `${myURL}?${queryString}`;
    console.log(url);

    fetch(url).then(response =>{
        if (response.ok){
            return response.json();
        }
        throw new Error(response.statusText);
    })
    .then(responseJson => displayResults(responseJson))
    .catch(err => {
        $('#js-error-message').text(`Something failed: ${err.message}`);
    
    });
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
