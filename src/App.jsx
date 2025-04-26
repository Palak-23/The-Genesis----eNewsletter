import React from "react";
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
import './styles/flipbook.css';
import Home from './pages/Home';
import About from './pages/About';
import Archives from './pages/Archives';
import NewsletterView from './pages/NewsletterView';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="archives" element={<Archives />} />
      <Route path="newsletters/:id" element={<NewsletterView />} />
      <Route path="about" element={<About />} />
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
