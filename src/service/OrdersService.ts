import{ OrderStatus, type Order } from "@/types/interfaces/Orders";

//chave para o localstorage
const STORAGE_KEY = "orders"
const ID_KEY = "orders_id"

export class OrderService{

    static printOrder(order: Order): void{
        let carne = order.carne
        let pao = order.pao
        let opcionais = ""
        
        order.opcionais.forEach(o => {
            opcionais += o + ", "
        })

        console.log(`
            id: ${order.id}
            carne: ${carne}
            pao: ${pao}
            status: ${order.status}
            opcionais: ${opcionais}
        `)
    }

    static getAllOrders(): Order[]{
        const data = localStorage.getItem(STORAGE_KEY)
        return (data) ? JSON.parse(data) : []
    }

    static saveOrder(order: Order): void{
        const orders: Order[] = this.getAllOrders()
        order.id = this.generatedId();
        
        orders.push(order)
        localStorage.setItem(STORAGE_KEY, JSON.stringify(orders))
    }

    static deletOrder(id:number): void{
        const orders = this.getAllOrders()
        const novo_array = orders.filter(o => o.id !== id)
        localStorage.setItem(STORAGE_KEY, JSON.stringify(novo_array))
    }

    //alterar ordem de status de um pedido
    static setStatusOrder(order:Order, status: OrderStatus): void{
        order.status = status;
    }

    static generatedId(): number{
        const lastId = localStorage.getItem(ID_KEY)
        const nextId: number = (lastId)? Number(lastId) + 1 : 1
        localStorage.setItem(ID_KEY, String(nextId))
        return nextId
    }
}