import{ OrderStatus, type Order } from "@/types/Orders";

//chave para o localstorage
const STORAGE_KEY = "orders"
const ID_KEY = "orders_id"

export class OrderService{

    static toString(order: Order): string{
        let carne = order.carne
        let pao = order.pao
        let opcionais = ""
        
        order.opcionais.forEach(o => {
            opcionais += o + ", "
        })

        return `
            cliente: ${order.clientName}
            id: ${order.id}
            carne: ${carne}
            pao: ${pao}
            status: ${order.status}
            opcionais: ${opcionais}
        `
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

    static putOrder(order:Order): void{
        const orders: Order[] = this.getAllOrders()
        const index = orders.findIndex(o => o.id === order.id)
        if (index === -1) {
            console.warn(`Pedido com id ${order.id} não encontrado`)
            return
        }
        orders[index] = order
        localStorage.setItem(STORAGE_KEY, JSON.stringify(orders))
    }
}