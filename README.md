# P2 - PokeMatch - Frontend

Team Members
- Karla Rodriguez
- Bao Duong
- Hunter Rose
- Michael Good
- Larry Moua

### Proposal
  Pokematch is a single page web app meant to be a social platform for users to make long lasting connections in a fun, Pokemon themed, environment. Users who make an account can match with other users based on either the results their personality quiz, or their hand picked top three favorite Pokemon. When a user's match request is accepted, they can start messaging their partner and start forming meaningful relationships. Pokematch offers a communication heavy experience for users who find that other dating apps place too much emphasis on pictures, and not enough on conversation.
  
   
### Overview
- Tables
    - User
    - Element
    - Pokemon
    - Match
    - Message
    - Move
- Features
    - Register users with username, password, type (backend)
    - Logging in using username and password or with an existing Gmail account (backend)
    - User will be greeted with pokemon theme interface (front end)
    - User can set profile pictures as Pokemon (front end/backend)
    - User will be grouped into three category based on pokemon elements (fire, water, grass) (backend)
    - User will be able to select other users from their group to match (front end)
    - Users will have the option to accept chat requests
    - User can talk to matches through direct messaging (backend)
    - Users can view all of their matches and chat histories
    - Users can block other users 
    - User talks to users using Pokemon moves as preset icebreakers before starting a conversation(front end/backend)
    - Admin can add more types and Pokemon (backend)
    - Admin can view all accounts

- MVP:
     - add user
     - admin functionality(view accounts, add more types and pokemon)
     - search user
     - talk to other user
     - Pokemon review system to help curate matching
     - User can add picture to profile
     - API talks to external API
    
- Stretch Goals:
     -Messages can be reported, and will be sent to admins for review.
     -Admin can delete accounts that have been found to break TOS 
     -Dice roll game with life points assinged to users as an entertaining way to make connections

- Functionality:
  - API talks to external API to get Pokemon data for user profiles (using PokeAPI)
  - ElephantSQL database will be implemented for user messaging functionality 
  
  
- Tech Stack:
    - Angular
    - C#
    - PostgreSQL DB
    - EF Core
    - Oauth
    - Xunit
    - Serilog or Nlog
    - Azure Webapp
    - Github Actions
    - SonarCloud
    - ASP.NET CORE API 
    
