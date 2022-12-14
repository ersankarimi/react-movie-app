# Simple React Movie App

This is a submission for Project React at Codepolitan x Catamyst Project.

This is a simple movie app that displays several lists of movies obtained via the TMDB API.

## Links

### Production

https://ersan-react-movieapp.netlify.app/

### Local

- http://localhost:5173

## Main Features

- Show movies list on the screen

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
- Misc
  - Prettier

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

Format all files with Prettier:

```sh
npm run format
```

## Deployment

### Netlify

Add your key at Environment Variables

```sh
VITE_TMDB_KEY=YOUR_KEY
```

## REST API Documentation

Base URL: `https://api.themoviedb.org/3/`

API Documentation : [https://developers.themoviedb.org/3](https://developers.themoviedb.org/3)
