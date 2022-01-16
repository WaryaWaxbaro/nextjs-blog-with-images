This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Nextjs Blog With Images

## Prisma and Postgres

- Part of this project is based on Check out our [How to Build a Fullstack App with Next.js, Prisma, and PostgreSQL](https://vercel.com/guides/nextjs-prisma-postgres) for more details.

### Steps of connecting the project to database using Prisma and Postgresql

1. Install Prisma

```
npm install prisma --save-dev
```

2. Use the Prisma CLI to bootstrap a basic Prisma setup using the following command:

```
npx prisma init

// Result after the command
shaku@DESKTOP-LRM6ULR MINGW64 ~/Documents/nextjs/nextjs-blog-images (main)
$ yarn prisma init
yarn run v1.22.10
$ C:\Users\shaku\Documents\nextjs\nextjs-blog-images\node_modules\.bin\prisma init

✔ Your Prisma schema was created at prisma/schema.prisma
  You can now open it in your favorite editor.

warn You already have a .gitignore. Don't forget to exclude .env to not commit any secret.

Next steps:
1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver or mongodb (Preview).
3. Run yarn prisma db pull to turn your database schema into a Prisma schema.
4. Run yarn prisma generate to generate the Prisma Client. You can then start querying your database.

More information in our documentation:
https://pris.ly/d/getting-started

```

3. Setup env and add db setting as shown below

```
// .env
DATABASE_URL="postgresql://giwuzwpdnrgtzv:d003c6a604bb400ea955c3abd8c16cc98f2d909283c322ebd8e9164b33ccdb75@ec2-54-170-123-247.eu-west-1.compute.amazonaws.com:5432/d6ajekcigbuca9"
```

4. Modify and add database tables to schema

```
schema.prisma
```

5. Create the tables in your database using the Prisma CLI.

```
npx prisma db push
```

6. After table has been created, you can use prisma studio to add dummy data, open prisma studio with this command

```
npx prisma db push

// After successful connection
Your database is now in sync with your schema. Done in 2.77s
```

7. To access your database from Next.js using Prisma. Install and generate Prisma Client

```
npm install @prisma/client
```

8. Add some initial dummy data using Prisma Studio

```
npx prisma studio

```

9. Create /lib/prisma

```
import { PrismaClient } from "@prisma/client";

let prisma = PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;
```

## Updating prisma data attributes

- Adding attribute to database
- After modifying and a new field has been added run **_prisma db push_**

```
shaku@DESKTOP-LRM6ULR MINGW64 ~/Documents/nextjs/nextjs-blog-images (main)
$ yarn prisma db push
yarn run v1.22.10
$ C:\Users\shaku\Documents\nextjs\nextjs-blog-images\node_modules\.bin\prisma db push
Environment variables loaded from .env
Prisma schema loaded from prisma\schema.prisma
Datasource "db": PostgreSQL database "defaultdb", schema "public" at "nextjs-blog-db-postgresql-do-user-10267075-0.b.db.ondigitalocean.com:25060"


⚠️ We found changes that cannot be executed:

  • Added the required column `image` to the `Post` table without a default value. There are 7 rows in this table, it is not possible to execute this step.


√ To apply this change we need to reset the database, do you want to continue? All data will be lost. ... yes
The PostgreSQL database "defaultdb" from "nextjs-blog-db-postgresql-do-user-10267075-0.b.db.ondigitalocean.com:25060" was successfully reset.

Your database is now in sync with your schema. Done in 14.33s

✔ Generated Prisma Client (3.8.0 | library) to .\node_modules\@prisma\client in 96ms

Done in 19.88s
```

## Adding more fields with migration

- Follow Prisma Migrate tutorial [Prisma Migrate](https://www.prisma.io/docs/concepts/components/prisma-migrate).

## Uploading photos to Digitalocean space

- How To Upload a File to Object Storage with Node.js [How To Upload a File to Object Storage with Node.js](https://www.digitalocean.com/community/tutorials/how-to-upload-a-file-to-object-storage-with-node-js).
