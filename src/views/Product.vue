<script setup>
// Data dummy produk
const products = [
  { id: 1, nama: 'Jus Mangga', harga: 'Rp 10.000', deskripsi: '1 Gelas Es Jus Mangga' },
  { id: 2, nama: 'Jus Alpukat', harga: 'Rp 10.000', deskripsi: '1 Gelas Es Jus Alpukat' },
  { id: 3, nama: 'Indomie Goreng', harga: 'Rp 15.000', deskripsi: '1 Porsi Mie Goreng + Telur' },
]

const handleAdd = () => {
  alert("Tambah produk baru")
}

const handleEdit = (id) => {
  alert("Edit produk dengan ID: " + id)
}

const handleDelete = (id) => {
  alert("Hapus produk dengan ID: " + id)
}
</script>

<template>
  <div class="layout">
    <!-- Sidebar -->
    <Sidebar />

    <!-- Konten utama -->
    <div class="main-content">
      <Header />
      <div class="content">
        <h1>Daftar Produk</h1>

        <!-- Tombol Tambah -->
        <button class="btn-add" @click="handleAdd">+ Tambah Produk</button>

        <!-- Tabel Produk -->
        <table class="product-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nama Produk</th>
              <th>Harga</th>
              <th>Deskripsi</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product.id">
              <td>{{ product.id }}</td>
              <td>{{ product.nama }}</td>
              <td>{{ product.harga }}</td>
              <td>{{ product.deskripsi }}</td>
              <td>
                <button class="btn-edit" @click="handleEdit(product.id)">Edit</button>
                <button class="btn-delete" @click="handleDelete(product.id)">Hapus</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
}

.main-content {
  margin-left: 250px; /* supaya tidak ketutup sidebar */
  width: 100%;
}

.content {
  padding: 20px;
}

.btn-add {
  background-color: #2196F3;
  color: white;
  border: none;
  padding: 10px 15px;
  margin-bottom: 15px;
  border-radius: 5px;
  cursor: pointer;
}

.btn-add:hover {
  background-color: #1976D2;
}

.product-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 15px;
  background: #fff;
}

.product-table th,
.product-table td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
}

.product-table th {
  background-color: #4CAF50;
  color: white;
}

.btn-edit {
  background-color: #FFC107;
  border: none;
  padding: 5px 10px;
  margin-right: 5px;
  border-radius: 3px;
  cursor: pointer;
  color: #000;
}

.btn-edit:hover {
  background-color: #FFA000;
}

.btn-delete {
  background-color: #F44336;
  border: none;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
  color: white;
}

.btn-delete:hover {
  background-color: #D32F2F;
}
</style>
