// Function to handle Enter key press
function handleEnterKey(event) {
    if (event.key === 'Enter') {
        plxconvert();
        rmM();
    }
}

// Add an event listener to the input field
document.getElementById('parallax').addEventListener('keypress', handleEnterKey);
    
function plxconvert() {
    // Get the parallax value from the input field
    var parallax = parseFloat(document.getElementById('parallax').value);

    // Convert parallax to parsec
    var parsec = 1 / (parallax * 1e-3);

    // Display the result
    document.getElementById('distanceValue').textContent = parsec.toFixed(3) + ' parsec';
}


function rmM(){
    var m = parseFloat(document.getElementById('m').value);
    var M = parseFloat(document.getElementById('M').value);

    var r = (m-M)/5;
    // Calculate the value of r (assuming it's already calculated)
    var r = 10 * 10 ** r;

    // Convert r to scientific notation
    var scientificNotation = r.toExponential();

    // Split the scientific notation using the "e" character
    var parts = scientificNotation.split(/(e)/);

    // Create the HTML content
    var numpart = parts[0].slice(0,5);
    var exppart = parts[2];
    // Remove the plus sign from exppart if it's positive
    if (exppart[0] === '+') {
        exppart = exppart.substring(1); // Remove the first character
    }
    var htmlConten1 = '= '+numpart + ' &times; 10<sup>' + exppart + '</sup>';

    // Convert r to scientific notation
    r = r*206265
    var scientificNotation = r.toExponential();

    // Split the scientific notation using the "e" character
    var parts = scientificNotation.split(/(e)/);

    // Create the HTML content
    var numpart = parts[0].slice(0,5);
    var exppart = parts[2];
    // Remove the plus sign from exppart if it's positive
    if (exppart[0] === '+') {
        exppart = exppart.substring(1); // Remove the first character
    }
    var htmlConten2 = '= '+numpart + ' &times; 10<sup>' + exppart + '</sup>';

    // Set the HTML content to the 'dist' element
    document.getElementById('dist').innerHTML = '<br>'+ htmlConten1+'parsec <br>'+htmlConten2+'AU';
}