<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const state = reactive({
    form: {
        loginId: '',
        loginPw: ''
    }
});

const submit = () => {
    // Logika untuk memverifikasi kredensial pengguna dapat ditambahkan di sini
    // Misalnya, jika login berhasil, arahkan ke dashboard
    router.push({ name: 'dashboard' });
};
</script>

<template>
    <div class="d-flex justify-content-center align-items-center vh-100">
        <div class="container">
            <div class="text-center mb-3">
                <img class="logo" src="@/assets/logo.svg" />
            </div>
            <form @submit.prevent="submit">
                <div class="mb-3">
                    <label for="admin-login-id" class="form-label">Username</label>
                    <input type="text" id="admin-login-id" class="form-control" v-model="state.form.loginId">
                </div>
                <div class="mb-3">
                    <label for="admin-login-pw" class="form-label">Password</label>
                    <input type="password" id="admin-login-pw" class="form-control" v-model="state.form.loginPw">
                </div>
                <button type="submit" class="btn btn-primary">Masuk</button>
            </form>
        </div>
    </div>
</template>

<style scoped>
.logo {
    width: 150px;
    height: 150px;
}
</style>