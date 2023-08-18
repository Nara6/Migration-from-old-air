/* eslint-disable prettier/prettier */
import { MigrationInterface, QueryRunner } from "typeorm"

export class ProjectsUserSeeding1691745820081 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const Projects_UserToSeed = [
            {
                project_id: 1,
                user_id: 1,
                role_id: 8
            }
        ];
        for(const projects_user of Projects_UserToSeed){
            await queryRunner.query(
                `INSERT INTO "projects_user"(
                    "project_id",
                    "user_id",
                    "role_id"
                ) VALUES (
                    ${projects_user.project_id},
                    ${projects_user.user_id},
                    ${projects_user.role_id}
                )`
            );
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
