<template>
    <Header/>
    <main class="bg-gray-200 min-h-screen">
        <slot/>
    </main>
    <Footer/>
</template>

<script lang="ts">
    import Header from '@/components/Header.vue'
    import Footer from '@/components/Footer.vue'
</script>