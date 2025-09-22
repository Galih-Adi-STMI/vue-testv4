<script setup>
import { reactive, computed } from 'vue';
import { useRouter } from 'vue-router';

// Data dummy untuk autentikasi
const dummyCredentials = {
    username: 'admin',
    password: 'password123'
};

const router = useRouter();

const state = reactive({
    form: {
        loginId: '',
        loginPw: ''
    },
    error: ''
});

// Validasi form
const isFormValid = computed(() => {
    return state.form.loginId.trim() !== '' && state.form.loginPw.trim() !== '';
});

const submit = () => {
    // Reset error message
    state.error = '';

    // Cek apakah form kosong
    if (!isFormValid.value) {
        state.error = 'Username dan password harus diisi';
        return;
    }

    // Verifikasi kredensial
    if (
        state.form.loginId === dummyCredentials.username &&
        state.form.loginPw === dummyCredentials.password
    ) {
        // Login berhasil, arahkan ke dashboard
        router.push({ name: 'dashboard' });
    } else {
        // Login gagal
        state.error = 'Username atau password salah';
    }
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
                    <input 
                        type="text" 
                        id="admin-login-id" 
                        class="form-control" 
                        v-model="state.form.loginId"
                        :class="{ 'is-invalid': state.error && !state.form.loginId }"
                    >
                </div>
                <div class="mb-3">
                    <label for="admin-login-pw" class="form-label">Password</label>
                    <input 
                        type="password" 
                        id="admin-login-pw" 
                        class="form-control" 
                        v-model="state.form.loginPw"
                        :class="{ 'is-invalid': state.error && !state.form.loginPw }"
                    >
                </div>
                <div v-if="state.error" class="alert alert-danger" role="alert">
                    {{ state.error }}
                </div>
                <button 
                    type="submit" 
                    class="btn btn-primary" 
                    :disabled="!isFormValid"
                >
                    Masuk
                </button>
            </form>
        </div>
    </div>
</template>

<style scoped>
.logo {
    width: 150px;
    height: 150px;
}

.alert {
    margin-bottom: 1rem;
}

.is-invalid {
    border-color: #dc3545;
}
</style>