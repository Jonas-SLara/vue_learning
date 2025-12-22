<template>
    <div class="info_box">
        <form id="cliente_form" @submit.prevent="salvarPedido()" >
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
                <label for="pao">Escolha Seu Pão: *</label>
                <select name="pao" id="pao" v-model="pao">
                    <option
                        v-for="pao in paes"
                        :key="pao.id"
                        :value="pao.nome"
                    >
                        {{ pao.nome }}
                    </option>
                </select>
            </div>
            <div class="input_container">
                <label for="carne">Escolha Sua Carne: *</label>
                <select name="carne" id="carne" v-model="carne">
                     <option
                        v-for="carne in carnes"
                        :key="carne.id"
                        :value="carne.nome"
                    >
                        {{ carne.nome }}
                    </option>
                </select>
            </div>
            <div class="input_container checkbox">
                <label for="opcionais">Escolha seus Opcionais: *</label>
                <div
                    v-for="opcional in opcionaisdata"
                    :key="opcional.id"
                >
                    <input type="checkbox" :value="opcional.nome" v-model="opcionais">
                    <span>{{ opcional.nome }}</span>
                </div>
            </div>
            <div class="input_container">
                <input type="submit" value="Fazer Pedido" class="submit-btn">
            </div>
        </form>
    </div>
</template>

<script>
    export default{
        name: 'Form',
        data(){
            return{
                paes: [],
                carnes: [],
                opcionaisdata: [],
                nome: null,
                pao: null,
                carne: null,
                opcionais: [],
                status: "Solicitado",
                msg: null
            }
        },

        mounted(){
            //carrega os dados de carnes, paes e opcionais para a escolha
            this.carnes = [
                {id: 1, nome: "Picanha"},
                {id: 2, nome: "Xuleta"},
                {id: 3, nome: "Maminha"}
            ];

            this.paes = [
                {id: 1, nome: "Integral"},
                {id: 2, nome: "Americano"}
            ];

            this.opcionaisdata = [
                {id: 1, nome: "Salame"},
                {id: 2, nome: "Salada"},
                {id: 3, nome: "Ovo"},
                {id: 4, nome: "Tomate"}
            ]
        },
        methods: {
            salvarPedido(event){
                
                if(!this.nome || !this.pao || !this.carne){
                    alert("Preencha todos os campos")
                    return
                }

                const pedido = {
                    cliente: this.nome,
                    pao: this.pao,
                    carne: this.carne,
                    opcionais: this.opcionais
                }

                alert(`olá ${pedido.cliente} seu pedido foi salvo \n
                    opcionais: ${pedido.opcionais} \n
                    pao: ${pedido.pao} \n
                    carne: ${pedido.carne}
                `)

                //pode retornar null ou uma arrary vazia
                const arrayPedidos = JSON.parse(
                    localStorage.getItem('pedidos')
                ) || []

                arrayPedidos.push(pedido)

                localStorage.setItem(
                    'pedidos',
                    JSON.stringify(arrayPedidos)
                )

                console.log(arrayPedidos)
            }
        }
    }
</script>

<style scoped>
    form{
        margin: auto;
        width: 80%;
        display: flex;
        flex-direction: column;
        border: #fff solid 2px;
        border-radius: 16px;
        padding: 8px;
        margin: 16px auto;
    }
    .input_container{
        display: flex;
        justify-content: space-between;
        gap: 32px;
        width: 100%;
        font-size: 1.4rem;
        font-weight: 600;
        color: #fff;
        margin: 8px 0;
        align-items: center;
    }

    .checkbox{
        display: flex;
        flex-wrap: wrap;
    }
    .checkbox label{
        width: 100%;
    }
    .checkbox div{
        width: 20%;
        display: flex;
        gap: 16px;
    }
    .submit-btn{
        background-color: #000000;
        color: #ff6200;
        font-weight: 700;
        border: #ff6200 solid 2px;
        width: 150px;
    }
    .submit-btn:hover{
        transform: scale(1.1);
    }
</style>