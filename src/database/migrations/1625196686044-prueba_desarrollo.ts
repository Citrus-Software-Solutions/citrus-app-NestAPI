import {MigrationInterface, QueryRunner} from "typeorm";

export class pruebaDesarrollo1625196686044 implements MigrationInterface {
    name = 'pruebaDesarrollo1625196686044'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "job_offers" ("id" SERIAL NOT NULL, "name" character varying(25) NOT NULL, "description" character varying(700) NOT NULL, "available_vacans" integer NOT NULL, "date_begin" date NOT NULL, "date_end" date NOT NULL, "status" character varying NOT NULL, "gender" character varying NOT NULL, "salary" double precision NOT NULL, "min_age" integer, "max_age" integer, "employerId" integer, CONSTRAINT "PK_9a54d36bd6829979f945defdeb5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "employers" ("id" SERIAL NOT NULL, "name" character varying(25) NOT NULL, CONSTRAINT "PK_f2c1aea3e8d7aa3c5fba949c97d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "job_offers" ADD CONSTRAINT "FK_f7da21d03d96ba0e273d70ce914" FOREIGN KEY ("employerId") REFERENCES "employers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "job_offers" DROP CONSTRAINT "FK_f7da21d03d96ba0e273d70ce914"`);
        await queryRunner.query(`DROP TABLE "employers"`);
        await queryRunner.query(`DROP TABLE "job_offers"`);
    }

}
