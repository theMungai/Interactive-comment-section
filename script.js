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
const textArea = document.querySelectorAll(".js-textarea");

textArea.forEach((typingField) => {
    typingField.addEventListener("input", () => {
        typingField.style.height = "auto";
        typingField.style.height = (typingField.scrollHeight) + 'px'
    });
})



// Showing reply section
const replyingField = document.querySelector(".replying-container");
const openReplyButton = document.querySelector(".open-reply");

openReplyButton.addEventListener("click", () => {
    replyingField.style.display = "block"
});


// Modifying vote counts

const voteCount = document.querySelectorAll('.js-vote-count');
const plusVote = document.querySelectorAll(".js-plus-vote");
const minusVote = document.querySelectorAll(".js-minus-vote");


plusVote.forEach((addVote) => {
    addVote.addEventListener("click", () => {
        let count = 12
        voteCount.forEach((vote) => {
            count = count + 1;
            vote.textContent = count;
            addVote.disabled = true;
        })
        
    });
})

minusVote.forEach((reduceVote) => {
    reduceVote.addEventListener("click", () => {
        let count = 12
        voteCount.forEach((vote) => {
            count = count - 1;
            vote.textContent = count;
            reduceVote.disabled = true;
        })
        
    });
})




// ======== Delete alert modal ===========
const deleteAlert = document.querySelector(".delete-comment-alert");
const deleteCommentButton = document.querySelector(".delete");
const confirmDeleteButton = document.querySelector(".yes-delete");
const cancelDeleteButton = document.querySelector(".cancel")

deleteCommentButton.addEventListener("click", () => {
    deleteAlert.style.display = "block"
});

cancelDeleteButton.addEventListener("click", () => {
    deleteAlert.style.display = "none"
})