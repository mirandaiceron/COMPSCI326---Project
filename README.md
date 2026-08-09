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

### User Authentication and Resource Authorization

Sprint 4 adds user authentication using session-based login and authorization for managing resources.

Users can:

- Sign up for a new account.
- Log in and create a session.
- Create resources associated with their account.
- Delete only resources that they own.
- Stay logged in using cookies and server-side sessions.
- Access protected routes only after logging in.

### How to Use

1. Start the server.

```bash
node server.js
```

2. Open your browser and visit:

```
http://localhost:3000/resources
```

3. Create a new account by signing up.

4. Log in with your account.

5. Navigate to the Resources page.

6. Add a new resource by filling out:

- Resource Name
- Category
- Location
- Description

7. Click **Add Resource**.

8. Your new resource appears immediately without reloading the page and is saved to MongoDB.

9. Resources that you own display a **Delete** button. Click **Delete** to remove your own resource.

10. Resources created by other users cannot be deleted. If a delete request is made for another user's resource, the server returns **403 Forbidden**.

If any required field is left blank, the browser prevents the form from being submitted. Invalid data is rejected by the server, and protected actions require the user to be logged in.

## System Diagram

```
Browser
    |
    v
Session Cookie
    |
    v
attachUser.js
    |
    v
resourcesRoutes.js
    |
    v
requireLogin.js
    |
    v
resourcesController.js
    |
    v
resourcesService.js
    |
    v
resourcesRepository.js
    |
    v
MongoDB
    ^
    |
resourcesRepository.js
    ^
    |
resourcesService.js
    ^
    |
resourcesController.js
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

3. Log in with a valid account and submit a valid resource.

Expected result:

- The resource appears in the list immediately without reloading the page.
- The resource is saved to `MongoDB`.
- A `MongoDB ObjectId` is assigned automatically.

4. Delete a resource that you own.

Expected result:

- The resource is removed from the page and deleted from MongoDB.
- Attempting to delete another user's resource returns **403 Forbidden**.

5. Submit the form with a required field left blank.

Expected result:

- The browser's built-in `required` attribute prevents the form from being submitted.
- No resource is saved to `MongoDB`.

## Running Tests:

Run the test suite:

```bash
npm test
```

Expected result:

- All Jest tests pass.
- The service-layer validation rules are verified using a mocked repository.
