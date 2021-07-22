import {MigrationInterface, QueryRunner} from "typeorm";

export class newEmployerDomain1626937839361 implements MigrationInterface {
    name = 'newEmployerDomain1626937839361'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "employee" ("id" SERIAL NOT NULL, "name" character varying(25) NOT NULL, "gender" character varying NOT NULL, "second_name" character varying(25), "last_name" character varying(25) NOT NULL, "second_lastname" character varying(25) NOT NULL, "birth_date" date NOT NULL, CONSTRAINT "PK_3c2bc72f03fd5abbbc5ac169498" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "job_application" ("id" SERIAL NOT NULL, "status" character varying NOT NULL DEFAULT 'Pending', "date_aplication" date NOT NULL, "employeeId" integer NOT NULL, CONSTRAINT "PK_5ed3d3532e8f280293f98fa22d9" PRIMARY KEY ("id", "employeeId"))`);
        await queryRunner.query(`CREATE TABLE "jobs_schedule" ("id" SERIAL NOT NULL, "date_ini" TIMESTAMP NOT NULL, "date_end" TIMESTAMP NOT NULL, "jobOfferId" integer, CONSTRAINT "PK_a585b7a87ef7af64fd80745acb9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "address" ("id" SERIAL NOT NULL, "street_one" character varying(100) NOT NULL, "street_two" character varying(100), "city" character varying(45) NOT NULL, "state" character varying(45) NOT NULL, "zip" character varying(10) NOT NULL, CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "skill" ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, "category" integer NOT NULL, "jobOfferId" integer, CONSTRAINT "PK_a0d33334424e64fb78dc3ce7196" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "job_offer" ("id" SERIAL NOT NULL, "title" character varying(25) NOT NULL, "dead_line" date NOT NULL, "special_requirements" text array NOT NULL, "duration" double precision NOT NULL, "hourly_rate" double precision NOT NULL, "status" integer, "employerId" integer, "locationId" integer NOT NULL, "employee_id" integer, CONSTRAINT "REL_6b605692bee5d3104f73a16a34" UNIQUE ("locationId"), CONSTRAINT "REL_a5822e2fda33e39c5d12c291e3" UNIQUE ("employee_id"), CONSTRAINT "PK_5286026037ab5fb5acfcb7e1829" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "employer_status_enum" AS ENUM('0', '1')`);
        await queryRunner.query(`CREATE TABLE "employer" ("id" SERIAL NOT NULL, "company_name" character varying(25) NOT NULL, "logo" text NOT NULL, "special_requirements" text array NOT NULL, "status" "employer_status_enum" NOT NULL DEFAULT '0', "addressId" integer NOT NULL, CONSTRAINT "REL_ae971df4a078e19efb56524089" UNIQUE ("addressId"), CONSTRAINT "PK_74029e6b1f17a4c7c66d43cfd34" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contact_information" ("id" SERIAL NOT NULL, "full_name" character varying(50) NOT NULL, "job_title" character varying(50) NOT NULL, "phone_number" character varying(50) NOT NULL, "email" character varying(50) NOT NULL, "employerId" integer, CONSTRAINT "PK_43f6534cbd3e6f9205afeb87cf0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "job_application" ADD CONSTRAINT "FK_4f23f799b38d6faca3935a77775" FOREIGN KEY ("employeeId") REFERENCES "employee"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "jobs_schedule" ADD CONSTRAINT "FK_2fd536b940e123bb534e24a3444" FOREIGN KEY ("jobOfferId") REFERENCES "job_offer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "skill" ADD CONSTRAINT "FK_6a85152fcd81f74989b1174cecf" FOREIGN KEY ("jobOfferId") REFERENCES "job_offer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "job_offer" ADD CONSTRAINT "FK_344e1b4b3e9dab5a9ab3f460c08" FOREIGN KEY ("employerId") REFERENCES "employer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "job_offer" ADD CONSTRAINT "FK_6b605692bee5d3104f73a16a34f" FOREIGN KEY ("locationId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "job_offer" ADD CONSTRAINT "FK_a5822e2fda33e39c5d12c291e3d" FOREIGN KEY ("employee_id") REFERENCES "employee"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "employer" ADD CONSTRAINT "FK_ae971df4a078e19efb565240895" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "contact_information" ADD CONSTRAINT "FK_f4e317cb648e7bba7a92bc5621d" FOREIGN KEY ("employerId") REFERENCES "employer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact_information" DROP CONSTRAINT "FK_f4e317cb648e7bba7a92bc5621d"`);
        await queryRunner.query(`ALTER TABLE "employer" DROP CONSTRAINT "FK_ae971df4a078e19efb565240895"`);
        await queryRunner.query(`ALTER TABLE "job_offer" DROP CONSTRAINT "FK_a5822e2fda33e39c5d12c291e3d"`);
        await queryRunner.query(`ALTER TABLE "job_offer" DROP CONSTRAINT "FK_6b605692bee5d3104f73a16a34f"`);
        await queryRunner.query(`ALTER TABLE "job_offer" DROP CONSTRAINT "FK_344e1b4b3e9dab5a9ab3f460c08"`);
        await queryRunner.query(`ALTER TABLE "skill" DROP CONSTRAINT "FK_6a85152fcd81f74989b1174cecf"`);
        await queryRunner.query(`ALTER TABLE "jobs_schedule" DROP CONSTRAINT "FK_2fd536b940e123bb534e24a3444"`);
        await queryRunner.query(`ALTER TABLE "job_application" DROP CONSTRAINT "FK_4f23f799b38d6faca3935a77775"`);
        await queryRunner.query(`DROP TABLE "contact_information"`);
        await queryRunner.query(`DROP TABLE "employer"`);
        await queryRunner.query(`DROP TYPE "employer_status_enum"`);
        await queryRunner.query(`DROP TABLE "job_offer"`);
        await queryRunner.query(`DROP TABLE "skill"`);
        await queryRunner.query(`DROP TABLE "address"`);
        await queryRunner.query(`DROP TABLE "jobs_schedule"`);
        await queryRunner.query(`DROP TABLE "job_application"`);
        await queryRunner.query(`DROP TABLE "employee"`);
    }

}
