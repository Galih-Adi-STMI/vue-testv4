<script setup>
</script>

<template>
    <aside class="sidebar">
        <div class="nav-group">
            <button class="nav-section">Menu</button>
            <div class="submenu">
                <a href="/dashboard" class="nav-link">Dashboard</a>
            </div>
        </div>
        <div class="nav-group">
            <button class="nav-section">Produk</button>
            <div class="submenu">
                <a href="/product" class="nav-link">Daftar Produk</a>
            </div>
        </div>
    </aside>
</template>

<style scoped>
.sidebar {
    width: 250px;
    height: 100vh; /* Mengatur tinggi sidebar agar menjangkau seluruh layar */
    background-color: #333;
    color: white;
    padding: 15px;
    position: fixed; /* Memastikan sidebar tetap di tempat saat scroll */
}

.nav-group {
    margin-bottom: 20px;
}

.nav-section {
    background-color: #444;
    color: white;
    border: none;
    padding: 10px;
    width: 100%;
    text-align: left;
    cursor: pointer;
}

.submenu {
    display: none;
    margin-top: 10px;
}

.nav-group:hover .submenu {
    display: block;
}

.nav-link {
    color: #bbb;
    text-decoration: none;
    display: block;
    padding: 5px 10px;
}

.nav-link:hover {
    background-color: #555;
}
</style>