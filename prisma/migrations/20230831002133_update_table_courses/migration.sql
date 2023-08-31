/*
  Warnings:

  - Added the required column `description` to the `Courses` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Courses" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "duration" TEXT NOT NULL
);
INSERT INTO "new_Courses" ("duration", "id", "name") SELECT "duration", "id", "name" FROM "Courses";
DROP TABLE "Courses";
ALTER TABLE "new_Courses" RENAME TO "Courses";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
