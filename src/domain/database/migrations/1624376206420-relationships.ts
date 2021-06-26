import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class relationships1624376206420 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        try  {
            await queryRunner.createForeignKey('compliments', new TableForeignKey({
                name: 'fk_tag',
                columnNames: [
                    'tag'
                ],
                referencedTableName: 'tags',
                referencedColumnNames: [
                    'id'
                ]
            }));

            await  queryRunner.createForeignKey('compliments', new TableForeignKey({
                name: 'fk_receiver',
                columnNames: [
                    'user_receiver'
                ],
                referencedTableName: 'users',
                referencedColumnNames: [
                    'id'
                ]
            }));

            await queryRunner.createForeignKey('compliments', new TableForeignKey({
                name: 'fk_sender',
                columnNames: [
                    'user_sender'
                ],
                referencedTableName: 'users',
                referencedColumnNames: [
                    'id'
                ]
            }));
        } catch (e) {
            console.trace(e);
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        try {
            await queryRunner.dropForeignKey('compliments', 'fk_tag');
            await queryRunner.dropForeignKey('compliments', 'fk_receiver');
            await queryRunner.dropForeignKey('compliments', 'fk_sender');
        } catch(e) {
            console.trace(e);
        }
    }

}
