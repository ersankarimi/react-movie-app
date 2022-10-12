# Group Project Title

Project description with clear goal.

![Screenshot 1]()

![Screenshot 2]()

## Links

### Production

- https://project.vercel.app
- https://project.netlify.app
- https://project.example.com

### Local

- http://localhost:3000
- http://localhost:5173

## Main Features

- Show movie lists on the screen
- Search Movie

## Tech Stack

### Commerce

- HTML
- CSS
  - Tailwind CSS
- JavaScript
- Node.js & npm
- React
  - Vite v3
    - React Router v6
- Data Fetching
  - REST API: `swr`
- UI Components
  - Ariakit
  - Headless UI
  - Radix UI
- Misc
  - Prettier
  - ESLint

## Development

Install dependencies:

```sh
npm install
```

Run server in development mode:

```sh
npm run dev
```

Build for production:

```sh
npm run build
```

Start in production mode:

```sh
npm start
```

## Deployment

Details on deployment using Vercel or Netlify here.

## REST API Documentation

Base URL: `https://api.example.com`

### Resources

| Endpoint         | Method   | Description               |
| ---------------- | -------- | ------------------------- |
| `/resources`     | `GET`    | Get all resources         |
| `/resources/:id` | `GET`    | Get one resource by id    |
| `/resources`     | `POST`   | Create new resource       |
| `/resources/:id` | `PUT`    | Update one resource by id |
| `/resources/:id` | `PATCH`  | Patch one resource by id  |
| `/resources`     | `DELETE` | Remove all resources      |
| `/resources/:id` | `DELETE` | Remove one resource by id |
