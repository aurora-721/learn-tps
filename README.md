# How to build a simple sdk with typescript

Tutorial followed https://dev.to/mendoza/how-to-build-a-simple-sdk-on-typescript-21gg

Start new file by typing
```
npm init -y
```

## Install dependecies
```sh
npm install -D typescript
npm install -S axios
./node_modules/.bin/tsc --init
```
tsconfig.json:
```json
{
  "compilerOptions": {
    "target": "ES2015", /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */
    "module": "commonjs", /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */
    "strict": true, /* Enable all strict type-checking options. */
    "esModuleInterop": true, /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
    "skipLibCheck": true, /* Skip type checking of declaration files. */
    "forceConsistentCasingInFileNames": true, /* Disallow inconsistently-cased references to the same file. */
    "declaration": true,
    "outDir": "./dist",
  }
}
```

## Setup eslint and prettier
```
npx eslint --init
```
Eslint configuration:
[eslintconfig.png]
```
npm install -D prettier eslint-config-prettier eslint-plugin-prettier
```

Copy files in `.priettierrc.json` and `elintrc.json`.

## Set up testing
```
npm run build
mkdir testing
cd testing
npm init -y
npm install ..
```


## Publish 
set up a .gitignore file to ignore the changes in `/testing`.s
```
npm login #do all the steps necessary
npm publish
```