import 'i18next';

// declare module 'i18next' {
//   interface CustomTypeOptions {
//     defaultNS: 'translation';
//     resources: {
//       translation: {
//         "loginBtn": string;
//   "getStartedBtn": string;
//   blogPage: {
//     header: {
//       title: string;
//       description: string;
//     };
//     intro: {
//       mainText: string;
//       additionalText: string;
//     };
//     sections: {
//       ourBlogs: {
//         title: string;
//         categories: [string, string, string, string, string];
//       };
//       latestArticles: {
//         title: string;
//         categories: [string, string, string, string, string];
//       };
//     };
//     subscribeSection: {
//       title: string;
//       description: string;
//       form: {
//         inputs: {
//           fullName: string;
//           emailAddress: string;
//         };
//         button: string;
//       };
//     };
//   };
  
//   blogSingle: {
//     pageTitle: string;
//     pageCategory: string;
//     author: string;
//     date: string;
//     introParagraph: string;
//     mistakes: any[];
//     finalThoughts: string;
//     previousArticle: {
//       label: string;
//       title: string;
//       description: string;
//     };
//     nextArticle: {
//       label: string;
//       title: string;
//       description: string;
//     };
//     sidebar: {
//       categoriesTitle: string;
//       categories: [string, string, string, string, string, string];
//     };
//   };
//   aboutUs: {
//     topBanner: {
//       headline: string;
//       subheadline: string;
//       buttons: {
//         startProject: string;
//         scheduleConsultation: string;
//       };
//     };
//     backgroundImageCards: {
//       card1: string;
//       card2: string;
//       card3: string;
//     };
//     whoWeAreSection: {
//       title: string;
//       description: string;
//       summary: string;
//       imageAlt: string;
//     };
//     keyPoints: [string, string, string];
//     ourMission: {
//       title: string;
//       content: string;
//       highlight: string;
//     };
//     ourStory: {
//       title: string;
//       content: string;
//       imageAlt: string;
//     };
//     founderMessage: {
//       text1: string;
//       text2: string;
//     };
//     whyWereDifferent: {
//       title: string;
//       cards: any[];
//     };
//     teamSection: {
//       title: string;
//       description: string;
//     };
//     growYourStore: {
//       headline: string;
//       subheadline: string;
//       buttons: {
//         applyAsSquad: string;
//         partnerWithUs: string;
//       };
//     };
//     letsBuildTogether: {
//       title: string;
//       subtitle: string;
//       description: string;
//       buttons: {
//         startProject: string;
//         scheduleConsultation: string;
//       };
//     };
//   };
//   contactUs: {
//     hero: {
//       title: string;
//       description: string;
//       buttons: {
//         startProject: string;
//         scheduleConsultation: string;
//       };
//     };
//     formSection: {
//       title: string;
//       description: string;
//       fields: {
//         name: string;
//         email: string;
//         company: string;
//         helpTopic: string;
//         helpTopicPlaceholder: string;
//         message: string;
//         messagePlaceholder: string;
//       };
//       submitButton: string;
//     };
//     contactInfo: {
//       email: {
//         label: string;
//         value: string;
//       };
//       liveChat: {
//         label: string;
//         value: string;
//       };
//       bookCall: {
//         label: string;
//         value: string;
//       };
//     };
//     joinSquad: {
//       title: string;
//       description: string;
//       button: string;
//     };
//   };
//   howItWorks: {
//     hero: {
//       title: string;
//       description: string;
//       buttons: {
//         startProject: string;
//         scheduleConsultation: string;
//       };
//     };
//     intro: {
//       statement: string;
//       description: string;
//     };
//     smallGridImagesAlt: string;
//     stepsSection: {
//       title: string;
//       steps: any[];
//     };
//     summary: {
//       text: string;
//       buttons: {
//         browsePipeline: string;
//         scheduleConsultation: string;
//       };
//     };
//     popularPacks: {
//       label: string;
//       title: string;
//       description: string;
//       buttons: {
//         browseAllServicesDesktop: string;
//         browseAllServicesMobile: string;
//       };
//     };
//     faq: {
//       items: any[];
//     };
//     finalCTA: {
//       title: string;
//       description: string;
//       buttons: {
//         startProject: string;
//         scheduleConsultation: string;
//       };
//     };
//   };
//   pricing: {
//     hero: {
//       title: string;
//       description: string;
//     };
//     intro: {
//       statement: string;
//       description: string;
//     };
//     plans: {
//       payPerProject: {
//         badge: string;
//         title: string;
//         features: [string, string, string, string];
//         cta: string;
//       };
//       monthlyPayment: {
//         title: string;
//         features: [string, string, string, string];
//         cta: string;
//       };
//       subscriptionPlans: {
//         comingSoon: string;
//         subtitle: string;
//         boxTitle: string;
//         features: [string, string, string, string];
//         cta: string;
//       };
//     };
//     included: {
//       sectionLabel: string;
//       title: string;
//       seeHowItWorks: string;
//       items: [string, string, string, string, string, string];
//     };
//     faq: {
//       title: string;
//       items: any[];
//     };
//     ctaBanner: {
//       title: string;
//       description: string;
//       startProject: string;
//       scheduleConsultation: string;
//     };
//   };
//   home: {
//     hero: {
//       title: string;
//       subtitle: string;
//       buttons: {
//         start: string;
//         schedule: string;
//       };
//     };
//     trusted: {
//       title: string;
//     };
//     whatIs: {
//       sectionTitle: string;
//       headline: string;
//       paragraphs: [string, string];
//       buttons: {
//         video: string;
//         howItWorks: string;
//       };
//     };
//     howItWorks: {
//       sectionTitle: string;
//       headline: string;
//       description: string;
//       steps: [string, string, string, string];
//       buttons: {
//         video: string;
//         services: string;
//       };
//     };
//     popularPacks: {
//       sectionTitle: string;
//       headline: string;
//       description: string;
//       button: string;
//     };
//     comparison: {
//       sectionTitle: string;
//       headline: string;
//       description: string;
//       summaries: [string, string];
//       buttons: {
//         open: string;
//         expert: string;
//       };
//     };
//     useCases: {
//       sectionTitle: string;
//       headline: string;
//       cards: [{title:string, description:string}, {title:string, description:string}, {title:string, description:string}, {title:string, description:string}];
//       button: string;
//     };
//     whyHeroesHive: {
//       sectionTitle: string,
//       "headline": string,
//       "features": {
//         "vettedSquads": {
//           "title": string,
//           "description": string
//         },
//         "builtInWorkflow": {
//           "title": string,
//           "description": string
//         },
//         "squadManagers": {
//           "title":string,
//           "description":string
//         },
//         "flexiblePayment": {
//           "title":string,
//           "description": string
//         },
//         "securedPayment": {
//           "title": string,
//           "description": string
//         }
//       },
//       "ctaButton":string
//     };

//     endorsement: {
//       title: string;
//       description: string;
//       quote: string;
//       name: string;
//       location: string;
//     };
//     cta: {
//       headline: string;
//       subheadline: string;
//       note: string;
//       selectDate: string;
//     };
//     "comparisonTable": {
//       "header": {
//         "title": string,
//         "columns": [string,string, string, string, string]
//       },
//       "rows": [
//         {
//           "feature": string,
//           "values": [string, string, string, string]
//         },
//         {
//           "feature": string,
//           "values": [string, string, string, string]
//         },
//         {
//          "feature": string,
//           "values": [string, string, string, string]
//         },
//         {
//           "feature": string,
//           "values": [string, string, string, string]
//         },
//         {
//           "feature": string,
//           "values": [string, string, string, string]
//         },
//         {
//           "feature": string,
//           "values": [string, string, string, string]
//         }
//       ]
//     },
//   };
//   services: {
//     header: {
//       title: string;
//       description: string;
//       buttons: {
//         startProject: string;
//         freeConsultation: string;
//       };
//     };
//     intro: {
//       text1: string;
//       text2: string;
//     };
//     whatIncluded: {
//       subtitle: string;
//       headline: string;
//       note: string;
//     };
//     whoThisFor: {
//       subtitle: string;
//       headline: string;
//       "audienceGrid": {
//         "items": [
//           {
//             "text": string
//           },
//            {
//             "text": string
//           },
//          {
//             "text": string
//           },
//            {
//             "text": string
//           },
//         ]
//       };
//     };
//     walkAwayWith: {
//       title: string;
//       heading:string;
//       items: [string, string, string, string];
//     };
//     whyHeroes: {
//       title: string;
//       features: {
//         workflow: {
//           headline: string;
//           description: string;
//         };
//         squads: {
//           headline: string;
//           description: string;
//         };
//         managers: {
//           headline: string;
//           description: string;
//         };
//         revisions: {
//           headline: string;
//           description: string;
//         };
//         payment: {
//           headline: string;
//           description: string;
//         };
//         security: {
//           headline: string;
//           description: string;
//         };
//       };
//       learnMore: string;
//     };
//     ourWork: {
//       subtitle: string;
//       headline: string;
//       seeMoreButton: string;
//       projects: [string, string, string, string];
//     };
//     growSection: {
//       title: string;
//       subtitle: string;
//       buttons: {
//         startProject: string;
//         freeConsultation: string;
//       };
//     };
//   };
//   useCase: {
//     header: {
//       title: string;
//       description: string;
//       buttons: {
//         startProject: string;
//         freeConsultation: string;
//       };
//     };
//     intro: {
//       text: string;
//       highlight: string;
//     };
//     whatWeHelp: {
//       title: string;
//       subtitle: string;
//       footer: string;
//     };
//     suggestedPipelines: {
//       title: string;
//       browse: string;
//       packs: {
//         brand: {
//           title: string;
//           description: string;
//         };
//         store: {
//           title: string;
//           description: string;
//         };
//         content: {
//           title: string;
//           description: string;
//         };
//       };
//     };
//     whyHeroes: {
//       title: string;
//       features: {
//         squads: string;
//         manager: string;
//         pricing: string;
//         solution: string;
//         dashboard: string;
//         protection: string;
//       };
//       learnMore: string;
//     };
//     growSection: {
//       title: string;
//       description: string;
//       buttons: {
//         startProject: string;
//         freeConsultation: string;
//       };
//     };
//   };
//    ourPlatform : {
//   hero: {
//     title: string;
//     subtitle: string;
//     buttons: {
//       start: string;
//       consult: string;
//     };
//   };
//   whyPlatform: {
//     heading: string;
//     title: string;
//     description: string;
//     points: string[];
//     footer: string;
//   };
//   whatPowers: {
//     heading: string;
//     title: string;
//   };
//   features: {
//     pipelines: FeatureSection;
//     squads: FeatureSection;
//     activityLog: FeatureSection;
//     squadManager: FeatureSection;
//     payments: FeatureSection;
//   };
//   seeIt: {
//     heading: string;
//     title: string;
//   };
//   whyItWorks: {
//     heading: string;
//     title: string;
//     subtitle: string;
//     buttons: {
//       howItWorks: string;
//       browseServices: string;
//     };
//   };
//   cta: {
//     title: string;
//     description: string;
//     buttons: {
//       start: string;
//       consult: string;
//     };
//   };
// };
//    footer: {
//     tagline: string;
//     sections: {
//       services: {
//         title: string;
//         items: string[];
//       };
//       useCases: {
//         title: string;
//         items: string[];
//       };
//       navigation: {
//         title: string;
//         items: string[];
//       };
//       legal: {
//         title: string;
//         items: string[];
//       };
//     };
//     copyright: string;
//     social: {
//       facebook: string;
//       instagram: string;
//       linkedin: string;
//     };
//   };
//     };
//     };
//   }
// }
//uncomment if automcomplete needed



type FeatureSection = {
  title: string;
  description: string;
};