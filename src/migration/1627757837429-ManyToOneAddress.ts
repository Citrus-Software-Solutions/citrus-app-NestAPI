import {MigrationInterface, QueryRunner} from "typeorm";

export class ManyToOneAddress1627757837429 implements MigrationInterface {
    name = 'ManyToOneAddress1627757837429'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "FK_9db63829e525f028ccc7de5f9e7"`);
        await queryRunner.query(`ALTER TABLE "employee" ALTER COLUMN "addressId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "REL_9db63829e525f028ccc7de5f9e"`);
        await queryRunner.query(`ALTER TABLE "job_offer" DROP CONSTRAINT "FK_6b605692bee5d3104f73a16a34f"`);
        await queryRunner.query(`ALTER TABLE "job_offer" ALTER COLUMN "locationId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "job_offer" DROP CONSTRAINT "REL_6b605692bee5d3104f73a16a34"`);
        await queryRunner.query(`ALTER TABLE "employer" DROP CONSTRAINT "FK_ae971df4a078e19efb565240895"`);
        await queryRunner.query(`ALTER TABLE "employer" ALTER COLUMN "addressId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "employer" DROP CONSTRAINT "REL_ae971df4a078e19efb56524089"`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "FK_9db63829e525f028ccc7de5f9e7" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "job_offer" ADD CONSTRAINT "FK_6b605692bee5d3104f73a16a34f" FOREIGN KEY ("locationId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "employer" ADD CONSTRAINT "FK_ae971df4a078e19efb565240895" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employer" DROP CONSTRAINT "FK_ae971df4a078e19efb565240895"`);
        await queryRunner.query(`ALTER TABLE "job_offer" DROP CONSTRAINT "FK_6b605692bee5d3104f73a16a34f"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "FK_9db63829e525f028ccc7de5f9e7"`);
        await queryRunner.query(`ALTER TABLE "employer" ADD CONSTRAINT "REL_ae971df4a078e19efb56524089" UNIQUE ("addressId")`);
        await queryRunner.query(`ALTER TABLE "employer" ALTER COLUMN "addressId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "employer" ADD CONSTRAINT "FK_ae971df4a078e19efb565240895" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "job_offer" ADD CONSTRAINT "REL_6b605692bee5d3104f73a16a34" UNIQUE ("locationId")`);
        await queryRunner.query(`ALTER TABLE "job_offer" ALTER COLUMN "locationId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "job_offer" ADD CONSTRAINT "FK_6b605692bee5d3104f73a16a34f" FOREIGN KEY ("locationId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "REL_9db63829e525f028ccc7de5f9e" UNIQUE ("addressId")`);
        await queryRunner.query(`ALTER TABLE "employee" ALTER COLUMN "addressId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "FK_9db63829e525f028ccc7de5f9e7" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
