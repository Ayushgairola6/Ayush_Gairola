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
import { readFile } from "fs/promises";
import path from "path";
const server = Fastify();

await server.register(cors, {
    origin: '*',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
});


// 
server.get("/", async (req, rep) => {
    try {
        const filePath = path.resolve("index.html");
        const htmlContent = await readFile(filePath, "utf8");
        rep.type("text/html").send(htmlContent);



    } catch (error) {
        console.log(error);
    }
})
// send resume as json 
server.get("/api/ayush/resume", async (req, rep) => {
    try {
        const prettyJson = JSON.stringify(resume, null, 2);

        const html = `
          <html>
            <head>
              <title>📜 Resume of the Tarnished</title>
              <style>
                body {
                  background-color: #0d0d0d;
                  color: #00ffcc;
                  font-family: monospace;
                  padding: 20px;
                }
                pre {
                  white-space: pre-wrap;
                  word-wrap: break-word;
                }
              </style>
            </head>
            <body>
              <h1>📜 Resume of the Tarnished</h1>
              <pre>${prettyJson}</pre>
            </body>
          </html>
        `;

        rep.type('text/html').send(html);
    } catch (error) {
        console.log(error);
    }
});


// send projects as json
server.get("/api/ayush/projects", async (req, rep) => {
    try {
        const prettyJson = JSON.stringify(projects, null, 2);
        const html = `
        <html>
          <head>
            <title>📜 Resume of the Tarnished</title>
            <style>
              body {
                background-color: #0d0d0d;
                color: #00ffcc;
                font-family: monospace;
                padding: 20px;
              }
              pre {
                white-space: pre-wrap;
                word-wrap: break-word;
              }
            </style>
          </head>
          <body>
            <h1>📜 Resume of the Tarnished</h1>
            <pre>${prettyJson}</pre>
          </body>
        </html>
      `;

        rep.type('text/html').send(html);

    } catch (error) {
        console.log(error);
    }
})

//about me 
server.get("/api/ayush/about", (req, rep) => {
    try {
        const prettyJson = JSON.stringify(about, null, 2);
        const html = `
        <html>
          <head>
            <title>📜 Resume of the Tarnished</title>
            <style>
              body {
                background-color: #0d0d0d;
                color: #00ffcc;
                font-family: monospace;
                padding: 20px;
              }
              pre {
                white-space: pre-wrap;
                word-wrap: break-word;
              }
            </style>
          </head>
          <body>
            <h1>📜 Resume of the Tarnished</h1>
            <pre>${prettyJson}</pre>
          </body>
        </html>
      `;

        rep.type('text/html').send(html);
    } catch (error) {
        console.log(error);
    }
})
// contact 
server.get("/api/ayush/contact", (req, rep) => {
    try {
        const prettyJson = JSON.stringify(contact, null, 2);
        const html = `
        <html>
          <head>
            <title>📜 Resume of the Tarnished</title>
            <style>
              body {
                background-color: #0d0d0d;
                color: #00ffcc;
                font-family: monospace;
                padding: 20px;
              }
              pre {
                white-space: pre-wrap;
                word-wrap: break-word;
              }
            </style>
          </head>
          <body>
            <h1>📜 Resume of the Tarnished</h1>
            <pre>${prettyJson}</pre>
          </body>
        </html>
      `;

        rep.type('text/html').send(html);
    } catch (error) {
        console.log(error);
    }
})
//end message
server.get("/api/bye-bye", async (req, rep) => {
    try {
        const filePath = path.resolve("end.html");
        const htmlContent = await readFile(filePath, "utf8");
        rep.type("text/html").send(htmlContent);
    } catch (error) {
        console.log(error);
    }
})

// fastify takes port object instead of a number
server.listen({ port: PORT, host: '0.0.0.0' }, err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });