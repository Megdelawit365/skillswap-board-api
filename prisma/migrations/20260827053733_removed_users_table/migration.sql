/*
  Warnings:

  - You are about to drop the column `userId` on the `Listing` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Response` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Listing" DROP CONSTRAINT "Listing_userId_fkey";

-- DropForeignKey
ALTER TABLE "Response" DROP CONSTRAINT "Response_userId_fkey";

-- AlterTable
ALTER TABLE "Listing" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "Response" DROP COLUMN "userId";

-- DropTable
DROP TABLE "User";
