import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Services } from "../pages/Services";
import { Projects } from "../pages/Projects";
import { Quote } from "../pages/Quote";
import { Contact } from "../pages/Contact";
import { Privacy } from "../pages/Privacy";
import { NotFound } from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "quienes-somos", element: <About /> },
      { path: "servicios", element: <Services /> },
      { path: "proyectos", element: <Projects /> },
      { path: "cotizacion", element: <Quote /> },
      { path: "contacto", element: <Contact /> },
      { path: "privacidad", element: <Privacy /> },
      { path: "*", element: <NotFound /> }
    ]
  }
]);
