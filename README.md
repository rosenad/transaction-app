# transaction-app

On your local machine, clone this repo:

git clone https://github.com/rosenad/transaction-app.git

cd transaction-app

Then build and run the documentation with Docker Compose

docker-compose up -d --build
Docker Compose is included with Docker Desktop. If you don't have Docker Compose installed, please download.

Once the container is built and running, visit http://localhost:3000 in your web browser to view the project


TO DO:
- separate customer and transaction schema
- switch to SQL database with separate customer and transaction tables
- add navigation bar or buttons with links to create new customers or new transactions
- clean up react design
- Typescript
- validation for input (error handling and user update when invalid input is submitted)
- add more logging
- add security for db password
