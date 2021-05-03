import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { RequestCreateClienteData } from '../interfaces/ClienteInterface';
import Cliente from '../models/Cliente';
import Erro from '../models/Erro';
import CreateClienteService from '../services/CreateClienteService';
import { isUuid } from 'uuidv4';

export default {
    async create(request: Request, response: Response) {
        try {
            const clienteRepository = getRepository(Cliente);
            const createClienteService = new CreateClienteService();

            const {
                cnpj, razaoSocial, contato, telefone,
                endereco, numero, complemento,
                bairro, cidade, estado, cep }: RequestCreateClienteData = request.body;

            const cliente = clienteRepository.create({
                cnpj, razaoSocial, contato, telefone,
                endereco, numero, complemento,
                bairro, cidade, estado, cep
            });

            const { msg } = await createClienteService.execute(cliente);

            if (msg) {
                let erro = new Erro();
                erro = {
                    msg: msg,
                    status: 400,
                }
                return response.status(400).json({ erro });
            }
            await clienteRepository.save(cliente);
            return response.status(201).json({ cliente });

        } catch (error) {
            return response.json(error);
        }
    },

    async update(request: Request, response: Response) {
        try {
            const { id } = request.params;
            const clienteRepository = getRepository(Cliente);
            const isValido: boolean = isUuid(id);

            if (!isValido) {
                let erro = new Erro();
                erro = {
                    msg: 'ID inválido',
                    status: 404,
                }
                return response.status(404).json({ erro });
            }

            const isExisteCliente = await clienteRepository.findOne(id);

            if (!isExisteCliente) {
                let erro = new Erro();
                erro = {
                    msg: 'Cliente não encontrado',
                    status: 404,
                }
                return response.status(404).json({ erro });
            }

            const createClienteService = new CreateClienteService();

            const {
                cnpj, razaoSocial, contato, telefone,
                endereco, numero, complemento,
                bairro, cidade, estado, cep }: RequestCreateClienteData = request.body;

            const cliente = clienteRepository.create({
                cnpj, razaoSocial, contato, telefone,
                endereco, numero, complemento,
                bairro, cidade, estado, cep, id,
            });

            const { msg } = await createClienteService.execute(cliente);

            if (msg) {
                let erro = new Erro();
                erro = {
                    msg: msg,
                    status: 400,
                }
                return response.status(400).json({ erro });
            }
            await clienteRepository.save(cliente);
            return response.status(201).json({ cliente });

        } catch (error) {
            return response.json(error);
        }
    },

    async find(request: Request, response: Response) {
        try {
            const clienteRepository = getRepository(Cliente);
            const clientes = await clienteRepository.find();

            return response.json(clientes);

        } catch (error) {
            return response.json(error);
        }
    },

    async findOne(request: Request, response: Response) {
        try {
            const { id } = request.params;
            const clienteRepository = getRepository(Cliente);
            const isValido: boolean = isUuid(id);

            if (!isValido) {
                let erro = new Erro();
                erro = {
                    msg: 'ID inválido',
                    status: 404,
                }
                return response.status(404).json({ erro });
            }

            const cliente = await clienteRepository.findOne(id);

            if (!cliente) {
                let erro = new Erro();
                erro = {
                    msg: 'Cliente não encontrado',
                    status: 404,
                }
                return response.status(404).json({ erro });
            }

            return response.json(cliente);

        } catch (error) {
            return response.json(error);
        }
    },

    async delete(request: Request, response: Response) {
        try {
            const { id } = request.params;
            const clienteRepository = getRepository(Cliente);

            const isValido: boolean = isUuid(id);

            if (!isValido) {
                let erro = new Erro();
                erro = {
                    msg: 'ID inválido',
                    status: 404,
                }
                return response.status(404).json({ erro });
            }

            const cliente = await clienteRepository.findOne(id);

            if (!cliente) {
                let erro = new Erro();
                erro = {
                    msg: 'Cliente não encontrado',
                    status: 404,
                }
                return response.status(404).json({ erro });
            }

            await clienteRepository.delete(id);
            return response.status(200).json({ sucesso: 'Excluído com sucesso' });
        } catch (error) {
            return response.json(error);
        }
    },

}