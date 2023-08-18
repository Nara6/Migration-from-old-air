/* eslint-disable prettier/prettier */
import { MigrationInterface, QueryRunner } from "typeorm"

export class ProjectsSeeding1691744474148 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const ProjectsToSeed = [
            {
                type_id: 3,
                status_id: 3,
                kh_name: 'Project Management System',
                en_name: 'Project Management System',
                abbre: 'PMS',
                icon: 'https://cdn-icons-png.flaticon.com/512/4370/4370714.png'
            }
        ];
        for (const project of ProjectsToSeed) {
            await queryRunner.query(
                `INSERT INTO "projects"(
                    "type_id",
                    "status_id",
                    "kh_name",
                    "en_name",
                    "abbre",
                    "icon"
                ) VALUES (
                    ${project.type_id},
                    ${project.status_id},
                    '${project.kh_name}',
                    '${project.en_name}',
                    '${project.abbre}',
                    '${project.icon}'
                )`
            );
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
