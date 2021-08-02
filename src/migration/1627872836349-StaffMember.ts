import {MigrationInterface, QueryRunner} from "typeorm";

export class StaffMember1627872836349 implements MigrationInterface {
    name = 'StaffMember1627872836349'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "staff_member" ("id" SERIAL NOT NULL, "first_name" character varying(25) NOT NULL, "middle_name" character varying(25) NOT NULL, "last_name" character varying(25) NOT NULL, "title" character varying(25) NOT NULL, CONSTRAINT "PK_342343208cbc30b3c14a976b0a0" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "staff_member"`);
    }

}
