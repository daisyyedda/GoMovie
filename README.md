# GoMovie
A single-page movie-browsing application (SPA) with a React front end and a Go back end API.
<br/>
Tech Stack: Docker, Go, GraphQL, PostgreSQL, React.

## Run It Locally
The assumption is you have Go, Docker, and Node installed on your PC, and Docker is actively running.
<br/><br/>
Open your terminal
<br/>
`gh repo clone daisyyedda/GoMovie`
<br/>
`cd gomovie-ui`
<br/>
`npm install`
<br/>
`npm start`
<br/>
then the frontend should be running on port `3000`.
<br/><br/>
Open a new terminal
<br/>
`cd gomovie-services`
<br/>
`go run ./cmd/api`
<br/>
then the backend should be running on port `8080`.
<br/><br/>
Check that Docker is running
<br/>
`docker-compose up -d`
<br/>
