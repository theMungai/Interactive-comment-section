// Fetching data from data.json file
// SYNTAX : fetch().then().then().catch()

function fetchJSONData(){
    fetch("./data.json")
    .then((res) => {
        if(!res.ok){
            throw new Error(`HTTP error! Status : ${res.status}`)
        }
        return res.json();
    })

    .then((data) =>
    console.log(data))
    .catch((error) =>
    console.error("Unable to fetch data", error))
}
fetchJSONData()

// Adjusting height of a text area as a user keeps on typing
const textArea = document.querySelector(".first-reply");

textArea.addEventListener("input", () => {
    textArea.style.height = "auto";
    textArea.style.height = (textArea.scrollHeight) + 'px'
});


// Showing reply section

const replyingField = document.querySelector(".replying-container");
const openReplyButton = document.querySelector(".open-reply");

openReplyButton.addEventListener("click", () => {
    replyingField.style.display = "block"
})


