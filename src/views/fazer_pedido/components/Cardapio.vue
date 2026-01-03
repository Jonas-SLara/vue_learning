<template>
    <section class="cardapio">
        <div class="cardapio-scroll">
            <div 
                class="prato_montado"
                v-for="n in 20"
                :key="n"
            >
                Prato {{ n }}
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
    .cardapio{
        width: 100%;
        border-radius: 16px;
        display: grid;
        grid-template-columns: 3fr;
        padding: 8px;
        height: 60vh;
        .cardapio-scroll{
            height: 100%;
            overflow-y: auto;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
            gap: 16px;
            padding-right: 8px;

            .prato_montado{
                aspect-ratio: 1;
                background-color: rgb(70, 70, 70);
                border-radius: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }
</style>