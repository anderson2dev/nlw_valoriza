import {MigrationInterface, QueryRunner} from "typeorm";

export class Setup1624329263886 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        try {
            await queryRunner.query('create extension if not exists "uuid-ossp";');
        } catch (e) {
            console.trace(e);
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        try {
            await queryRunner.query('drop extension if exists "uuid-ossp";');
        } catch(e) {
            console.trace(e);
        }
    }

}
