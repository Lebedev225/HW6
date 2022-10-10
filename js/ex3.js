const yellowBold = () => {
    const paragraph = document.querySelectorAll("p")
    for (let i = 0; i <= paragraph.length; i++) {
        paragraph[i].style.background = "yellow";
        paragraph[i].style.fontWeight = "bold";
    }
}

yellowBold();

