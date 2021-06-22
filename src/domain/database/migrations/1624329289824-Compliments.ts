import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Compliments1624329289824 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        try {
            await queryRunner.createTable(new Table({
                name: "compliments",
                columns: [
                    {name: "id", type: "uuid", isPrimary: true},
                    {name: "user_sender", type: "uuid"},
                    {name: "user_receiver", type: "uuid"},
                    {name: "tag", type: "uuid"},
                    {name: "message", type: "text"},
                    {name: "created_at", type: "timestamp", default: "now()"}
                ]
            }), true);
        } catch (e) {
            console.trace(e);
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        try {
            await queryRunner.dropTable('compliments', true);
        } catch (e) {
            console.trace(e);
        }
    }

}
