/**
 * Função que converte um número representado como string em um inteiro.
 * @param {string} value Valor a ser convertido para inteiro
 * @return {ConversionResult<number>} Objeto contendo o valor convertido em caso de sucesso
 */
export function toInteger(value) {
    // tenta converter para inteiro
    const result = Number.parseInt(value);
    // isNan --> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN
    if (Number.isNaN(result)) {
        // deu erro na conversão, então retorna false
        return { error: true, value: 0 };
    }
    // se chegou aqui, então a conversão para inteiro foi bem sucedida
    return { error: false, value: result };
}
/**
 * Retorna uma função de validação de inteiro
 */
export function validateInteger({ message, min, max, }) {
    return function (_value) {
        // tenta converter para inteiro
        const { error, value } = toInteger(_value);
        // senão houve erro, verifica se o valor está dentro do intervalo
        if (!error)
            if (value >= min && value <= max)
                return true;
        // em caso de número inválido, retorna a mensagem de erro
        return message;
    };
}
