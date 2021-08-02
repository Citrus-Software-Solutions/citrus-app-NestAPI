import { MigrationInterface, QueryRunner } from 'typeorm';

export class herokuDeploy21627694083998 implements MigrationInterface {
  name = 'herokuDeploy21627694083998';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "job_application" ("id" SERIAL NOT NULL, "status" character varying NOT NULL DEFAULT 'Pending', "date_aplication" date NOT NULL, CONSTRAINT "PK_c0b8f6b6341802967369b5d70f5" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "address" ("id" SERIAL NOT NULL, "street_one" character varying(100) NOT NULL, "street_two" character varying(100), "city" character varying(45) NOT NULL, "state" character varying(45) NOT NULL, "zip" character varying(10) NOT NULL, CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "skill" ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, "category" integer NOT NULL, CONSTRAINT "PK_a0d33334424e64fb78dc3ce7196" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "work_experience" ("id" SERIAL NOT NULL, "job_title" character varying(100) NOT NULL, "company_name" character varying(100) NOT NULL, "category" integer NOT NULL, "employeeId" integer, CONSTRAINT "PK_d4bef63ad6da7ec327515c121bd" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "references" ("id" SERIAL NOT NULL, "full_name" character varying(100) NOT NULL, "job_title" character varying(100), "company_name" character varying(100) NOT NULL, "phone_number" character varying NOT NULL, "email" character varying(100) NOT NULL, "employeeId" integer, CONSTRAINT "PK_795ec632ca1153bf5ec99d656e5" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "employee" ("id" SERIAL NOT NULL, "first_name" character varying(25) NOT NULL, "middle_name" character varying(25), "last_name" character varying(25) NOT NULL, "phone_number" character varying(25) NOT NULL, "birth_date" date NOT NULL, "ssn" character varying(30) NOT NULL, "education_level" integer NOT NULL, "rating" double precision NOT NULL, "status" integer NOT NULL, "addressId" integer NOT NULL, CONSTRAINT "REL_9db63829e525f028ccc7de5f9e" UNIQUE ("addressId"), CONSTRAINT "PK_3c2bc72f03fd5abbbc5ac169498" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "jobs_schedule" ("id" SERIAL NOT NULL, "date_ini" TIMESTAMP NOT NULL, "date_end" TIMESTAMP NOT NULL, "jobOfferId" integer, CONSTRAINT "PK_a585b7a87ef7af64fd80745acb9" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "job_offer" ("id" SERIAL NOT NULL, "title" character varying(25) NOT NULL, "dead_line" date NOT NULL, "special_requirements" character varying(700) NOT NULL, "duration" double precision NOT NULL, "hourly_rate" double precision NOT NULL, "status" integer NOT NULL, "employerId" integer, "locationId" integer NOT NULL, "employee_id" integer, CONSTRAINT "REL_6b605692bee5d3104f73a16a34" UNIQUE ("locationId"), CONSTRAINT "REL_a5822e2fda33e39c5d12c291e3" UNIQUE ("employee_id"), CONSTRAINT "PK_5286026037ab5fb5acfcb7e1829" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "employer" ("id" SERIAL NOT NULL, "company_name" character varying(25) NOT NULL, "special_requirements" character varying(700) NOT NULL, "status" integer NOT NULL, "addressId" integer NOT NULL, CONSTRAINT "REL_ae971df4a078e19efb56524089" UNIQUE ("addressId"), CONSTRAINT "PK_74029e6b1f17a4c7c66d43cfd34" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "contact_information" ("id" SERIAL NOT NULL, "full_name" character varying(100) NOT NULL, "job_title" character varying(25) NOT NULL, "phone_number" character varying NOT NULL, "email" character varying(100) NOT NULL, "employerId" integer, CONSTRAINT "PK_43f6534cbd3e6f9205afeb87cf0" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "skill_jobOffer" ("skillId" integer NOT NULL, "jobOfferId" integer NOT NULL, CONSTRAINT "PK_482f83709b112c09691229118da" PRIMARY KEY ("skillId", "jobOfferId"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_a4e519d33f4d6f8501710d8d73" ON "skill_jobOffer" ("skillId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_9b250383a285c4a9eae57c761b" ON "skill_jobOffer" ("jobOfferId") `,
    );
    await queryRunner.query(
      `CREATE TABLE "skill_employer" ("skillId" integer NOT NULL, "employerId" integer NOT NULL, CONSTRAINT "PK_dc3361244c8e1518554f5c19b52" PRIMARY KEY ("skillId", "employerId"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_b26333fcd4e0cfd3460385a1c2" ON "skill_employer" ("skillId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_a04159148a1e139160889f3d77" ON "skill_employer" ("employerId") `,
    );
    await queryRunner.query(
      `CREATE TABLE "skill_employee" ("skillId" integer NOT NULL, "employeeId" integer NOT NULL, CONSTRAINT "PK_cc3612fe6c013c5fff237aba454" PRIMARY KEY ("skillId", "employeeId"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_e699b50ca468e75bbd36913dcc" ON "skill_employee" ("skillId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_760034f54e598d519b5f0c4ece" ON "skill_employee" ("employeeId") `,
    );
    await queryRunner.query(
      `ALTER TABLE "work_experience" ADD CONSTRAINT "FK_560b6caded50a69bb1be6481893" FOREIGN KEY ("employeeId") REFERENCES "employee"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "references" ADD CONSTRAINT "FK_67acdfcf8be19bd0e8b7d65c94f" FOREIGN KEY ("employeeId") REFERENCES "employee"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "employee" ADD CONSTRAINT "FK_9db63829e525f028ccc7de5f9e7" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "jobs_schedule" ADD CONSTRAINT "FK_2fd536b940e123bb534e24a3444" FOREIGN KEY ("jobOfferId") REFERENCES "job_offer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "job_offer" ADD CONSTRAINT "FK_344e1b4b3e9dab5a9ab3f460c08" FOREIGN KEY ("employerId") REFERENCES "employer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "job_offer" ADD CONSTRAINT "FK_6b605692bee5d3104f73a16a34f" FOREIGN KEY ("locationId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "job_offer" ADD CONSTRAINT "FK_a5822e2fda33e39c5d12c291e3d" FOREIGN KEY ("employee_id") REFERENCES "employee"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "employer" ADD CONSTRAINT "FK_ae971df4a078e19efb565240895" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "contact_information" ADD CONSTRAINT "FK_f4e317cb648e7bba7a92bc5621d" FOREIGN KEY ("employerId") REFERENCES "employer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "skill_jobOffer" ADD CONSTRAINT "FK_a4e519d33f4d6f8501710d8d730" FOREIGN KEY ("skillId") REFERENCES "skill"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "skill_jobOffer" ADD CONSTRAINT "FK_9b250383a285c4a9eae57c761b9" FOREIGN KEY ("jobOfferId") REFERENCES "job_offer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "skill_employer" ADD CONSTRAINT "FK_b26333fcd4e0cfd3460385a1c2c" FOREIGN KEY ("skillId") REFERENCES "skill"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "skill_employer" ADD CONSTRAINT "FK_a04159148a1e139160889f3d77d" FOREIGN KEY ("employerId") REFERENCES "employer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "skill_employee" ADD CONSTRAINT "FK_e699b50ca468e75bbd36913dccb" FOREIGN KEY ("skillId") REFERENCES "skill"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "skill_employee" ADD CONSTRAINT "FK_760034f54e598d519b5f0c4ecee" FOREIGN KEY ("employeeId") REFERENCES "employee"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "skill_employee" DROP CONSTRAINT "FK_760034f54e598d519b5f0c4ecee"`,
    );
    await queryRunner.query(
      `ALTER TABLE "skill_employee" DROP CONSTRAINT "FK_e699b50ca468e75bbd36913dccb"`,
    );
    await queryRunner.query(
      `ALTER TABLE "skill_employer" DROP CONSTRAINT "FK_a04159148a1e139160889f3d77d"`,
    );
    await queryRunner.query(
      `ALTER TABLE "skill_employer" DROP CONSTRAINT "FK_b26333fcd4e0cfd3460385a1c2c"`,
    );
    await queryRunner.query(
      `ALTER TABLE "skill_jobOffer" DROP CONSTRAINT "FK_9b250383a285c4a9eae57c761b9"`,
    );
    await queryRunner.query(
      `ALTER TABLE "skill_jobOffer" DROP CONSTRAINT "FK_a4e519d33f4d6f8501710d8d730"`,
    );
    await queryRunner.query(
      `ALTER TABLE "contact_information" DROP CONSTRAINT "FK_f4e317cb648e7bba7a92bc5621d"`,
    );
    await queryRunner.query(
      `ALTER TABLE "employer" DROP CONSTRAINT "FK_ae971df4a078e19efb565240895"`,
    );
    await queryRunner.query(
      `ALTER TABLE "job_offer" DROP CONSTRAINT "FK_a5822e2fda33e39c5d12c291e3d"`,
    );
    await queryRunner.query(
      `ALTER TABLE "job_offer" DROP CONSTRAINT "FK_6b605692bee5d3104f73a16a34f"`,
    );
    await queryRunner.query(
      `ALTER TABLE "job_offer" DROP CONSTRAINT "FK_344e1b4b3e9dab5a9ab3f460c08"`,
    );
    await queryRunner.query(
      `ALTER TABLE "jobs_schedule" DROP CONSTRAINT "FK_2fd536b940e123bb534e24a3444"`,
    );
    await queryRunner.query(
      `ALTER TABLE "employee" DROP CONSTRAINT "FK_9db63829e525f028ccc7de5f9e7"`,
    );
    await queryRunner.query(
      `ALTER TABLE "references" DROP CONSTRAINT "FK_67acdfcf8be19bd0e8b7d65c94f"`,
    );
    await queryRunner.query(
      `ALTER TABLE "work_experience" DROP CONSTRAINT "FK_560b6caded50a69bb1be6481893"`,
    );
    await queryRunner.query(`DROP INDEX "IDX_760034f54e598d519b5f0c4ece"`);
    await queryRunner.query(`DROP INDEX "IDX_e699b50ca468e75bbd36913dcc"`);
    await queryRunner.query(`DROP TABLE "skill_employee"`);
    await queryRunner.query(`DROP INDEX "IDX_a04159148a1e139160889f3d77"`);
    await queryRunner.query(`DROP INDEX "IDX_b26333fcd4e0cfd3460385a1c2"`);
    await queryRunner.query(`DROP TABLE "skill_employer"`);
    await queryRunner.query(`DROP INDEX "IDX_9b250383a285c4a9eae57c761b"`);
    await queryRunner.query(`DROP INDEX "IDX_a4e519d33f4d6f8501710d8d73"`);
    await queryRunner.query(`DROP TABLE "skill_jobOffer"`);
    await queryRunner.query(`DROP TABLE "contact_information"`);
    await queryRunner.query(`DROP TABLE "employer"`);
    await queryRunner.query(`DROP TABLE "job_offer"`);
    await queryRunner.query(`DROP TABLE "jobs_schedule"`);
    await queryRunner.query(`DROP TABLE "employee"`);
    await queryRunner.query(`DROP TABLE "references"`);
    await queryRunner.query(`DROP TABLE "work_experience"`);
    await queryRunner.query(`DROP TABLE "skill"`);
    await queryRunner.query(`DROP TABLE "address"`);
    await queryRunner.query(`DROP TABLE "job_application"`);
  }
}
