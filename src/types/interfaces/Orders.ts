import type { Ingrediente } from "./Ingredientes";

export enum OrderStatus{
    CONCLUIDO = 'CONCLUIDO',
    FINALIZADO = 'FINALIZADO',
    PENDENTE = 'PENDENTE'
}

export enum OrderPriority{
    ALTA = 1,
    MEDIA = 2,
    BAIXA = 3
}

export enum FormaPagamento{
    CREDITO = 'CREDITO',
    DEBITO = 'DEBITO',
    DINHEIRO = 'DINHEIRO',
    PIX = 'PIX'
}

export interface Order{
    id: number,
    status: OrderStatus,
    clientName: string,
    pao: string,
    carne: string,
    opcionais: string[]
    priority: number
}