-- DropForeignKey
ALTER TABLE "Response" DROP CONSTRAINT "Response_listingId_fkey";

-- AddForeignKey
ALTER TABLE "Response" ADD CONSTRAINT "Response_listingId_fkey" FOREIGN KEY ("listingId") REFERENCES "Listing"("id") ON DELETE CASCADE ON UPDATE CASCADE;
