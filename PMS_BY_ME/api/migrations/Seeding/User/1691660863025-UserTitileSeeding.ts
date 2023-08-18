/* eslint-disable prettier/prettier */
import { MigrationInterface, QueryRunner } from "typeorm"

export class UserTitileSeeding1691660863025 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const usersTitleToSeed= [
            {kh_name: 'H.E', en_name: 'H.E'},
            {kh_name: 'Mr.', en_name: 'Mr.'},
            {kh_name: 'Mrs.', en_name: 'Mrs.'},
            {kh_name: 'Miss', en_name: 'Miss'},
        ];
        // Insert titles
        for (const title of usersTitleToSeed) {
            await queryRunner.query(
            `INSERT INTO "users_title"("kh_name", "en_name") VALUES ('${title.kh_name}', '${title.en_name}')`
            );
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
