import { Routes, Route } from "react-router-dom";
import TarxChatInterface from "@/components/TarxChatInterface";
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
      <Route path="/" element={<TarxChatInterface />} />
      <Route path="/applications" element={<ApplicationsPage />} />
      <Route path="/audio-generation" element={<AudioGenerationPage />} />
      <Route path="/code-generation" element={<CodeGenerationPage />} />
      <Route path="/video-generation" element={<VideoGenerationPage />} />
      <Route path="/photo-editing" element={<PhotoEditingPage />} />
      <Route path="/generation-socials-post" element={<GenerationSocialsPostPage />} />
      <Route path="/education-feedback" element={<EducationFeedbackPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/thanks" element={<ThanksPage />} />
      <Route path="/updates-and-faq" element={<UpdatesAndFaqPage />} />
      <Route path="/workspace" element={<WorkspacePage />} />
      <Route path="/pagelist" element={<PageListPage />} />
      <Route path="/features" element={<FeaturesPage />} />
      <Route path="/design-system" element={<DesignSystemPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
