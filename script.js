// Harga per ubi
const PRICE_PER_UNIT = 7000;

// Data penjualan dalam unit
const unitSalesData = {
    Jan: 850, Feb: 920, Mar: 980, Apr: 1050, May: 1200, 
    Jun: 1150, Jul: 1300, Aug: 1250, Sep: 1180, 
    Oct: 1100, Nov: 950, Dec: 850
};

// Menghitung revenue berdasarkan unit sales
const revenueSalesData = {};
Object.keys(unitSalesData).forEach(month => {
    revenueSalesData[month] = unitSalesData[month] * PRICE_PER_UNIT;
});

// Konfigurasi dasar chart
let currentMode = 'units';
const getChartData = (mode) => ({
    labels: Object.keys(unitSalesData),
    datasets: [{
        label: mode === 'units' ? 'Penjualan (Unit)' : 'Penjualan (Juta Rupiah)',
        data: mode === 'units' 
            ? Object.values(unitSalesData)
            : Object.values(revenueSalesData).map(value => value / 1000000), // Konversi ke juta
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2,
        borderRadius: 5,
        barThickness: 25
    }]
});

// Konfigurasi chart
const config = {
    type: 'bar',
    data: getChartData('units'),
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)'
                },
                ticks: {
                    callback: function(value) {
                        if (currentMode === 'units') {
                            return value + ' Unit';
                        } else {
                            return value + ' Jt';
                        }
                    }
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        }
    }
};

// Inisialisasi chart
let myChart;
window.addEventListener('load', () => {
    const ctx = document.getElementById('salesChart').getContext('2d');
    myChart = new Chart(ctx, config);
});

// Toggle antara unit dan revenue
document.getElementById('showUnits').addEventListener('click', function() {
    currentMode = 'units';
    this.classList.add('active');
    document.getElementById('showRevenue').classList.remove('active');
    myChart.data = getChartData('units');
    myChart.update();
});

document.getElementById('showRevenue').addEventListener('click', function() {
    currentMode = 'revenue';
    this.classList.add('active');
    document.getElementById('showUnits').classList.remove('active');
    myChart.data = getChartData('revenue');
    myChart.update();
});

// Event listener untuk menu sidebar
document.querySelectorAll('.sidebar a').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelectorAll('.sidebar a').forEach(link => {
            link.classList.remove('active');
        });
        item.classList.add('active');
    });
});
