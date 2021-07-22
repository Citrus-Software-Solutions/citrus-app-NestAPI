import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialState1625392954538 implements MigrationInterface {
  name = 'InitialState1625392954538';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "employer" ("id" SERIAL NOT NULL, "name" character varying(25) NOT NULL, CONSTRAINT "PK_74029e6b1f17a4c7c66d43cfd34" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "job_offer" ("id" SERIAL NOT NULL, "name" character varying(25) NOT NULL, "description" character varying(700) NOT NULL, "available_vacans" integer NOT NULL, "date_begin" date NOT NULL, "date_end" date NOT NULL, "status" character varying NOT NULL, "gender" character varying NOT NULL, "salary" double precision NOT NULL, "min_age" integer, "max_age" integer, "employerId" integer, CONSTRAINT "PK_5286026037ab5fb5acfcb7e1829" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "employee" ("id" SERIAL NOT NULL, "name" character varying(25) NOT NULL, "gender" character varying NOT NULL, "second_name" character varying(25), "last_name" character varying(25) NOT NULL, "second_lastname" character varying(25) NOT NULL, "birth_date" date NOT NULL, CONSTRAINT "PK_3c2bc72f03fd5abbbc5ac169498" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "job_application" ("id" SERIAL NOT NULL, "status" character varying NOT NULL DEFAULT 'Pending', "date_aplication" date NOT NULL, "jobOfferId" integer NOT NULL, "employeeId" integer NOT NULL, CONSTRAINT "PK_30d9b739d705f4b7303fbb1f2d3" PRIMARY KEY ("id", "jobOfferId", "employeeId"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "job_offer" ADD CONSTRAINT "FK_344e1b4b3e9dab5a9ab3f460c08" FOREIGN KEY ("employerId") REFERENCES "employer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "job_application" ADD CONSTRAINT "FK_236cfa84b3fe3d776577de6cfea" FOREIGN KEY ("jobOfferId") REFERENCES "job_offer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "job_application" ADD CONSTRAINT "FK_4f23f799b38d6faca3935a77775" FOREIGN KEY ("employeeId") REFERENCES "employee"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "job_application" DROP CONSTRAINT "FK_4f23f799b38d6faca3935a77775"`,
    );
    await queryRunner.query(
      `ALTER TABLE "job_application" DROP CONSTRAINT "FK_236cfa84b3fe3d776577de6cfea"`,
    );
    await queryRunner.query(
      `ALTER TABLE "job_offer" DROP CONSTRAINT "FK_344e1b4b3e9dab5a9ab3f460c08"`,
    );
    await queryRunner.query(`DROP TABLE "job_application"`);
    await queryRunner.query(`DROP TABLE "employee"`);
    await queryRunner.query(`DROP TABLE "job_offer"`);
    await queryRunner.query(`DROP TABLE "employer"`);
  }
}
