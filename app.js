var click = document.querySelector('#translate')
var input = document.querySelector('#input')
var output = document.querySelector('#output')

function urlConst(text){
    return 'https://api.funtranslations.com/translate/minion.json?text='+text
}
function errorHandle(error){
    console.log('Error occurred: '+error)
    alert('Oops! Server Probs :(\nTry again after some time.')
}
function clickEventHandler(){
    fetch(urlConst(input.value)).then(Response => Response.json()).then(json => output.innerText = (json.contents.translated)).catch(errorHandle)
    
}
click.addEventListener('click', clickEventHandler);