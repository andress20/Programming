INSTALATION AND SETUP JSDOC (CREATE AUTOMATIC WEB DOCUMENTATION) 

1. npm init => create package.json
2. npm install --save-dev jsdoc  (No local instalation just project)
3. create jsdoc.json in the main project directory (./root) => jsdoc is the config file 
4. package.json insert jsdoc script => <script tag>

    "docs": "jsdoc -c jsdoc.json"

5. create src folder and index.js file => in root project directory (index.js and any other file here are gonna be reading for bulild the documentation html file)
6. npm run docs => this creates docs folder and index.html file (this is the final documentation)

nueva linea
segunda linea
