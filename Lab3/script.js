console.log("Write ArrayMethod() in the console.")

function ArrayMethod() {
    let names = ["Jacob", "Jeffrey", "Jeremy", "Jason", "Juliet", "Ian", "Machaon", "Ron", "Harry", "Leo", "Alex"];
    
    for (let i=0; i < names.length; i++) {
        if (names[i].toLowerCase().indexOf('j') == 0) {
            let name = "J" + names[i];
            speakGoodBye (name);
       } else {
            let name = names[i];
            speakHello (name);
       }
    }

    console.log("Add N, if 'n' is a last letter ");

    for (let i=0; i < names.length; i++) {
        if (names[i].toLowerCase().charAt(names[i].length - 1) == "n") {
            let name = "N" + names[i];
            speakGoodBye (name);
       } else {
            let name = names[i];
            speakHello (name);
       }
    }
}