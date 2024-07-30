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
