const url="	https://api.funtranslations.com/translate/article_rewrite.json";

let inputBtn=document.querySelector('#btn');
let inputText=document.querySelector('#textInput');
let outputText=document.querySelector('#textOutput');

function genrateQueryUrl(input){
    //append argument to url
    return `${url}?text="${encodeURI(input)}"`;
}

function callApi(query){
    //fetch query
    fetch(query)
    .then(response=>response.json())
    //use response to populate output area
    .then(json=> outputText.innerText=json.contents.translated)
    .catch((e)=>alert(`error ${e}`))
}

inputBtn.addEventListener('click', function(){
    //get value from textarea
    var userInput=inputText.value;
    //pass to function for genrating query url
    var finalUrl=genrateQueryUrl(userInput);
    //call fetch
    callApi(finalUrl);

})
