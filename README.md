# Cantine2025

A Nuxt 3 project with Nhost backend integration.

## Features

- Nuxt 3 with Vue 3
- Nhost backend integration
- Email authentication
- Protected routes
- TailwindCSS styling
- Pinia state management

## Setup

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Configure Nhost:
   - Create a project at [Nhost](https://nhost.io)
   - Copy your project's subdomain and region
   - Create a `.env` file with:
   ```
   NHOST_SUBDOMAIN=your-subdomain
   NHOST_REGION=your-region
   ```

4. Run the development server:
```bash
npm run dev
```

## Project Structure

- `pages/` - Application routes
- `layouts/` - Page layouts
- `components/` - Vue components
- `stores/` - Pinia stores
- `middleware/` - Route middleware

## Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy the `.output` directory to your hosting provider

## Environment Variables

Required environment variables:

- `NHOST_SUBDOMAIN`: Your Nhost project subdomain
- `NHOST_REGION`: Your Nhost project region