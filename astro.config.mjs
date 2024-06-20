import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.wintro.ai',
  redirects: {
    '/': '/intro-to-wintro/what-is-wintro'
  },
  // base: 'docs',
  integrations: [starlight({
    title: 'Docs',
    logo: {
      light: './src/assets/logo_full_light.png',
      dark: './src/assets/logo_full_dark.png'
    },
    favicon: '/favicon-32x32.png',
    customCss: [
    // Add custom CSS to the docs.
    './src/custom.css'],
    social: {
      linkedin: 'https://www.linkedin.com/company/wintroai/',
      // github: 'https://www.github.com/wintro-ai/docs/',
      rss: 'https://www.wintro.ai/'
    },
    sidebar: [{
      label: 'Intro to Wintro',
      // autogenerate: { directory: 'intro-to-wintro' }
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'What is Wintro?',
        link: '/intro-to-wintro/what-is-wintro'
      }, {
        label: 'Request a Demo',
        link: '/intro-to-wintro/request-a-demo'
      }]
    }, 
	{
      label: 'For Recruiters',
      // autogenerate: {
      //   directory: 'recruiters'
      // }
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'Getting Started',
        link: '/for-recruiters/getting-started'
      }, {
        label: 'Connect your Systems',
        link: '/for-recruiters/connect-your-systems'
      }, {
        label: 'Invite your Colleagues',
        link: '/for-recruiters/invite-your-colleagues'
      }, {
        label: 'Find Candidates',
        link: '/for-recruiters/find-candidates'
      }, {
        label: 'Review Candidates',
        link: '/for-recruiters/review-candidates'
      }, {
        label: 'Nudge your Colleagues',
        link: '/for-recruiters/nudge-your-colleagues'
      }, {
        label: 'Track Suggestions',
        link: '/for-recruiters/track-suggestions'
      }, 
      // {
      //   label: 'Refer a Recruiter',
      //   link: '/for-recruiters/refer-a-recruiter'
      // }
    ]
    }, {
      label: 'For Employees',
      // autogenerate: {
      //   directory: 'employees'
      // }
      items: [
        {
          label: 'Getting Started',
          link: '/for-employees/getting-started'
        }, {
          label: 'Connect your Network',
          link: '/for-employees/connect-your-network'
        }, {
          label: 'Review Suggestions',
          link: '/for-employees/review-suggestions'
        }, {
          label: 'Track your Referrals',
          link: '/for-employees/track-your-referrals'
        }]
    }, 
    // {
    //   label: 'For Candidates',
    //   autogenerate: {
    //     directory: 'candidates',
    //   }
    // }, 
	{
      label: 'Security & Compliance',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'General',
        link: '/security-compliance/general'
      }, {
        label: 'Architecture',
        link: '/security-compliance/architecture'
      }, {
        label: 'Data Processing',
        link: '/security-compliance/data-processing'
      }, {
        label: 'Access Controls',
        link: '/security-compliance/access-controls'
      }, {
        label: 'Integrations',
        link: '/security-compliance/integrations'
      }, {
        label: 'GDPR',
        link: '/security-compliance/gdpr'
      }, {
        label: 'Data Inquiry',
        link: '/security-compliance/data-inquiry'
      }, {
        label: 'Secure Development',
        link: '/security-compliance/secure-development'
      }, {
        label: 'Cognitive Services',
        link: '/security-compliance/cognitive-services'
      }]
    }, {
      label: 'Integrations',
      items: [{
        label: 'BambooHR',
        link: '/integrations/bamboohr'
      }, {
        label: 'Bullhorn',
        link: '/integrations/bullhorn'
      }, {
        label: 'Carerix',
        link: '/integrations/carerix'
      }, {
        label: 'Cornerstone',
        link: '/integrations/cornerstone'
      }, {
        label: 'Factorial HR',
        link: '/integrations/factorial-hr'
      }, {
        label: 'Greenhouse',
        link: '/integrations/greenhouse'
      }, {
        label: 'iCIMS',
        link: '/integrations/icims'
      }, {
        label: 'Jobvite',
        link: '/integrations/jobvite'
      }, {
        label: 'Lever',
        link: '/integrations/lever'
      }, {
        label: 'Oracle Recruiting',
        link: '/integrations/oracle-recruiting'
      }, {
        label: 'Personio',
        link: '/integrations/personio'
      }, {
        label: 'Recruitee',
        link: '/integrations/recruitee'
      }, {
        label: 'Sage',
        link: '/integrations/sage'
      }, {
        label: 'SAP SuccessFactors',
        link: '/integrations/sap-successfactors'
      }, {
        label: 'SmartRecruiters',
        link: '/integrations/smartrecruiters'
      }, {
        label: 'Teamtailor',
        link: '/integrations/teamtailor'
      }, {
        label: 'Workable',
        link: '/integrations/workable'
      }, {
        label: 'Workday',
        link: '/integrations/workday'
      }]
    }]
  }),
  tailwind({
	// Disable the default base styles:
	applyBaseStyles: false,
  }),]
});