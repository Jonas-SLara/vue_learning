# X TUDO!

> aplicacao para pedir seu x e receber em seu endereco, além de funcionarios receberem os pedidos na lista e processa-los em cada unidade


### Diagrama de classes de dominio

```mermaid
classDiagram

class Usuario
class Unidade
class Endereco
class Pedido
class ItemPedido
class IngredienteUnidade
class Ingrediente
class Entregador

%% Relações principais

Usuario "1" --> "0..*" Pedido : realiza

Unidade "1" --> "0..*" Pedido : recebe

Pedido "1" *-- "1..*" ItemPedido : compõe

ItemPedido "0..*" --> "1" IngredienteUnidade : referencia

IngredienteUnidade "0..*" --> "1" Ingrediente : ingrediente

IngredienteUnidade "0..*" --> "1" Unidade : pertence

Pedido "1" --> "1" Endereco : entrega_em

Entregador "1" --> "0..*" Pedido : entrega

```

### Fluxo 1 (realização de pedido)

```mermaid
flowchart TB
    id1((inicio)) --> id2[escolher filial]
    id2 --> id3{escolha}

    id3 -- manual --> id4[/input: itens do pedido/]
    id4 --> id5[ope: montar pedido<br/>+ calcular preço]
    id5 --> id6{valido?}

    id6 -- nao --> id4
    id6 -- sim --> id7[mostrar pedido gerado]
    id3 -- automatica no cardapio --> id7
    id7 --> |salvar| id8[(db)]

```

### Fluxo 2 (gerenciamento de pedidos)

```mermaid
flowchart TB
    id1((inicio)) --> id2{escolher filtro: }
    id2 -- PENDENTES --> id3[ver pedidos pendentes]
    id2 -- FINALIZADOS --> id4[ver pedidos Finalizados]

    id1 --> id5{gerar relatorio: }
    id5 -- vendas --> id6[relatorio de vendas]
    id5 -- gastos --> id7[relatorio de gastos]

    id3 --> id8{escolher: }
    id8 -- Finalizar --> id9[finalizar pedido]
    id8 -- Cancelar --> id10[cancelar Pedido]
    id8 -- Editar --> id11[editar pedido]
```