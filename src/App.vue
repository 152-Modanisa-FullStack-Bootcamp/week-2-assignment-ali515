<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
export default {}
</script>

<style>
@import './assets/styles/bootstrap.min.css';

body {
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-dark-rgb), var(--bs-bg-opacity));
}

.centered {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50vh;
    width: 100%;
    color: white;
}
</style>