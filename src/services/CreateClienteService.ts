import { response } from "express";
import Cliente from "../models/Cliente";
import { rnCreateCliente } from "../regraNegocio/RnCreateCliente";

interface Response {
    msg: string;
}
class CreateClienteService {

    public async execute(cliente: Cliente): Promise<Response> {
        const msg = rnCreateCliente(cliente);

        return { msg };

    }
}

export default CreateClienteService;