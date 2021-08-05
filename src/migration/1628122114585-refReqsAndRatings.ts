import { MigrationInterface, QueryRunner } from 'typeorm';

export class refJobOfferAndEmployee1628122114585 implements MigrationInterface {
  name = 'refJobOfferAndEmployee1628122114585';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "employee" ALTER COLUMN "rating" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "job_offer" ALTER COLUMN "special_requirements" DROP NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "job_offer" ALTER COLUMN "special_requirements" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "employee" ALTER COLUMN "rating" SET NOT NULL`,
    );
  }
}
