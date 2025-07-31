# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## AI Chatbot Integration

### Backend Setup

1. **Navigate to the backend folder:**
   ```sh
   cd server
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Set your OpenAI API key:**
   - Copy your OpenAI API key from https://platform.openai.com/api-keys
   - Create a `.env` file in the `server/` folder:
     ```env
     OPENAI_API_KEY=sk-...
     ```
4. **Start the backend server:**
   ```sh
   npm start
   ```
   The server will run on port 5000 by default.

### Frontend Setup

- The chatbot in your React app will send requests to `http://localhost:5000/chat`.
- Make sure the backend server is running when you use the chatbot.

### Deployment

- You can deploy the backend to services like Render, Vercel, or Heroku for production use.
- Update the frontend to use the deployed backend URL instead of `localhost`.
