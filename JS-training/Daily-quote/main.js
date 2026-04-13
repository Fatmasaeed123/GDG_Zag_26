const quote=document.getElementById("quote");
const author=document.getElementById("author")
const api_url ="https://dummyjson.com/quotes/random";

async function getquote(url){
    const response= await fetch(url);
    var data= await response.json();
    console.log(data);
    quote.innerHTML=data.quote;
    author.innerHTML=data.author;
}
getquote(api_url);
function tweetshare(){
    const tweetText = `${quote.innerHTML} — ${author.innerHTML}`;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`, 
    "Tweet Window", "width=600, height=300");
}
function copyQuote() {
    const textToCopy = `${quote.innerHTML} — ${author.innerHTML}`;
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert("The quote has been copied successfully");
    }).catch(err => {
        console.error("ُError", err);
    });
}
