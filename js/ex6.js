const words = [{
    term: "Procrastination",
    definition: "Avoidance of doing a task that needs to be accomplished"
}, {
    term: "Tautology",
    definition: "logical argument constructed in such a way that it is logically irrefutable"
}, {
    term: "Oxymoron",
    definition: "figure of speech that juxtaposes elements that appear to be contradictory"
}];




let list = document.createElement("dl"); 
for (let i = 0; i < words.length; i++) {
    let definition = document.createElement("dt");
    let strong = document.createElement("strong");
    let definitionText = document.createTextNode(words[i].term);
    strong.appendChild(definitionText);
    definition.appendChild(strong);
    list.appendChild(definition)

    let description = document.createElement("dd");
    let decsriptionText = document.createTextNode(words[i].definition);
    description.appendChild(decsriptionText);
    list.appendChild(description)

}


let content = document.getElementById("content");
content.appendChild(list)

