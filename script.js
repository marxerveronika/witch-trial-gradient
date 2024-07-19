document.getElementById('decade-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const decade = document.getElementById('decade-input').value;
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const deaths = data[decade];
            if (deaths) {
                updateGradient(deaths);
            } else {
                alert('No data available for this decade.');
            }
        });
});

function updateGradient(deaths) {
    const maxDeaths = 10000; // Adjust based on your data's max value
    const gradientValue = Math.min(deaths / maxDeaths, 1);
    const colorStart = `rgba(230, 100, 101, ${gradientValue})`;
    const colorEnd = `rgba(145, 152, 229, ${gradientValue})`;
    document.querySelector('.container').style.background = `linear-gradient(to right, ${colorStart}, ${colorEnd})`;
}
