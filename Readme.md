# Create a Basic NodeJS TypeScript Project

## Steps

### Step 1 : Project Initialization 
To get started, create a new folder named **nodejs-typescript-project-setup** and move into that directory.
Next, initialize it as an npm project:
```cmd
npm init -y
```
The -y flag tells npm init to automatically say “yes” to the defaults. You can always update this information later in your package.json file.
### Step 2 : Configure the Typescript Compiler
Now that your npm project is initialized, you are ready to install and set up TypeScript.

Run the following command from inside your project directory to install the TypeScript:
```cmd
npm install --save-dev typescript @types/node ts-node ts-node-dev
```
- **@types/node** is a package that contains the basic TypeScript types for NodeJS environment.
- **ts-node** and **ts-node-dev** are libraries that allows you to run .ts files directly, without a compilation step to JavaScript.

Then create the **tsconfig.json**(with default options) where we define all typescript compiler options
```cmd
npx tsc --init
```
Create the root directory *src* and output directory *dist* and modify the following configuration in **tsconfig.json**
```json
"rootDir": "./src", /* Specify the root folder within your source files. */
"outDir": "./dist",  /* Specify an output folder for all emitted files. */

```

### Step 2 : Configuring Typescript Linting with eslint
Now you can configure TypeScript linting for the project. First, we install eslint using npm:
```cmd
npm install --save-dev eslint
```
Then, run eslint’s initialization command to interactively set up the project:
```cmd
npx eslint --init
```
This will ask you a series of questions. For this project we’ll answer the following:

* How would you like to use ESLint?: To check syntax and find problems <br/>
* What type of modules does your project use?: JavaScript modules (import/export)<br/>
* Which framework does your project use?: None of these<br/>
* Does your project use TypeScript?: Yes<br/>
* Where does your code run?: Node<br/>
* What format do you want your config file to be in?: JavaScript<br/>

Finally, you will be prompted to install some additional eslint libraries. Choose Yes.
Run the linter to check all files with the .ts TypeScript extension:
```cmd
npx eslint . --ext .ts
```

### Step 3 : Adding the Scripts in the package.json
* ***npm run start*** - will start the server.
* ***npm run dev*** - will start the server and restarts it on every change.
* ***npm run lint*** -  Run the linter to check all files with the .ts TypeScript extension


# Some important features

- [JWT Token](#-jwt-token)


## JWT Token
The implementation is [here](src/jwtToken/tokenGenerator.ts). You can refer the official repo from [here](https://jwt.io/introduction) and the [codebase](https://github.com/auth0/node-jsonwebtoken)