var arraywithnames = ["Péter", "Ferenc", "Viktor", "Klára", "Gergely"]

arraywithnames.forEach(namesLoop)

function namesLoop(dataarray) {
    if (dataarray === "Péter") {
        $("ul").append("<li class='myname'>" + dataarray + "</li>")
        $(".myname").css("font-weight", "bold")
    } else {
        $("ul").append("<li>" + dataarray + "</li>")
    }
}

var additionalblock = {
    title: "Beillesztve JavaScripttel",
    text: "Ez a blokk a JavaScript jQuery könyvtárával lett beillesztve. Király!"
}

$("body").append("<h1>" + additionalblock.title + "</h1>")

$("body").append("<p>" + additionalblock.text + "</p>")

var additionalcontent = {
    title: "Listák és szövegek",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus pellentesque eu tincidunt tortor."
}

$("body").append("<p>" + additionalcontent.text  + "</p>")

$("body").append("<h1>" + additionalcontent.title + "</h1>")