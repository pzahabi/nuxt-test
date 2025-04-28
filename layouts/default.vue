<template>
    <Header/>
    <main class="bg-gray-200 min-h-screen">
        <slot/>
    </main>
</template>

<script lang="ts">
    import Header from '@/components/Header.vue'
</script>