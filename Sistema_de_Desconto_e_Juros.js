/// Neste programa será criado um sistema de desconto e acréscimo de juros em variadas modalidades
/// de pagamentos que existem na maioria dos empreendimentos, comércios, etc.

/// 1 - À vista no débito, recebe 10% de desconto;
/// 2 - À vista no dinheiro ou no PIX, recebe 15% de desconto;
/// 3 - Parcelado em dua vezes, irá pagar o preço normal da etiqueta
/// 4 - Acima de duas parcelas, o preço de etiqueta receberá acréscimo de 10%

const precoEtiqueta = 150;
const formaDePagamento = 1;

if (formaDePagamento === 1){
    console.log(precoEtiqueta - (precoEtiqueta * 0.1));
} else if (formaDePagamento === 2){
    console.log(precoEtiqueta - (precoEtiqueta * 0.15));
} else if (formaDePagamento === 3){
    console.log(precoEtiqueta);
} else {
    console.log(precoEtiqueta + (precoEtiqueta * 0.1));
}