const searchBar = document.querySelector(".search-input");

searchBar.addEventListener("input", function(){
    const contentUser = document.querySelectorAll(".piu-content-outside");
    if(searchBar.value.length > 0) {
        for (let i = 0; i < contentUser.length; i++) {
        let userPiu = contentUser[i];

        let name = userPiu.querySelector(".piu-name-username");
        let text = name.textContent;

        let expression = new RegExp(searchBar.value,"i");
        if (!expression.test(text)) {
            userPiu.classList.add("invisible-content");
        }
        else {
            userPiu.classList.remove("invisible-content");
        }}
    } else {
        contentUser.forEach((item) => {
            item.classList.remove("invisible-content");
        })
    }
});

const inputTextArea = document.querySelector("#piu-input-textarea");
const characRemaining = document.querySelector(".character-counting");
const maxCharac = 140;

inputTextArea.addEventListener("input", () => {
    let characCount = inputTextArea.value.length;
    (characCount > maxCharac) && characRemaining.classList.add("error-message");
    (characCount <= maxCharac) && characRemaining.classList.remove("error-message");
    characRemaining.textContent = `${characCount}/${maxCharac}`;
});

const handleFavorite = () => {
    const favImage = document.querySelectorAll(".btnFavorite");
    favImage.forEach((item) => {
        item.addEventListener("click", (event) => {
            let counterDiv = item.parentNode.children[1];
            let counterValue = parseInt(counterDiv.textContent);
            item.classList.contains("toggleOff")
            ? (item.classList.remove("toggleOff"), item.src="images/Favorite.svg", counterDiv.textContent = --counterValue)
            : (item.classList.add("toggleOff"), item.src="images/Favorite_full.svg", counterDiv.textContent = ++counterValue);
        });
    });
}

const handleFavoriteInput = () => {
    const favImage = document.querySelector(".btnFavorite");
    favImage.addEventListener("click", (event) => {
        let counterDiv = favImage.parentNode.children[1];
        let counterValue = parseInt(counterDiv.textContent);
        favImage.classList.contains("toggleOff")
        ? (favImage.classList.remove("toggleOff"), favImage.src="images/Favorite.svg", counterDiv.textContent = --counterValue)
        : (favImage.classList.add("toggleOff"), favImage.src="images/Favorite_full.svg", counterDiv.textContent = ++counterValue);
    });
}

const handleBookmark = () => {
    const bookImage = document.querySelectorAll(".btnBookmark");
    const feedDiv = document.querySelector(".timeline-content");
    bookImage.forEach((item) => {
        item.addEventListener("click", (event) => {
            let outsideDiv = item.parentNode.parentNode;
            if (!item.classList.contains("toggleOff")) {
                item.src="images/Bookmark_full.svg";
                item.classList.add("toggleOff");
                feedDiv.insertBefore(outsideDiv, feedDiv.firstChild);
            }
            else {
                item.src="images/Bookmark.svg";
                item.classList.remove("toggleOff");
            }
        });
    });
}

const handleBookmarkInput = () => {
    const bookImage = document.querySelector(".btnBookmark");
    const feedDiv = document.querySelector(".timeline-content");
    bookImage.addEventListener("click", (event) => {
        let outsideDiv = bookImage.parentNode.parentNode;
        if (!bookImage.classList.contains("toggleOff")) {
            bookImage.src="images/Bookmark_full.svg";
            bookImage.classList.add("toggleOff");
            feedDiv.insertBefore(outsideDiv, feedDiv.firstChild);
        }
        else {
            bookImage.src="images/Bookmark.svg";
            bookImage.classList.remove("toggleOff");
        }
    });
}