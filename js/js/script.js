
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
// esta es otra calculadora 

//<script type="text/javascript">
        function calcularCeldasSolares() {
            var consumoMes1 = parseFloat(document.getElementById("mes1").value);
            var consumoMes2 = parseFloat(document.getElementById("mes2").value);
            var consumoMes3 = parseFloat(document.getElementById("mes3").value);
            var consumoMes4 = parseFloat(document.getElementById("mes4").value);
            var consumoMes5 = parseFloat(document.getElementById("mes5").value);
            var tipoCelda = document.getElementById("tipoCelda").value;

            var consumoPromedioMensual = (consumoMes1 + consumoMes2 + consumoMes3 + consumoMes4 + consumoMes5) / 5;
            var consumoDiario = consumoPromedioMensual / 30;
            var horasSolPico = 5; // Promedio de horas de sol pico al día
            var eficienciaPanel;

            if (tipoCelda === "Monocristalina") {
                eficienciaPanel = 0.20; // Eficiencia promedio de paneles monocristalinos
            } else if (tipoCelda === "Policristalina") {
                eficienciaPanel = 0.15; // Eficiencia promedio de paneles policristalinos
            } else if (tipoCelda === "De película delgada") {
                eficienciaPanel = 0.10; // Eficiencia promedio de paneles de película delgada
            } else {
                eficienciaPanel = 0.15; // Eficiencia por defecto
            }

            // Calcular la cantidad de celdas solares necesarias
            var energiaPorDia = consumoDiario / (horasSolPico * eficienciaPanel);
            var celdasNecesarias = Math.ceil(energiaPorDia);

            document.getElementById("resultado1").innerHTML = "El numero de Celdas solares necesarias: " + celdasNecesarias;
        }
   // </script>
