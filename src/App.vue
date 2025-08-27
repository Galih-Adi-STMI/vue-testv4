<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const layout = computed(() => {
    if (route.meta.layout === undefined) {
        return 'none';
    }

    return route.meta.layout;
});
</script>

<template>
    <component :is="layout">
        <RouterView />
    </component>
</template>

<style scoped>

</style>
