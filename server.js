//imports Express library installed
import express from 'express'; 

//creates Express server
const app = express();
//server listens on port 3000
const PORT = 3000;

//define GET route for home page (/)
app.get('/', (req, res) => {

    //send HTML back to the browser as response
    res.send(`
        <h1>Campus Resource Finder</h1>
        <p>Welcome to the Campus Resource Finder!</p>
        `);
});

//define GET route for /resources
app.get('/resources', (req, res) => {

    //send an HTML page containing a list of campus resources
    res.send(`
        <h1>Campus Resources</h1>
        <ul>
            <li>Tutoring</li>
            <li>Counseling</li>
            <li>Food Assistance</li>
            <li>Study Spaces</li>
            <li>Career Services</li>
        </ul>
        `);
});

//starts the server (Express listens for incoming requests on port 3000)
app.listen(PORT, () => {
    //prints message in the terminal
    console.log(`Server runnign at http://localhost:${PORT}`)
});