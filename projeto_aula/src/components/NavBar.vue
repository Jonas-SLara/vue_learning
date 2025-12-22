<template>
    <nav>
        <RouterLink to="/" class="logo">
            <img :src="logo" :alt="alt" width="32px" height="32px"/>
            <span>Home</span>
        </RouterLink>
        <div class="menu_links">
            <RouterLink to="/about">About</RouterLink>
            <RouterLink to="/pedidos">Pedidos</RouterLink>
        </div>
    </nav>
</template>

<script>
    export default{
        name: "navbar",
        props: ["logo", "alt"]
    }
</script>

<style scoped>
    .menu_links{
        width: 50%;
        display: flex;
        gap: 16px;
    }

    .logo{
        display: flex;
        align-items: center;
        gap: 4px;
        color: #650101;
    }

    a{
        color: #650101;
        text-decoration: none;
        font-weight: 600;
    }
</style>