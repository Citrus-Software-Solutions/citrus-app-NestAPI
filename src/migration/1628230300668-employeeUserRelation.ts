import { MigrationInterface, QueryRunner } from 'typeorm';

export class employeeUserRelation1628230300668 implements MigrationInterface {
  name = 'employeeUserRelation1628230300668';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "employee" ADD "user_id" integer`);
    await queryRunner.query(
      `ALTER TABLE "employee" ADD CONSTRAINT "UQ_f61258e58ed35475ce1dba03797" UNIQUE ("user_id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "employee" ALTER COLUMN "status" SET DEFAULT '0'`,
    );
    await queryRunner.query(
      `ALTER TABLE "employee" ADD CONSTRAINT "FK_f61258e58ed35475ce1dba03797" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "employee" DROP CONSTRAINT "FK_f61258e58ed35475ce1dba03797"`,
    );
    await queryRunner.query(
      `ALTER TABLE "employee" ALTER COLUMN "status" DROP DEFAULT`,
    );
    await queryRunner.query(
      `ALTER TABLE "employee" DROP CONSTRAINT "UQ_f61258e58ed35475ce1dba03797"`,
    );
    await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "user_id"`);
  }
}
