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

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('#background-images img');

    images.forEach(img => {
        img.addEventListener('mousedown', startDrag);
    });

    function startDrag(event) {
        const img = event.target;
        let shiftX = event.clientX - img.getBoundingClientRect().left;
        let shiftY = event.clientY - img.getBoundingClientRect().top;

        //img.style.position = 'absolute';
        //img.style.zIndex = 1000;
        //document.body.append(img);

        moveAt(event.pageX, event.pageY);

        function moveAt(pageX, pageY) {
            img.style.left = pageX - shiftX + 'px';
            img.style.top = pageY - shiftY + 'px';
        }

        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }

        document.addEventListener('mousemove', onMouseMove);

        img.onmouseup = function() {
            document.removeEventListener('mousemove', onMouseMove);
            img.onmouseup = null;
        };

        img.ondragstart = function() {
            return false;
        };
    }
});
