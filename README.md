
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.


# Steps To Run The App
## Installation of Dependencies

```bash
$ yarn install
```

# Setup Env File
1. Copy .env.example file and paste it to the root directory
2. Rename .env.example to .env
3. Add the values for your database configuration (Database name, host ,username ,password , port)

# Generate and Run Migration
1. To Generate a database migration , run this command:
- yarn migration:generate
2. Run the generated migration to create tables to the database. Run this command:
- yarn migration:run

# Start the app
- yarn start