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

// Menghitung total unit terjual per kategori aksesoris
function calculateTotalUnits(data) {
    return data.datasets.map(dataset => {
        return dataset.data.reduce((acc, value) => acc + value, 0);
    });
}

// Menampilkan total unit terjual per kategori aksesoris
function displayTotalUnits(totals) {
    const totalContainer = document.getElementById("totalSalesContainer");
    totalContainer.innerHTML = ""; // Clear existing content

    totals.forEach((total, index) => {
        const accessoryTotal = document.createElement("p");
        accessoryTotal.textContent = `${accessoryNames[index]}: ${total.toLocaleString()} unit`;
        accessoryTotal.classList.add("total-item");
        totalContainer.appendChild(accessoryTotal);
    });
}

// Konfigurasi Chart.js
const config = {
    type: "bar",
    data: salesData,
    options: {
        responsive: true,
        maintainAspectRatio: false, // Ensures chart is responsive in all sizes
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

// Render chart dan tampilkan total unit terjual tahunan
window.onload = function() {
    const ctx = document.getElementById("salesChart").getContext("2d");
    if (ctx) {
        new Chart(ctx, config);
    }

    // Menghitung dan menampilkan total unit terjual
    const totals = calculateTotalUnits(salesData);
    displayTotalUnits(totals);
};
