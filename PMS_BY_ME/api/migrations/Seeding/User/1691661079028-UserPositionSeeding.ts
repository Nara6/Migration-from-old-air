/* eslint-disable prettier/prettier */
import { MigrationInterface, QueryRunner } from "typeorm"

export class UserPositionSeeding1691661079028 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const usersPositionToSeed= [
            {kh_name: 'Director General', en_name: 'Director General'},
            {kh_name: 'Deputy Director General', en_name: 'Deputy Director General'},
            {kh_name: 'Director', en_name: 'Director'},
            {kh_name: 'Deputy Director', en_name: 'Deputy Director'},
            {kh_name: 'Cheif Office', en_name: 'Cheif Office'},
            {kh_name: 'Vice Check Office', en_name: 'Vice Check Office'},
            {kh_name: 'Official', en_name: 'Official'},
            {kh_name: 'Staff', en_name: 'Staff'},
            {kh_name: 'Intern', en_name: 'Intern'},
        ];
        // Insert positions
        for (const position of usersPositionToSeed) {
            await queryRunner.query(
            `INSERT INTO "users_position"("kh_name", "en_name") VALUES ('${position.kh_name}', '${position.en_name}')`
            );
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
