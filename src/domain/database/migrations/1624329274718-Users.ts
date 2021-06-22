import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Users1624329274718 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        try {
            await queryRunner.createTable(new Table({
                name: "users",
                columns: [  
                    {name: "id", type: "uuid", isPrimary: true},
                    {name: "name", type: "varchar"},
                    {name: "email", type: "varchar"},
                    {name: "password", type: "varchar"},
                    {name: "admin", type: "boolean", default: false},
                    {name: "created_at", type: "timestamp", default: "now()"},
                    {name: "updated_at", type: "timestamp", default: "now()", onUpdate: "now()"}      
                ]
            }), true);
        } catch (e) {
            console.trace(e);
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        try {
            await queryRunner.dropTable('users', true);
        } catch(e) {
            console.trace(e);
        }
    }

}
