<script setup>
import { ref } from 'vue';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const salesData = ref([10, 20, 30, 40, 50]); // Contoh data produk terjual
const revenueData = ref([100, 200, 300, 400, 500]); // Contoh data penghasilan

const renderChart = (canvasId, data, label) => {
    const ctx = document.getElementById(canvasId).getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'],
            datasets: [{
                label: label,
                data: data.value,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
};

const mounted = () => {
    renderChart('salesChart', salesData, 'Produk Terjual Hari Ini');
    renderChart('revenueChart', revenueData, 'Penghasilan Hari Ini');
};
</script>

<template>
    <div>
        <h1>Dashboard</h1>
        <div>
            <canvas id="salesChart"></canvas>
        </div>
        <div>
            <canvas id="revenueChart"></canvas>
        </div>
    </div>
</template>

<style scoped>
canvas {
    max-width: 600px;
    margin: 20px auto;
}
</style>