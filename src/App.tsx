import { Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import NotFound from "./pages/NotFound";

// Import actual TARX page components from app directory
import HomePage from "../app/(shell)/page";
import ApplicationsPage from "../app/applications/page";
import AudioGenerationPage from "../app/audio-generation/page";
import CodeGenerationPage from "../app/code-generation/page";
import VideoGenerationPage from "../app/video-generation/page";
import PhotoEditingPage from "../app/photo-editing/page";
import GenerationSocialsPostPage from "../app/generation-socials-post/page";
import EducationFeedbackPage from "../app/education-feedback/page";
import CheckoutPage from "../app/checkout/page";
import PricingPage from "../app/pricing/page";
import SignInPage from "../app/sign-in/page";
import ThanksPage from "../app/thanks/page";
import UpdatesAndFaqPage from "../app/updates-and-faq/page";
import WorkspacePage from "../app/workspace/page";
import PageListPage from "../app/pagelist/page";
import FeaturesPage from "../app/features/page";
import DesignSystemPage from "../app/design-system/page";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><HomePage /></Layout>} />
      <Route path="/applications" element={<Layout><ApplicationsPage /></Layout>} />
      <Route path="/audio-generation" element={<Layout><AudioGenerationPage /></Layout>} />
      <Route path="/code-generation" element={<Layout><CodeGenerationPage /></Layout>} />
      <Route path="/video-generation" element={<Layout><VideoGenerationPage /></Layout>} />
      <Route path="/photo-editing" element={<Layout><PhotoEditingPage /></Layout>} />
      <Route path="/generation-socials-post" element={<Layout><GenerationSocialsPostPage /></Layout>} />
      <Route path="/education-feedback" element={<Layout><EducationFeedbackPage /></Layout>} />
      <Route path="/checkout" element={<Layout><CheckoutPage /></Layout>} />
      <Route path="/pricing" element={<Layout><PricingPage /></Layout>} />
      <Route path="/sign-in" element={<Layout><SignInPage /></Layout>} />
      <Route path="/thanks" element={<Layout><ThanksPage /></Layout>} />
      <Route path="/updates-and-faq" element={<Layout><UpdatesAndFaqPage /></Layout>} />
      <Route path="/workspace" element={<Layout><WorkspacePage /></Layout>} />
      <Route path="/pagelist" element={<Layout><PageListPage /></Layout>} />
      <Route path="/features" element={<Layout><FeaturesPage /></Layout>} />
      <Route path="/design-system" element={<Layout><DesignSystemPage /></Layout>} />
      <Route path="*" element={<Layout><NotFound /></Layout>} />
    </Routes>
  );
}
