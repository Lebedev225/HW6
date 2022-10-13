const addCba = () => {
    let cbaLink = document.createElement("a"); // Create an "a" element
    cbaLink.id = "cba"; // Define element ID
    cbaLink.textContent = "College of Business"; // Define its text content
    cbaLink.href = "https://www.csulb.edu/college-of-business"
    
    let cbaListItem = document.createElement("li");
    cbaListItem.appendChild(cbaLink)
    document.getElementById("links").insertBefore(cbaListItem, document.getElementById("is"));
}

addCba();
