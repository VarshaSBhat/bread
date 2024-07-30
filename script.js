let A = 0;
let B = 0;
const dataA = [];
const dataB = [];
const labels = [];

function updateVariable(variable, value) {
    const timestamp = new Date().toLocaleTimeString();
    labels.push(timestamp);

    if (variable === 'A') {
        A += value;
        dataA.push(A);
        dataB.push(B); 
    } else if (variable === 'B') {
        B += value;
        dataA.push(A); 
        dataB.push(B);
    }
    updatePlot();
}

function updatePlot() {
    const traceA = {
        x: labels,
        y: dataA,
        type: 'scatter',
        mode: 'lines+markers',
        name: 'Vaibhavi',
        line: {shape: 'linear'},
    };
    const traceB = {
        x: labels,
        y: dataB,
        type: 'scatter',
        mode: 'lines+markers',
        name: 'Varsha',
        line: {shape: 'linear'},
    };
    const layout = {
        title: 'Bread Counter',
        xaxis: {
            title: 'Time',
        },
        yaxis: {
            title: 'Bread',
            rangemode: 'tozero',
        }
    };
    Plotly.newPlot('myPlot', [traceA, traceB], layout);
}

updatePlot();

document.getElementById('nightModeToggle').addEventListener('click', () => {
    document.body.classList.toggle('night-mode');
    const nightModeButton = document.getElementById('nightModeToggle');
    if (document.body.classList.contains('night-mode')) {
        nightModeButton.textContent = 'Day Mode'; 
    } else {
        nightModeButton.textContent = 'Night Mode'; 
    }
    document.body.style.backgroundColor = document.body.classList.contains('night-mode') ? '#333' : '#f5f5dc';
});