import {Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn} from "typeorm";
import {v4 as uuid} from 'uuid';

@Entity({name: "users"})
class User {
    @PrimaryColumn()
    id: string;
    @Column()
    name: string;
    @Column()
    email: string;
    @Column()
    password: string;
    @Column()
    admin?:boolean;
    @CreateDateColumn({name: "created_at"})
    createdAt: Date;
    @UpdateDateColumn({name: "updated_at"})
    updatedAt: Date;

    constructor(name:string, email:string, password: string, admin: boolean) {
        if(!this.id)
            this.id = uuid();
        this.name = name;
        this.email = email;
        this.password = password;
        if (admin)
            this.admin = admin;
    }

}

export {User};