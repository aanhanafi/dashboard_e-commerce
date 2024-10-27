// Data penjualan aksesoris
const accessoryNames = ["Gelang", "Kalung", "Anting", "Cincin"];
const salesData = {
    labels: [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ],
    datasets: [
        {
            label: "Gelang",
            data: [15, 25, 35, 45, 55, 65, 75, 80, 90, 95, 100, 110],
            backgroundColor: "rgba(75, 192, 192, 0.5)"
        },
        {
            label: "Kalung",
            data: [10, 20, 30, 35, 50, 60, 70, 75, 80, 85, 90, 95],
            backgroundColor: "rgba(153, 102, 255, 0.5)"
        },
        {
            label: "Anting",
            data: [5, 15, 25, 30, 45, 50, 60, 65, 70, 75, 80, 85],
            backgroundColor: "rgba(255, 159, 64, 0.5)"
        },
        {
            label: "Cincin",
            data: [8, 18, 28, 35, 48, 55, 65, 70, 78, 85, 90, 95],
            backgroundColor: "rgba(54, 162, 235, 0.5)"
        }
    ]
};

// Konfigurasi Chart.js
const config = {
    type: "bar",
    data: salesData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Penjualan Aksesoris per Bulan (2023)"
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

// Render chart
window.onload = function() {
    const ctx = document.getElementById("salesChart").getContext("2d");
    new Chart(ctx, config);
};
