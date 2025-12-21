export enum PostStatus{
    Pendente = 'PENDENTE',
    Processando = 'PROCESSANDO',
    Concluido = 'CONCLUIDO'
}

export interface PostsData{
    id: number;
    title: string;
    created: String;
    status: PostStatus;
}
