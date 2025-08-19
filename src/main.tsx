import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./pages/App";
import { Layout } from "./components/layouts";
import { HowItWorks } from "./pages/howItWorks/howItWorks";
import { ImageLayout } from "./components/layouts/imageLayout";
import { Services } from "./pages/services/services";
import { UseCase } from "./pages/use-cases";
import { Pricing } from "./pages/pricing/pricing";
import { BlogPage } from "./pages/blog/index";
import { BlogPageId } from "./pages/blog/single";
import { AboutUs } from "./pages/about-us";
import { OutPlatform } from "./pages/our-platform";
import { ContactUs } from "./pages/contact-us";

import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { ServicesBrandingAndIdentity } from "./pages/services/subPages/brandingAndIdentity";
import { ServicesSocialMediaCreatives } from "./pages/services/subPages/socialMediaCreatives";
import { ServicesMarketingAndAds } from "./pages/services/subPages/marketingAndAds";
import { ServicesConceptDesign } from "./pages/services/subPages/conceptDesign";
import { ServicesIllustrationDesign } from "./pages/services/subPages/illustrationDesign";
import { ServicesContentProduction } from "./pages/services/subPages/contentProduction";
import { ServicesWebsiteAndOnlineStores } from "./pages/services/subPages/websiteAndOnlineStore";
import { UseCaseMarketingAgencies } from "./pages/use-cases/subpages/marketingAgencies";
import { UseCaseOnlineStore } from "./pages/use-cases/subpages/onlineStores";
import { UseCaseAppTechStartups } from "./pages/use-cases/subpages/appTechStartups";
import { UseCaseCoachAndConsultant } from "./pages/use-cases/subpages/coachesAndConsultants";

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    backend: {
      loadPath: '/languages/{{lng}}/index.json',
    },
    detection: {
      order: ['queryString', 'cookie'],
      caches: ['cookie']
    },
    interpolation: {
      escapeValue: false 
    },
      returnObjects: true,
    keySeparator: '.', // if you want to re-enable it (not "true", but actual separator value)
  });


const root = document.getElementById("root");


ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <I18nextProvider i18n={i18n}>
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<App />} />
            </Route>
            <Route element={<ImageLayout />}>
                <Route path="/how-it-works" element={<HowItWorks />} />
            </Route>
            <Route element={<ImageLayout />}>
                <Route path="/services" element={<Services />} />
                <Route path="/services/branding-and-identity" element={<ServicesBrandingAndIdentity />} />
                <Route path="/services/social-media-creatives" element={<ServicesSocialMediaCreatives />} />
                <Route path="/services/marketing-and-ads" element={<ServicesMarketingAndAds />} />
                <Route path="/services/concept-design" element={<ServicesConceptDesign />} />
                <Route path="/services/illustration-design" element={<ServicesIllustrationDesign />} />
                <Route path="/services/content-production" element={<ServicesContentProduction />} />
                <Route path="/services/website-and-online-stores" element={<ServicesWebsiteAndOnlineStores />} />
            </Route>
            <Route element={<ImageLayout />}>
                <Route path="/pricing" element={<Pricing />} />
            </Route>
            <Route element={<ImageLayout />}>
                <Route path="/use-cases" element={<UseCase />} />
                <Route path="/use-cases/marketing-agencies" element={<UseCaseMarketingAgencies />} />
                <Route path="/use-cases/online-stores" element={<UseCaseOnlineStore />} />
                <Route path="/use-cases/app-tech-startups" element={<UseCaseAppTechStartups />} />
                <Route path="/use-cases/coaches-consultants" element={<UseCaseCoachAndConsultant />} />
                
            </Route>
            <Route element={<Layout />}>
                <Route path="/blog" element={<BlogPage />} />
            </Route>    
            <Route element={<ImageLayout />}>
                <Route path="/blog/:id" element={<BlogPageId />} />
            </Route> 
            <Route element={<ImageLayout />}>
                <Route path="/why-us" element={<AboutUs />} />
            </Route>  
                    <Route element={<ImageLayout />}>
                <Route path="/our-platform" element={<OutPlatform />} />
            </Route> 
            <Route element={<Layout />}>
                <Route path="/contact" element={<ContactUs />} />
            </Route>                  


        </Routes>
    </I18nextProvider>
  </BrowserRouter>
);
