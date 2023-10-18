import Navbar from "./components/nav";
import LandingPage from "./pages/landingPage";
import AboutUsPage from "./pages/aboutUsPage";
import IntroVideo from "./pages/introVideo";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between overflow-x-hidden">
      <LandingPage />
      <AboutUsPage />
      <IntroVideo />
    </main>
  );
}
