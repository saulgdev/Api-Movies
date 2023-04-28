import { MigrationInterface, QueryRunner } from "typeorm";

export class Newmigration1682714024456 implements MigrationInterface {
    name = 'Newmigration1682714024456'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "movie" ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, "description" character varying, "duration" integer, "price" integer NOT NULL, CONSTRAINT "PK_cb3bb4d61cf764dc035cbedd422" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "movie"`);
    }

}
