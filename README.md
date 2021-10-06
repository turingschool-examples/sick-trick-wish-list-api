### This repo is used as an assessment during the course of the Turing modules, if you are viewing this repository outside the context of an assessment, you’re in violation of the Academic Integrity policy you agreed to as a student.

# Sick Trick Wish List API

This app is the back-end server for the Mod 3 FE mid-mod.

## Getting started

### Installation

1. Clone down this repository.
    - `git clone git@github.com:turingschool-examples/sick-trick-wish-list-api.git`
2. Change into the new directory.
    - `cd sick-trick-wish-list-api`
3. Install the dependencies.
    - `npm install`

### Usage

1. To fire up the server, run `node server.js` or `nodemon server.js`.

### Endpoints

| url | verb | options | sample response |
| ----|------|---------|---------------- |
| `http://localhost:3001/api/v1/tricks` | GET | not needed | Array of all existing tricks: `[{ stance: 'regular', name: 'kickflip', obstacle: 'flat ground', tutorial: 'www.learn2skate.com', id: 1}]` |
| `http://localhost:3001/api/v1/tricks` | POST | `{ stance: <String>, name: <String>, obstacle: <String>', tutorial: <String>}` | New birthday: `{stance: 'switch', name: 'heelflip', obstacle: 'flat ground', tutorial: 'www.learn2skate.com', id: 2}` |
| `http://localhost:3001/api/v1/tricks/:id` | DELETE | not needed | Array of all remaining tricks: `[{ stance: 'regular', name: 'kickflip', obstacle: 'flat ground', tutorial: 'www.learn2skate.com', id: 1}]` |


Note: All of these endpoints will return semantic errors if something is wrong with the request.
