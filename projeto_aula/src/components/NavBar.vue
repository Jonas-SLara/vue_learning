<template>
    <nav>
        <RouterLink to="/" class="logo">
            <img :src="logo" :alt="alt" width="32px" height="32px"/>
            <span>HOME</span>
        </RouterLink>
        <div class="menu_links">
            <RouterLink to="/about">SOBRE</RouterLink>
            <RouterLink to="/pedidos">PEDIDOS</RouterLink>
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
        justify-content: flex-end;
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
        font-size: 1.2rem;
    }

    a:hover{
        text-decoration: underline;
        color: #ff0000;
    }
</style>