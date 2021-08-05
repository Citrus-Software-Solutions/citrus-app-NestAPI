import { MigrationInterface, QueryRunner } from 'typeorm';

export class offerStatusAsEnum1628135103811 implements MigrationInterface {
  name = 'offerStatusAsEnum1628135103811';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "job_offer" DROP COLUMN "status"`);
    await queryRunner.query(
      `CREATE TYPE "job_offer_status_enum" AS ENUM('0', '1', '2', '3', '4', '5', '6')`,
    );
    await queryRunner.query(
      `ALTER TABLE "job_offer" ADD "status" "job_offer_status_enum" NOT NULL DEFAULT '0'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "job_offer" DROP COLUMN "status"`);
    await queryRunner.query(`DROP TYPE "job_offer_status_enum"`);
    await queryRunner.query(
      `ALTER TABLE "job_offer" ADD "status" integer NOT NULL`,
    );
  }
}
