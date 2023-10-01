function convert() {
    // Get the parallax value from the input field
    var parallax = parseFloat(document.getElementById('parallax').value);

    // Convert parallax to parsec
    var parsec = 1 / (parallax * 1e-3);

    // Display the result
    document.getElementById('distanceValue').textContent = parsec.toFixed(3) + ' parsec';
}
