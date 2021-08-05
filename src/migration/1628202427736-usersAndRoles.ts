import { MigrationInterface, QueryRunner } from 'typeorm';

export class usersAndRoles1628202427736 implements MigrationInterface {
  name = 'usersAndRoles1628202427736';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "roles" ("id" SERIAL NOT NULL, "name" character varying(20) NOT NULL, "permission" text NOT NULL, CONSTRAINT "PK_c1433d71a4838793a49dcad46ab" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "users" ("id" SERIAL NOT NULL, "username" character varying(25) NOT NULL, "email" character varying(25) NOT NULL, "password" character varying NOT NULL, "status" character varying(8) NOT NULL DEFAULT 'ACTIVE', "fk_role" integer, CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE ("username"), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(`ALTER TABLE "employer" ADD "fk_user" integer`);
    await queryRunner.query(
      `ALTER TABLE "employer" ADD CONSTRAINT "UQ_85111bc507d69641fbc4cb296ad" UNIQUE ("fk_user")`,
    );
    await queryRunner.query(
      `ALTER TABLE "employer" ALTER COLUMN "status" SET DEFAULT '0'`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ADD CONSTRAINT "FK_6ed95139db173b70beb7d94ecb7" FOREIGN KEY ("fk_role") REFERENCES "roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "employer" ADD CONSTRAINT "FK_85111bc507d69641fbc4cb296ad" FOREIGN KEY ("fk_user") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "employer" DROP CONSTRAINT "FK_85111bc507d69641fbc4cb296ad"`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" DROP CONSTRAINT "FK_6ed95139db173b70beb7d94ecb7"`,
    );
    await queryRunner.query(
      `ALTER TABLE "employer" ALTER COLUMN "status" DROP DEFAULT`,
    );
    await queryRunner.query(
      `ALTER TABLE "employer" DROP CONSTRAINT "UQ_85111bc507d69641fbc4cb296ad"`,
    );
    await queryRunner.query(`ALTER TABLE "employer" DROP COLUMN "fk_user"`);
    await queryRunner.query(`DROP TABLE "users"`);
    await queryRunner.query(`DROP TABLE "roles"`);
  }
}
