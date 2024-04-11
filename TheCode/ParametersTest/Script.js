var Name;

function AlertPrompt() {
    Name = prompt("Whats Your Name", "Nigger??");
    document.getElementById("ConsoleTrick").style.visibility = "visible";
    document.getElementById("AlertPrompt").style.visibility = "hidden";
}


function ConsoleTrick() {
    alert("Dont look into the console");

    setInterval(
        function ParameterTest(test1, test2) {
            console.log("Told you " + ", " + test1)
            console.log("Bruh I warned you" + ", " + test2)
            document.getElementById("ParameterTestDiv").innerHTML = ParameterTest(Name, Name); // Aurgument
        }, 5000);
}

