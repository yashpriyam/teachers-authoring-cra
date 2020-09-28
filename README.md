# Curriculum Authoring Tool

It is a tool which allows educators to create a learn journey or a lesson plan for a subject, chapter or a topic.

## Project Demo

![](authoring-tool-toddle.gif)

```
1. Chapter 1
   - SubTopic 1
     - Concept 1
     - Concept 2
     - Concept 3
   - SubTopic 2
     - Concept 1
     - Concept 2
2. Chapter 2
   - SubTopic 1
     - Concept 1
     - Concept 2
```

Currently the tool supports 3 levels of nesting or parent-child relationship.

## Features

- [x] Row actions - Indent/ Outdent/ Delete
- [x] Preserve parent-child relations between nodes while deleting intending etc.
      Eg. deleting an element should also delete its children
- [x] The text in each row should be editable like a text box
- [x] Load/ Save - Functionality to generate and download a JSON output and
      to load the JSON to create the structure again
- [x] No backend used
- [x] UI features Eg. tooltips
- [x] UI Validations Eg. reaching highest or lowest indent, parent child relation

## Features which are WIP:

- Inline Editing option for every saved item
- Action buttons control when searched list is in display
- Test cases

## The tool allows DOWNLOADING the content with order preserved in a JSON format. A typical downloaded json would look like:

```
[
    {"value":"Shapes","level":1,"id":"23409d84-363d-4c90-a42d-d6ea0ddea340"},
    {"value":"Lines","level":2,"id":"be43eb8f-a976-476f-96f5-8ca71886b8d8"},
    {"value":"Triangles","level":2,"id":"7f9579ea-e4c4-4b66-8d98-62c695084a1c"},
    {"value":"Circles","level":2,"id":"23cf4811-e62e-402f-9db2-96d68102cb1c"},
    {"value":"Polynomials","level":1,"id":"402b041d-4eae-4b25-91b7-bdef574fd822"},
    {"value":"Numbers","level":1,"id":"3d8f358c-8bb8-4e87-883c-025bb2b81fb1"},
    {"value":"Fractions","level":2,"id":"1c24669c-5b73-4501-aa67-5399b98cabdb"},
    {"value":"Integers","level":2,"id":"f244e7bb-2c2c-4687-97b8-8aa31c0e47a0"},
    {"value":"RealNumbers","level":2,"id":"4486ec9b-9979-4510-81ff-177e9bb37b70"}
]
```

## Build with

This section should list any major frameworks that you built your project using.

- [React.js]
- [node-sass]

## Installation

Curriculam Authoring Tool requires [Node.js](https://nodejs.org/) v12+ to run.
Install the dependencies after cloning the repo and start the server.

```sh
$ git clone https://github.com/salil0001/curriculum-authoring-tool.git
$ yarn install
$ yarn start
```

## Contributions

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Clone the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request
   [React.js]: <https://reactjs.org/>
   [node-sass]:<https://www.npmjs.com/package/node-sass/>
   [Deployment-Link]:<https://www.npmjs.com/package/>
