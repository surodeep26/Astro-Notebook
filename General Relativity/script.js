const ctx = document.getElementById('blackbody-chart').getContext('2d');
const h = 6.62607004e-34; // Planck's constant (Joule seconds)
const c = 3e8; // Speed of light (m/s)
const kB = 1.38064852e-23; // Boltzmann constant (Joules per Kelvin)

let temperatureInput = document.getElementById('temperature');

// Initialize the chart with some default data
let chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Blackbody Spectrum',
            data: [],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            x: {
                type: 'linear',
                position: 'bottom',
                title: {
                    display: true,
                    text: 'Wavemlength (nm)'
                }
            },
            y: {
                type: 'linear',
                position: 'left',
                title: {
                    display: true,
                    text: 'Intensity (Arbitrary Units)'
                }
            }
        }
    }
});

// Function to calculate Planck's law for a given wavelength, temperature, and frequency
function calculatePlanck(wavelength, temperature) {
    const frequency = c / (wavelength * 1e-9); // Convert wavelength to meters and calculate frequency
    const numerator = 8 * Math.PI * h * Math.pow(frequency, 3);
    const exponent = h * frequency / (kB * temperature);
    const denominator = Math.exp(exponent) - 1;

    return numerator / (Math.pow(c, 3) * denominator);
}

// Function to update the chart with new data based on temperature
function updateChart(temperature) {
    const data = [];
    for (let wavelength = 1; wavelength <= 3000; wavelength += 50) {
        const intensity = calculatePlanck(wavelength, temperature);
        data.push({ x: wavelength, y: intensity });
    }

    chart.data.datasets[0].data = data;
    chart.update();
}

// Add an event listener to update the chart when the user changes the temperature
temperatureInput.addEventListener('input', (event) => {
    const newTemperature = parseFloat(event.target.value);
    updateChart(newTemperature);
});

// Initial chart update with the default temperature
updateChart(parseFloat(temperatureInput.value));
