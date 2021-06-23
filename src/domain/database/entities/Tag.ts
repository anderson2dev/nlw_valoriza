import {Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn} from "typeorm";
import {v4 as uuid} from 'uuid';

@Entity({name: "tags"})
 class Tag {
    @PrimaryColumn()
    readonly id: string;
    @Column()
    name:string;
    @CreateDateColumn({name: "created_at"})
    createdAt: Date;
    @UpdateDateColumn({name: "updated_at"})
    updatedAt: Date;

    constructor(name: string) {
        if(!this.id)
            this.id = uuid();
        this.name = name;
    }
}

export {Tag};