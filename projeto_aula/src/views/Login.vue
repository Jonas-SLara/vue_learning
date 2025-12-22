<template>
    <Main>
        <div class="info_box">
            <form id="form_login" >
                <div class="input_container">
                    <label for="nome">Nome do Cliente: *</label>
                    <input 
                        type="text"
                        id="nome"
                        name="name"
                        v-model="nome"
                        placeholder="Digite o seu nome"
                    />
                </div>

                <div class="input_container">
                    <label for="senha">Senha: *</label>
                    <input 
                        :type="password"
                        id="senha"
                        name="senha"
                        v-model="senha"
                        placeholder="Digite sua senha"
                    />
                </div>
            </form>
        </div>
    </Main>
</template>

<script>
import Main from '../components/Main.vue';

    export default{
        name: "login",

        components: {
            Main
        },

        data(){
            type: "password"
        }
    }
</script>

<style>

</style>