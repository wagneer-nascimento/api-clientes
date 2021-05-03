import {
    Column,
    CreateDateColumn,
    Entity, 
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";  

@Entity('clientes')
class Cliente {
    @PrimaryGeneratedColumn('uuid')
    id: string; 

    @Column()
    cnpj: string;

    @Column()
    razaoSocial: string;

    @Column()
    contato: string;

    @Column()
    telefone: string;

    @Column()
    endereco: string;

    @Column()
    numero: string;

    @Column()
    complemento: string;

    @Column()
    bairro: string;

    @Column()
    cidade: string;

    @Column()
    estado: string;

    @Column()
    cep: string;

    @UpdateDateColumn()
    updated_at: Date;

    @CreateDateColumn()
    created_at: Date;
}

export default Cliente;