export class ClienteInterface {

    public createCliente({ id, nome, cpf, telefones, enderecos }: any): ICliente {
        const telefone = telefones.map(t => this.createTelefone(t));
        const bairro =  enderecos.map(e => this.createEndereco(e));
        return {
            id, nome, cpf, telefone, bairro
        }
    }

    public createClientes(data: any[]): ICliente[] {
        const teste =  data.map(d => {
            return this.createCliente(d)
        })
        return teste
    }




    private createTelefone({ numero }: any): ITelefone {
        return { numero }
    }

    private createEndereco({bairro }: any): IEndereco {
        return {bairro}
    }
}
export interface ICliente {
    readonly id: number,
    nome: string,
    cpf: string;
    telefone: string;
    bairro: string,
}

export interface ITelefone {
    numero: string
}


export interface IEndereco {
    bairro: string;
}
