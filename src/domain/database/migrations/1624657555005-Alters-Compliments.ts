import {MigrationInterface, QueryRunner} from "typeorm";

export class AltersCompliments1624657555005 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        try {
            await queryRunner.query('ALTER TABLE "compliments" RENAME "tag" TO "tag_id"')
            await queryRunner.query('ALTER TABLE "compliments" RENAME "user_sender" TO "user_sender_id"');
            await queryRunner.query('ALTER TABLE "compliments" RENAME "user_receiver" TO "user_receiver_id"');
        } catch (e) {
            console.trace(e);
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        try {
            await queryRunner.query('ALTER TABLE "compliments" RENAME "tag_id" TO "tag"');
            await queryRunner.query('ALTER TABLE "compliments" RENAME "user_sender_id" TO "user_sender"');
            await queryRunner.query('ALTER TABLE "compliments" RENAME "user_receiver_id" TO "user_receiver"');
        } catch (e) {
            console.trace(e);
        }
    }

}
