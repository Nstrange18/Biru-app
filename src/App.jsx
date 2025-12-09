import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import RootLayout from "./Layout/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import CaseStudy from "./pages/CaseStudy";
import GetStarted from "./pages/GetStarted";
import StartProject from "./pages/StartProject";
import BookConsultation from "./pages/BookConsultation";
import { Toaster } from "sonner";
// import { SnackbarProvider } from "notistack";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/case-study" element={<CaseStudy />} />
        <Route path="/start-project" element={<StartProject />} />
        <Route path="/book-consultation" element={<BookConsultation />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  );

  return (
    <div className="body">
      <Toaster />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
