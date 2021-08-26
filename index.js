 
 function myFunction() {
    var x = document.getElementById("myText").name;
    document.getElementById("demo").innerHTML = x;
  }

function getInputValue(){
    // Selecting the input element and get its value 
    let inputVal = document.getElementById("myInput").value;
    
    // Displaying the value
    alert(inputVal);
    /* document.createElement("ul")
    document.createElement("li").appendChild("ul").addEventListener() */
    let employees = [];

    for (let i = 0; i < 10; i++) {
        employees.push(inputVal({
            Column1: 'column 1 of emp' + i,
            Column2: 'column 1 of emp' + i
        }))
       // employees.push(inputVal)
    }
    console.log(employees)

}




function addFields(){
    // Number of inputs to create
    var number = document.getElementById("member").value;
    // Container <div> where dynamic content will be placed
    var container = document.getElementById("container");
    // Clear previous contents of the container
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
    for (i=0;i<number;i++){
        // Append a node with a random text
        container.appendChild(document.createTextNode("Member " + (i+1)));
        // Create an <input> element, set its type and name attributes
        var input = document.createElement("input");
        input.type = "text";
        input.name = "member" + i;
        container.appendChild(input);
        // Append a line break 
        container.appendChild(document.createElement("br"));
    }
}
    