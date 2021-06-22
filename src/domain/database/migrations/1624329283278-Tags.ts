import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Tags1624329283278 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        try {
            await queryRunner.createTable(new Table({
                name: "tags",
                columns: [
                    {name: "id", type: "uuid", isPrimary: true},
                    {name: "name", type: "varchar"},
                    {name: "created_at", type: "timestamp", default: "now()"},
                    {name: "updated_at", type: "timestamp", default: "now()", onUpdate: "now()"}
                ]
            }), true);
        } catch(e) {
            console.trace(e);
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        try {
            await queryRunner.dropTable('tags', true);
        } catch(e) {
            console.trace(e);
        }

    }

}
