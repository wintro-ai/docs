---
title: Find Candidates
description: Learn how to configure search filters, define match criteria, and use Wintro's AI to discover the best matching candidates.
---

Wintro automates the candidate discovery process by analyzing your vacancies and matching them with potential candidates from your colleagues' professional networks. The platform uses AI to evaluate candidates based on your specific requirements and scoring criteria, ensuring you receive high-quality referrals that align with your hiring needs.

This page will walk you through the candidate search process, from setting up filters to opening your vacancy for referrals. You'll learn how to:

- Configure search filters for initial candidate screening
- Define and fine-tune match criteria
- Preview and test your setup
- Open your vacancy for referrals

### Syncing and Adding Vacancies
Wintro automatically syncs with your ATS every 4 hours to import new vacancies. If you're not using an ATS, you can manually add positions through the **Add Vacancy** (+) button in the Vacancies tab. Each new vacancy, whether synced or manually added, will appear in your Vacancies tab ready for setup. If you haven't connected your ATS, please refer to the [Connect your Systems](/for-recruiters/connect-your-systems) section of our documentation.

### Creating a New Vacancy
To start the candidate search process, you first need to create a vacancy:

1. Navigate to the **Vacancies** tab in your dashboard
2. Click the **Plus (+)** button to add a new vacancy
3. Fill in the basic vacancy details:
   * **Title**: The role name for the position
   * **Location**: Where the position is based
   * **Employment Type**: Full-time, part-time, or contract
   * **Policy Type**: Remote, hybrid, or in-office
   * **Content**: The full job description
   * **Bounty**: Referral bonus amount, if applicable

These details form the foundation for Wintro's AI matching and will be used to pre-generate similar job titles and match criteria. You can modify these fields at any time before opening the vacancy for referrals.

### Candidate Search Setup Process
Once your vacancy is created, either click the **search** icon on that vacancy's row in the table, or simply navigate to the **Candidates** tab and select your vacancy. You'll be taken to the Search page where you can configure how Wintro finds and evaluates candidates. The process involves two main steps:

1. **Filter Step**: Configure search filters to determine which candidates to include
2. **Match Step**: Define scoring criteria to evaluate candidate quality

#### Step 1: Configure Search Filters
Click on your vacancy from the Candidates tab to access the Search page. The first step is configuring filters that determine which candidates from your employees' networks will be considered.

<div style="box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06); border-radius: 16px; overflow: hidden; margin: 40px 0;">

![Search Filters Setup](/filter-setup.png)

</div>

<!-- Screenshot needed: Candidates > [Vacancy] > Search page showing the Filter step with the sidebar open. Include: Similar Job Titles field filled with 3-4 examples, location added with radius slider visible, and the expanded Work/Education accordion sections showing additional filter options. Make sure the "Test Filters" button is visible at the bottom. -->

**The Foundation: Similar Job Titles or Majors**

The cornerstone of Wintro's candidate discovery is the **Similar Job Titles or Majors** field. This uses semantic similarity search to identify candidates with relevant backgrounds. For example:
- For a "Product Manager" role, add terms like "Product Manager", "Product Owner", "MBA", "Business Analyst"
- For an "Engineering" role, include "Software Engineer", "Computer Science", "Full Stack Developer"
- Mix both job titles and educational backgrounds for best results

These terms help Wintro understand the type of candidates you're looking for and form the initial pool from which filters are applied.

**Filter Philosophy: Cast a Wide Net**

When setting filters, remember this key principle: **Filters should exclude bad matches, not search for perfect ones**. The Match step will handle quality scoring, so:
- Keep filters broad to avoid missing hidden gems
- Only exclude clear mismatches (e.g., wrong location, competitor companies)
- Less-than-perfect candidates will be filtered out during the AI matching phase
- It's better to review more candidates than risk missing the ideal match

**Filter Categories:**

* **Location & Radius**:
  * Add target locations where candidates should be based
  * Adjust search radius (5-100km) to expand or narrow geographical scope
  * Leave empty to include candidates from all locations

* **Work Filters** (expand to configure):
  * **Companies to Include**: Target specific organizations (optional)
  * **Companies to Exclude**: Remove competitors or specific companies
  * **Minimum Work Experience**: Years of professional experience (0-30)
  * **Exclude Recruiter Networks**: Filter out recruiting professionals

* **Education Filters** (expand to configure):
  * **Schools to Include**: Target specific educational institutions (optional)
  * **Schools to Exclude**: Remove certain schools if needed
  * **Graduation Recency**: How recently candidates graduated (0-30 years)

* **Additional Filters**:
  * **Exclude Ex-employees**: Remove former employees if your policy requires

**Testing Your Filters:**
Click **Test Filters** to preview candidates. Look for:
- **Good diversity**: You should see various backgrounds and experience levels
- **Reasonable volume**: At least 20-30 candidates to work with
- **No obvious mismatches**: But don't worry about imperfect fits

If you see too few candidates, remove or broaden filters. If you see completely irrelevant results, add minimal exclusions.

#### Step 2: Define Match Criteria
After configuring your filters, click **Continue to Match Step** to define how Wintro's AI will evaluate and score candidates.

**Understanding the Match Criteria System**

The match criteria determine how candidates are evaluated based on your specific requirements:

* **Automatic Weighting**: Wintro automatically assigns weights based on criterion order
* **Order = Importance**: Your first criterion gets the highest weight, second gets less, third even less
* **Simply drag to reorder**: Move criteria up for more importance, down for less
* **AI Evaluation**: Each candidate is scored against all criteria to calculate overall match percentage

**Configuring Your Criteria**

<div style="box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06); border-radius: 16px; overflow: hidden; margin: 40px 0;">

![Match Criteria Configuration](/match-criteria.png)

</div>

<!-- Screenshot needed: Search page showing the Match step with sidebar open. Display the criteria list with 4-5 criteria visible, showing the drag handles for reordering. Include the "Edit Criteria" button and have the first criterion be something like "Currently active as [Role Name]". The "Test Match Criteria" button should be visible at the bottom. -->

Click the **Edit Criteria** button to customize your match criteria:

1. **Review Auto-Generated Criteria**: Wintro creates initial criteria from your vacancy
2. **Add Custom Criteria**: Include specific requirements for your role
3. **Order by Importance**: Drag criteria to reorder - most important at the top
4. **Remove Irrelevant Criteria**: Delete any that don't apply

**Recommended First Criterion: Current Role Validation**

For best results, place a current role criterion first to ensure strong matches:
- "Currently active as Product Manager or similar role"
- "Currently working in Software Engineering position"
- "Currently in Sales or Business Development role"

This helps ensure candidates score above the 50% threshold needed for employee suggestions and validates your Similar Job Titles filter.

**Effective Match Criteria Examples**

All criteria must be evaluable from LinkedIn profiles. Here are proven examples by category:

**For Product Manager Role:**
1. Currently active as Product Manager or Product Owner
2. 3+ years of experience in product management or business analysis
3. Experience in B2B SaaS or enterprise software
4. Technical background or Computer Science degree
5. Experience with agile methodologies and product analytics tools

**For Senior Software Engineer Role:**
1. Currently working as Software Engineer or Tech Lead
2. 5+ years of experience in backend development
3. Proficiency in Python, Java, or Node.js
4. Experience with cloud platforms (AWS, Azure, GCP)
5. Bachelor's degree in Computer Science or related field

**For Sales Executive Role:**
1. Currently in B2B Sales or Account Executive position
2. 3+ years of quota-carrying sales experience
3. Experience selling to enterprise clients (Fortune 500)
4. Track record in SaaS or technology sales
5. Bilingual in English and French

**For Marketing Manager Role:**
1. Currently active in Marketing Manager or similar role
2. 4+ years of digital marketing experience
3. Experience with performance marketing and paid media
4. Background in B2C e-commerce or retail
5. Proficiency in Google Analytics and marketing automation tools

**For Data Analyst Role:**
1. Currently working as Data Analyst or Business Analyst
2. 2+ years of experience in data analysis
3. Proficiency in SQL and Python or R
4. Experience with visualization tools (Tableau, PowerBI)
5. Bachelor's degree in Statistics, Mathematics, or Economics

**Criteria Types to Use:**

* **Current Role**: "Currently active as [role]" - recommended as first criterion
* **Years of Experience**: "X+ years of experience in [specific area]"
* **Industry Experience**: "Experience in [specific industry/domain]"
* **Technical Skills**: "Proficiency in [specific tools/technologies]"
* **Education**: "Bachelor's/Master's degree in [field]"
* **Language Skills**: "Bilingual in [languages]" or "Fluent in [language]"
* **Company Type**: "Experience at startups/scale-ups/enterprises"
* **Leadership**: "Experience managing teams of X+ people"
* **Career Progression Fit**: "Logical career progression from current role to this position"
  - Filters out overqualified candidates (e.g., founders, C-level executives for mid-level roles)
  - Ensures the role represents a sensible next step in their career
  - Example: "Not currently in senior executive or founder position" for a manager role

**Testing Your Match Criteria**

Click **Test Match Criteria** to see how candidates score:

1. Review the top-scoring candidates
2. Check if the order makes sense for your needs
3. Reorder criteria if certain aspects need more weight
4. Test again after changes

The key is ensuring your top candidates genuinely match your ideal profile and score above 50% for employee visibility.

### Opening Your Vacancy for Referrals

Once you're satisfied with both your filters and match criteria, you're ready to open your vacancy for employee referrals.

**Final Review**

Before opening, ensure you have:
- Tested your filters and reviewed the candidate pool
- Configured and tested your match criteria
- Verified that high-scoring candidates meet your expectations

**Opening the Vacancy**

<div style="box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06); border-radius: 16px; overflow: hidden; margin: 40px 0;">

![Ready to Open Vacancy](/open-vacancy.png)

</div>

<!-- Screenshot needed: Search page after testing both filters and match criteria, showing the candidates table with AI-matched candidates visible (with match percentages in a column). The green "Open Vacancy" button should be prominently visible in the top-right corner. Include a few candidate rows showing scores above 50% to demonstrate good matches. -->

Click the green **Open Vacancy** button in the top right corner of the Search page. This action:

1. **Initiates Candidate Search**: Wintro searches across all connected employees' networks
2. **Applies Your Configurations**: Uses your filters to identify candidates and your criteria to score them
3. **Distributes Matches**: Sends the best-matching candidates to relevant employees
4. **Enables Referrals**: Employees can start reviewing and referring candidates immediately

**Important Notes**

* **Configuration Lock**: Once opened, your filter and match settings are locked to ensure consistent evaluation
* **Processing Time**: The initial search may take a few minutes depending on your network size
* **Cooldown Period**: After closing a vacancy, there's a 1 hour cooldown before you can reopen it with new search filters and match criteria
* **Live Updates**: New employees joining you Wintro will automatically get suggestions for an open vacancy once they connect their network

**Managing Open Vacancies**

While your vacancy is open, you will be redirected to the **Live** tab where you can:
- Shortlist candidates, so the candidate will be added to your shortlist where you can track them and reach out yourself
- Reject candidates, so they won't show up any longer in team members' suggestions
- Nudge team members to refer candidates
- View detailed matching and reasoning for each candidate
- Close the vacancy at any time from here, or from the Vacancies tab

### Best Practices

**Filter Setup: Think Exclusion, Not Inclusion**
- Use filters to remove obviously wrong candidates, not to find perfect ones
- Start with just Similar Job Titles/Majors and location - often that's enough
- Only add more filters if your test results show clear problems
- Remember: the AI matching step will handle quality scoring

**Similar Job Titles Strategy**
- Include 3-5 relevant terms mixing job titles and educational backgrounds
- Think broadly about related roles and transferable skills
- Include both current titles and progression titles (e.g., "Senior Developer" and "Tech Lead")
- Add academic majors for entry-level or specialized positions

**Match Criteria: Order Matters**
- Always put "Currently active as [role]" first to validate similarity search
- Order remaining criteria by importance - Wintro auto-weights based on position
- Focus on 3-5 key criteria that truly matter for success
- Ensure all criteria can be evaluated from LinkedIn profiles

**Testing and Iteration**
- Always test filters before proceeding to match criteria
- Click "Test Match Criteria" to see how candidates score
- If top matches don't look right, reorder criteria rather than adding more
- Ensure top candidates score above 50% for employee visibility

**Managing Open Vacancies**
- Review performance weekly in the Live tab
- Monitor which employees are actively referring
- Adjust if you're not getting enough quality referrals
- Close promptly when the position is filled to free up slots

---

With your vacancy configured and opened for referrals, your employees can now start reviewing and referring candidates from their networks. Navigate to the next section to learn how to review and manage these referrals.
