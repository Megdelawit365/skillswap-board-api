# SKILLSWAP BOARD API

## DATABASE DESIGN

### TABLES OVERVIEW

1. User
   - Stores users' name and email
   - Primary key is id  
2. Listing
   - Stores the type of listing (wanting or offering) and id of user who created it
   - Primary key is id and foriegn key is user_id
3. Skill
   - Stores the name of a skill
   - Primary key is id
4. Response
   - Stores the response text to a listing, the id of the user and id of the listing
   - Primary key is id, foreign keys are listing_id and user_id
5. Listing_Skill
   - It's a junction table for listing and skill
   - Primary key is (listing_id, skill_id) and foreign keys are listing_id and skill_id
  
### DATABASE RELATIONSHIPS

- One-to-many
  - user-listing : one user can post multiple listings but a listing only has one user
  - user-reponse : one user can add multiple responses but a response only belongs to one user
  - listing-response : one listing can have multiple reponses but a response belongs to one listing
- Many-to-many
  - listing-skill : a listing may have multiple skills and a skill may belong to multiple listings

### RELATIONSHIP DIAGRAM

![Relationship Diagram](assets/image.png)