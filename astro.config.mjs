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
    head: [
      {
        tag: 'script',
        attrs: { src: '/simple-gate.js', defer: true },
      },
      {
        tag: 'script',
        content: `
          !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys getNextSurveyStep onSessionId".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
          posthog.init('phc_iJUSH6ZAr6VCa98uCAhsyzQtcRnbqBaPrzt3YXGGfYH',{api_host:'https://us.i.posthog.com', person_profiles: 'identified_only' // or 'always' to create profiles for anonymous users as well
          })
        `,
      },
    ],
    
    sidebar: [{
      label: 'Intro to Wintro',
      // autogenerate: { directory: 'intro-to-wintro' }
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'What is Wintro?',
        link: '/intro-to-wintro/what-is-wintro'
      }, {
        label: 'How Wintro Works',
        link: '/intro-to-wintro/how-wintro-works'
      }
      // {
      //   label: 'Plans & Access Levels',
      //   link: '/intro-to-wintro/plans-and-access-levels'
      // }, {
      //   label: 'Onboarding Checklist',
      //   link: '/intro-to-wintro/onboarding-checklist'
      // }, {
      //   label: 'Rollout Guide',
      //   link: '/intro-to-wintro/rollout-guide'
      // }, {
      //   label: 'Implementation Overview',
      //   link: '/intro-to-wintro/implementation-overview'
      // }
      ]
    },
    // {
    //   label: 'For Admins',
    //   collapsed: true,
    //   items: [
    //     {
    //       label: 'Getting Started',
    //       link: '/for-admins/getting-started'
    //     }, {
    //       label: 'Connect your Systems',
    //       link: '/for-admins/connect-your-systems'
    //     }, {
    //       label: 'Company Settings',
    //       link: '/for-admins/company-settings'
    //     }, {
    //       label: 'User Management',
    //       link: '/for-admins/user-management'
    //     }]
    // },

	{
      label: 'For Recruiters',
      // autogenerate: {
      //   directory: 'recruiters'
      // }
      // collapsed: true,
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
      label: 'For Employees & Externals',
      // autogenerate: {
      //   directory: 'employees'
      // }
      // collapsed: true,
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
      // collapsed: true,
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
      // collapsed: true,
      items: [{
        label: 'BambooHR',
        link: '/integrations/bamboohr'
      }, {
        // label: 'Browser Extension',
        // link: '/integrations/browser-extension'
      // }, {
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
        label: 'Microsoft Entra ID - SCIM',
        link: '/integrations/microsoft-entra-id-scim'
      }, {
        label: 'Microsoft Entra ID - SSO',
        link: '/integrations/microsoft-entra-id-sso'
      }, {
        label: 'Microsoft Outlook',
        link: '/integrations/microsoft-outlook'
      }, {
        label: 'Microsoft Teams App',
        link: '/integrations/microsoft-teams-app'
      }, {
        label: 'Microsoft Teams Messaging',
        link: '/integrations/microsoft-teams-messaging'
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