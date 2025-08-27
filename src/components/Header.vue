<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const handleLogout = () => {
  // kalau ada clear token/session taruh di sini
  router.push()
}
</script>

<template>
    <header class="header">
        <span class="title">Dashboard Sederhana V1</span>
        <button class="logout-btn" @click="handleLogout">Logout</button>
    </header>
</template>

<style scoped>
.header {
    background-color: #4CAF50;
    color: white;
    padding: 15px 20px;
    font-size: 20px;
    display: flex;
    justify-content: space-between; /* title di kiri, logout di kanan */
    align-items: center;
}

.title {
    font-size: 24px;
    font-weight: bold;
}

.logout-btn {
    background-color: #f44336;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    transition: background 0.3s ease;
}

.logout-btn:hover {
    background-color: #d32f2f;
}
</style>
