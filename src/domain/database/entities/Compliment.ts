import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn} from "typeorm";
import {v4 as uuid} from 'uuid';
import { Tag } from "./Tag";
import { User } from "./User";

@Entity({name: 'compliments'})
export class Compliment {
    @PrimaryColumn()
    readonly id: string;
    @Column({name: 'user_receiver_id'})
    userReceiverId: string;
    @Column({name: 'user_sender_id'})
    userSenderId: string;
    @Column({name: 'tag_id'})
    tagId: string;
    @Column()
    message: string;
    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;
    @JoinColumn({name: 'tag_id', referencedColumnName: 'id'})
    @ManyToOne(()=> Tag)
    tag: Tag;
    @JoinColumn({name: 'user_sender_id', referencedColumnName: 'id'})
    @ManyToOne(() => User)
    userSender: User;
    @JoinColumn({name: 'user_receiver_id', referencedColumnName: 'id'})
    @ManyToOne(() => User)
    userReceiver: User;

    constructor(message: string, userSenderId: string, userReceiverId: string) {
        if (!this.id)
            this.id = uuid();
        this.message = message;
        this.userReceiverId = userReceiverId;
        this.userSenderId = userSenderId;
    }

}
