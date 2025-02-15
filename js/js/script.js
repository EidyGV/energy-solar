
function calcularAhorro() {
    const consumo = parseFloat(document.getElementById("energia").value);
    
    if (isNaN(consumo) || consumo <= 0) {
        alert("Por favor, ingresa un valor válido de consumo.");
        return;
    }

    const ahorro = consumo * 0.3; // Suponiendo un ahorro del 30% validar cuento es el ahorro 
    const consumoConSolar = consumo - ahorro;

    document.getElementById("resultado").innerText = `Podrías ahorrar aproximadamente ${ahorro.toFixed(2)} kWh al mes con energía solar.`;

    // Datos para el gráfico
    const data = {
        labels: ['Consumo Actual', 'Consumo con Energía Solar'],
        datasets: [{
            label: 'Consumo de Energía (kWh)',
            data: [consumo, consumoConSolar],
            backgroundColor: ['#007bff', '#28a745'] // Azul para actual, verde para solar
        }]
    };

    // Configuración del gráfico
    const config = {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Comparación de Consumo de Energía'
                }
            }
        },
    };

    // Renderizar el gráfico
    const ctx = document.getElementById('energyChart').getContext('2d');
    new Chart(ctx, config);
}
