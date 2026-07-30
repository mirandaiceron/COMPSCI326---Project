# Project Name

Campus Resource Finder

## Team Roster

| Name          | GitHub Username |
| ------------- | --------------- |
| Nguyen Pham   | @GiaPham204     |
| Miranda Ceron | @mirandaiceron  |

## Working Agreement

- We will communicate daily using Discord and respond in a timely manner
- Whenever we push code, open a Pull Request, or merge changes on GitHub, we will notify the team in Discord and provide a brief summary of what was completed, any issues encountered, and any next steps (on Discord/GitHub)
- All code will be developed on separate branches and submitted through pull requests
- A pull request will only be considered done if it has been reviewed and approved by at least one teammate before being merged into the main branch
- If any disagreements arise, we will discuss all possible different approaches team members may have and work toward a consensus. If no agreement is reached, we will take a majority vote and respect each other and the team's decision.

## Project Domain

Our project is a Campus Resource Finder that helps college students quickly locate useful campus services such as tutoring, counseling, food assistance, study spaces, and career resources. Many students are unaware of these resources or have difficulty finding them. Our goal is to provide a simple website that makes important campus services easier to discover. This project supports student success and aligns with the idea of Computing for the Common Good.

## Running the Project Locally

Follow these steps to run the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/mirandaiceron/COMPSCI326---Project.git
```

### 2. Go to the project folder

```bash
cd COMPSCI326---Project
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the server

```bash
node server.js
```

### 5. Open the application

- Home page: http://localhost:3000/
- Resources page: http://localhost:3000/resources
- About page: http://localhost:3000/about

## New Feature

### Add Resource

Sprint 2 introduces the ability for users to add new campus resources through the web application.

Users can:
- View all available campus resources.
- Submit a new resource using the form.
- Have the resource saved to application's JSON file.
- See the updated list immediately after submitting the form. 

### How to Use
1. Start the server.

```bash
node server.js
```

2. Open your browser and visit:

```
http://localhost:3000/resources
```

3. Fill out  the Add Resource form with:
- Resource Name
- Category
- Location
- Description

4. Click **Add Resource**.

5. The page reloads and displays the newly added resource. The resource is also saved to `data/resources.json`.

If any required field is left blank, the application displays an error message and does not save the resource.

## System Diagram 

```
Browser
    |
    v
Route (resourcesRoutes.js)
    |
    v
Controller (resourcesController.js)
    |
    v
Service (resourcesService.js)
    |
    v
Repository (resourcesRepository.js)
    |
    v
resources.json
    ^
    |
Repository
    ^
    |
Service
    ^
    |
Controller
    ^
    |
Render resources.ejs
    |
    V
Browser
```

## Testing the Feature

The feature was tested using the following steps:

1. Start the server:
```bash
node server.js
```

2. Open:
```
http://localhost:3000/resources
```

3. Submit a valid resource through the form.

Expected result:
- The resource appears in the list.
- The resource is saved to `data/resources.json`.
- A new unique ID is assigned automatically.

4. Submit the form with a required field left blank.

Expected result:
- The browser's built-in `required` attribute prevents the form from being submitted and displays **"Fill out this field."** 
- No resource is added to the JSON file. 

5. Submit an invalid request that bypasses the browser's validation (ex. request with missing field(s))

Expected result:
- The server responds with a **400 Bad Request** status.
- The application displays **"All fields are required."**
- No resource is added to the JSON file.
