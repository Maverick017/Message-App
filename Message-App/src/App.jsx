import { Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "./components/ErrorBoundary";
import SignInPage from "./pages/sign-in.page";
import SignUpPage from "./pages/sign-up.page";

export default function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </ErrorBoundary>
  );
}