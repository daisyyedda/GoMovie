# GoMovie
A single-page movie-browsing application (SPA) with a React front end and a Go back end API.

## Tech Stack
Docker, Go, GraphQL, PostgreSQL, React.

## Snapshots
Display all movies 
<br/>
<img src="https://user-images.githubusercontent.com/65566095/236915317-903f99da-2963-4249-96c8-2f65672c79f5.png">
<br/><br/>
Display a single movie
<br/>
<img src="https://user-images.githubusercontent.com/65566095/236915518-1ec6a0eb-39ce-4161-8928-0abd8750c07c.png">
<br/><br/>
Browse movie by genre
<br/>
![Screen Shot 2023-05-08 at 3 30 32 PM](https://user-images.githubusercontent.com/65566095/236915753-0829cb97-1fe2-4129-af7c-aadb5bd8789e.png)
<br/><br/>
Homepage (admin user), with add/search movies and manage catalogue features enabled
<br/>
![Screen Shot 2023-05-08 at 3 32 16 PM](https://user-images.githubusercontent.com/65566095/236915950-0f03fc7a-aa29-4b2a-b8f1-8e27fd9aa02f.png)
<br/><br/>
Add/Edit movie
<br/>
<img src="https://user-images.githubusercontent.com/65566095/236916670-1ca2e47d-885f-40a9-80dc-a0fa95cabcfd.png" width="90%" height="90%">

## How to Run
Install Go, Docker, and Node on your PC
<br/>
Start Docker
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
Now frontend should be running on port `3000`.
<br/><br/>
Open a new terminal
<br/>
`cd gomovie-services`
<br/>
`go run ./cmd/api`
<br/>
Now backend should be running on port `8080`.
<br/><br/>
Check that Docker is up
<br/>
`docker-compose up -d`
<br/>
