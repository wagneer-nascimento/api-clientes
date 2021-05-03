import Cliente from "../models/Cliente";

export function rnCreateCliente(cliente: Cliente): string {

    try {
        if (!cliente.cnpj) {
            throw new Error('CNPJ Obrigatório');
        }
        if (!cliente.razaoSocial) {
            throw new Error('Razão Social Obrigatório');
        }
        if (!cliente.contato) {
            throw new Error('Contato Obrigatório');
        }
        if (!cliente.telefone) {
            throw new Error('Telefone Obrigatório');
        }
        if (!cliente.endereco) {
            throw new Error('Endereço Obrigatório');
        }
        if (!cliente.numero) {
            throw new Error('Número Obrigatório');
        }
        if (!cliente.bairro) {
            throw new Error('Bairro Obrigatório');
        }
        if (!cliente.cidade) {
            throw new Error('Cidade Obrigatório');
        }
        if (!cliente.estado) {
            throw new Error('Estado Obrigatório');
        }
        if (!cliente.cep) {
            throw new Error('Cep Obrigatório');
        }

        return "";

    } catch (error) {
        return error.message;
    }


}