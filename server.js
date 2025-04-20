import Fastify from "fastify";
import cors from '@fastify/cors';
import dotenv from 'dotenv';
dotenv.config();
// import pool from "./database.js";
import { verifyToken } from "./Middleware/AuthMiddleware.js";
import resume from './resume.json' with { type: "json" };
import projects from './projects.json' with {type: "json"};
import about from './about.json' with {type: 'json'};
import contact from './contact.json' with {type: 'json'};
const server = Fastify();

await server.register(cors, {
    origin: '*',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
});


// 
server.get("/", (req, rep) => {
    try {
        rep.send({
            Message:
                "Greetings Stranger! I see you've stumbled upon this API resume quest. You might be thinking that I'm trying to be innovative, but honestly, I'm just a bit lazy to create fancy 45-degree floating marquee animations. You can proceed to explore the following routes:",
            routes: [
                { resume: "/api/ayush/resume" },
                { projects: "/api/ayush/projects" },
                { about: "/api/ayush/about" },
                { contact: "/api/ayush/contact" },
                { end: "api/bye-bye" },
            ]

        });



    } catch (error) {
        console.log(error);
    }
})
// send resume as json 
server.get("/api/ayush/resume", async (req, rep) => {
    try {
        return rep.send(resume);
    } catch (error) {
        console.log(error);
    }
});


// send projects as json
server.get("/api/ayush/projects", async (req, rep) => {
    try {
        return rep.send(projects);

    } catch (error) {
        console.log(error);
    }
})

//about me 
server.get("/api/ayush/about", (req, rep) => {
    try {
        return rep.send(about)
    } catch (error) {
        console.log(error);
    }
})
// contact 
server.get("/api/ayush/contact", (req, rep) => {
    try {
        return rep.send(contact)
    } catch (error) {
        console.log(error);
    }
})
//end message
server.get("/api/bye-bye", (req, rep) => {
    try {
        return rep.send({
            Sayonara:
                "I see you have finished your quest; I am very glad, and I hope we see each other soon."
        })
    } catch (error) {
        console.log(error);
    }
})

// fastify takes port object instead of a number
server.listen({ port: process.env.PORT }, err => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log('Server running on http://localhost:1000');
});