export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: 'Strategy & M&A' | 'Unit Economics' | 'Venture Creation';
  image: string;
  readTime: string;
  summary: string;
  problemStatement: string;
  methodology: string;
  unitEconomics: {
    label: string;
    value: string;
    change?: string;
    isPositive?: boolean;
  }[];
  strategicFrameworks: string[];
  findings: string[];
  recommendation: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  readTime: string;
  category: 'Corporate Finance' | 'Consumer Tech' | 'Economics & Policy';
  excerpt: string;
  content: string[];
  keyTakeaway: string;
  image: string;
}

export interface AcademicSubject {
  name: string;
  code: string;
  score: string;
  description: string;
  keyTopics: string[];
}

export interface Achievement {
  year: string;
  role: string;
  organization: string;
  description: string;
  impact: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: 'Vasu Verma',
    role: 'Class 12 Commerce Scholar & Aspiring Entrepreneur',
    specialization: 'Business Management, Unit Economics & Corporate Finance',
    location: 'India',
    email: 'vasu.verma.commerce@gmail.com',
    school: 'Senior Secondary School (CBSE Board - Class 12 Commerce)',
    tagline: 'Bridging classroom financial principles with real-world venture scalability and unit economics.',
    bio: 'A passionate 12th Commerce student specializing in Accountancy, Business Studies, Economics, and Financial Mathematics. Actively building financial models, dissecting Indian startup unit economics, and leading high-school commerce initiatives with an ambition to pursue Global Business Administration & Venture Capital.',
    metrics: [
      { label: 'Academic Aggregate', value: '96.5%', note: 'Mid-Term Rank 1' },
      { label: 'Financial Models Built', value: '14+', note: 'BEP & Cash Flows' },
      { label: 'Student Cohort Led', value: '120+', note: 'Commerce Society' },
      { label: 'National Case Wins', value: 'Top 3', note: 'Inter-School Summit' },
    ],
  },

  caseStudies: [
    {
      id: 'zepto-quick-commerce',
      title: 'Zepto & The Unit Economics of 10-Minute Dark Stores',
      subtitle: 'Analyzing the path to Contribution Margin positive in urban grocery delivery',
      category: 'Unit Economics',
      image: '/src/assets/images/case_quick_commerce_1793793276822.jpg',
      readTime: '6 min read',
      summary: 'An empirical breakdown of dark-store micro-fulfillment economics, measuring how average order value (AOV) expansion and advertising revenue transform quick commerce from cash burner to sustainable retail.',
      problemStatement: 'High rider incentives, cold-chain replenishment losses, and low initial ticket sizes (₹320) historically produced -18% contribution margins across 10-minute grocery delivery hubs in Tier-1 cities.',
      methodology: 'Constructed unit economics model evaluating Dark Store throughput (800 orders/day target), picker velocity (under 90 seconds), and batch delivery density within a 2.2 km radius.',
      unitEconomics: [
        { label: 'Average Order Value (AOV)', value: '₹510', change: '+59% vs 2022', isPositive: true },
        { label: 'Gross Margin (Take Rate)', value: '19.2%', change: '+3.4%', isPositive: true },
        { label: 'Dark Store Cost / Order', value: '₹34', change: '-28%', isPositive: true },
        { label: 'Rider Payout / Drop', value: '₹48', change: 'Optimized batching', isPositive: true },
        { label: 'Ad Revenue / Order', value: '₹14', change: 'Retail Media Network', isPositive: true },
        { label: 'Contribution Margin 2', value: '+3.8%', change: 'Breakeven Achieved', isPositive: true },
      ],
      strategicFrameworks: ['DuPont Analysis', 'Dark Store Density Radius Model', 'Cross-Elasticity of FMCG Categories'],
      findings: [
        'Dark store capacity utilization must exceed 65% (approx 650 orders/day) before fixed warehouse rent and refrigeration depreciation are amortized.',
        'Introducing beauty, high-end electronics, and gifting expanded gross margins by 420 basis points beyond traditional low-margin staples like milk and potatoes.',
        'Retail Media Networks (charging brands for prominent search placement on the app) generated high pure-margin revenue that offsets last-mile delivery costs.',
      ],
      recommendation: 'Quick-commerce players must avoid horizontal category bloat. Focus strictly on replenishment velocity and private label FMCG to maximize basket margin.',
    },
    {
      id: 'air-india-turnaround',
      title: 'Tata & Air India: Vihaan.AI Transformation Blueprint',
      subtitle: 'Consolidating four legacy airlines into a world-class aviation powerhouse',
      category: 'Strategy & M&A',
      image: '/src/assets/images/case_aviation_strategy_1793793277766.jpg',
      readTime: '8 min read',
      summary: 'A strategic post-merger integration study evaluating how the Tata Group is navigating fleet renewal, culture re-engineering, and brand unification across Air India, Vistara, and AIX Connect.',
      problemStatement: 'Decades of government mismanagement left Air India with aging aircraft, fragmented inventory management, redundant ground systems, and negative operating cash flows.',
      methodology: 'Mapped Kotter’s 8-Stage Change Management framework and CASK/RASK aviation metrics against Tata Group’s Vihaan.AI 5-year turnaround road map.',
      unitEconomics: [
        { label: 'New Aircraft Backlog', value: '470 jets', change: 'Boeing & Airbus', isPositive: true },
        { label: 'On-Time Performance', value: '88.4%', change: '+18.2% vs baseline', isPositive: true },
        { label: 'CASK (Cost per Seat Km)', value: '₹4.15', change: '-9.4% on new fleet', isPositive: true },
        { label: 'International Market Share', value: '24.5%', change: '+7.1% target', isPositive: true },
      ],
      strategicFrameworks: ["Porter's Five Forces (Aviation)", 'Hub-and-Spoke Efficiency Model', "Kotter's Organizational Change"],
      findings: [
        'Cabin retrofits and digital reservation systems immediately improve yield management by attracting premium corporate travelers away from Gulf hub carriers.',
        'Unified procurement across Vistara and Air India generated immediate supply chain economies of scale in ground handling, spare parts, and catering contracts.',
        'Direct non-stop connectivity from Delhi and Mumbai to North American and European hubs captured high-yield point-to-point traffic.',
      ],
      recommendation: 'Accelerate the retirement of legacy wet-leased aircraft and build dedicated premium lounges in Tier-1 Indian gateways to anchor brand loyalty.',
    },
    {
      id: 'd2c-beverage-bootstrap',
      title: 'Zero to Shelf: Bootstrapping a Modern D2C Beverage',
      subtitle: 'A high-school incubator research project on bypassing FMCG slotting fees',
      category: 'Venture Creation',
      image: '/src/assets/images/hero_vasu_portrait_1793793275948.jpg',
      readTime: '5 min read',
      summary: 'An entrepreneurial blueprint detailing how a new-age functional iced tea venture can achieve product-market fit using hyper-local college distribution before expanding to modern trade.',
      problemStatement: 'Established beverage conglomerates control shelf space through prohibitive slotting fees and distributor exclusivity, creating high barriers to entry for youth founders.',
      methodology: 'Conducted customer willingness-to-pay surveys across 240 high school and college students, tested prototype pricing bands, and modeled co-packing manufacturing contracts.',
      unitEconomics: [
        { label: 'Unit Retail Price (MRP)', value: '₹65.00', change: 'Mass-premium band', isPositive: true },
        { label: 'COGS per Bottle', value: '₹18.50', change: 'Cold-brew concentrate', isPositive: true },
        { label: 'Packaging & Labeling', value: '₹6.20', change: 'Recyclable glass/alu', isPositive: true },
        { label: 'Target Gross Margin', value: '62.0%', change: 'Healthy D2C buffer', isPositive: true },
      ],
      strategicFrameworks: ['Lean Startup Canvas', 'CAC to LTV Cohort Modeling', 'Omnichannel Channel Stacking'],
      findings: [
        'College festival pop-ups and university sports events offer zero-slotting fee access to high-density target consumers with instant feedback loops.',
        'Pairing QR codes on bottle caps with weekly entrepreneurial trivia increased repeat digital purchases by 31%.',
        'Co-manufacturing with existing regional bottling plants kept Capex requirements under ₹1.5 Lakhs for initial test batches.',
      ],
      recommendation: 'Scale sequentially: validate hyper-local taste profiles in 10 micro-markets before taking institutional angel capital for regional distribution.',
    },
  ] as CaseStudy[],

  blogPosts: [
    {
      id: 'working-capital-trap',
      title: 'The Working Capital Trap: Why Profitable Companies Bleed Cash',
      date: 'October 2026',
      readTime: '5 min read',
      category: 'Corporate Finance',
      excerpt: 'In Class 12 Accountancy, we master the Cash Flow Statement. In the startup world, understanding the Cash Conversion Cycle separates survivors from bankruptcy.',
      image: '/src/assets/images/blog_financial_markets_1793793277781.jpg',
      content: [
        'A company can report stellar accounting net profits while standing on the brink of liquidation. This counter-intuitive reality is the Working Capital Trap, where rapid revenue growth sucks liquidity out of the business before receivables are collected.',
        'In the standard operating cycle (Days Sales of Inventory + Days Sales Outstanding - Days Payable Outstanding), every day that stock sits in a warehouse or an unpaid invoice languishes is funded directly by cash reserves or high-interest working capital credit lines.',
        'Companies like D-Mart and Apple operate with negative working capital: they collect cash from customers immediately while negotiating 60-to-90-day supplier credit terms. They literally fund their daily expansion using supplier capital rather than equity dilution.',
        'For aspiring entrepreneurs, the golden rule is clear: never confuse booked revenue with collected cash. Managing debtor turnover and strict payment terms is just as important as closing the sale.',
      ],
      keyTakeaway: 'Growth consumes cash before it produces cash. Always optimize your Cash Conversion Cycle (CCC) before scaling operations.',
    },
    {
      id: 'retail-media-networks',
      title: 'Retail Media Networks: Why Every E-Commerce App is an Ad Agency',
      date: 'September 2026',
      readTime: '6 min read',
      category: 'Consumer Tech',
      excerpt: 'Amazon, Flipkart, and Blinkit no longer make their primary margin solely from markups on goods. They monetize consumer search intent at the digital point of purchase.',
      image: '/src/assets/images/case_quick_commerce_1793793276822.jpg',
      content: [
        'When you search for "organic almond milk" on any delivery app, the top two results carry subtle "Sponsored" indicators. That micro-transaction represents the highest gross margin revenue stream in modern commerce.',
        'Traditional retail relied on physical slotting fees—charging brand managers thousands of rupees to place chips at eye level on checkout aisle shelves. Digital commerce has programmaticized this into real-time bidding for search keywords and category banners.',
        'Because the retailer already has first-party purchasing data and immediate closed-loop attribution (knowing whether an ad impression resulted in a completed checkout within 10 minutes), brands are shifting budgets from traditional billboards directly into retail media.',
        'As commerce students, studying this shift reveals how modern platforms transition from low-margin merchandise distribution into high-margin software and advertising ecosystems.',
      ],
      keyTakeaway: 'The modern business model of retail is two-sided: sell goods at near-cost to aggregate consumer demand, then monetize brand access at 80%+ margins.',
    },
    {
      id: 'cbse-to-dalal-street',
      title: 'From CBSE Accountancy to Dalal Street: Reading Nifty 50 Annual Reports',
      date: 'August 2026',
      readTime: '4 min read',
      category: 'Economics & Policy',
      excerpt: 'How applying Class 12 ratio analysis—Current Ratio, Debt-Equity, and Inventory Turnover—demystifies real corporate disclosures.',
      image: '/src/assets/images/case_aviation_strategy_1793793277766.jpg',
      content: [
        'Many students view Class 12 Accountancy as memorizing debit-credit journal entries for partnership dissolutions and forfeiture of shares. But once you open the 300-page Annual Report of Reliance Industries or Titan, the syllabus springs to life.',
        'The Management Discussion & Analysis (MD&A) section provides raw insight into macroeconomic tailwinds, currency volatility, and supply chain bottlenecks. The Notes to Financial Statements show the real impact of depreciation policies and contingent liabilities.',
        'By running simple solvency and liquidity ratios across 5 years of financial filings, patterns emerge that financial media headlines often miss: disguised debt through supplier financing, inventory pile-ups, and the quality of operating cash flow versus reported PAT.',
        'The most rewarding exercise for any commerce scholar is treating every textbook concept as an analytical lens for evaluating real businesses.',
      ],
      keyTakeaway: 'Financial literacy is the superpower of commerce. Balance sheets are stories written in the universal language of business.',
    },
  ] as BlogPost[],

  academics: [
    {
      name: 'Accountancy',
      code: 'CBSE 055',
      score: '98% (Mid-Term)',
      description: 'Comprehensive mastery of corporate accounts, partnership firms, financial statement analysis, and accounting ratios.',
      keyTopics: ['Cash Flow Statement (AS-3)', 'Share Capital & Debentures', 'Ratio Analysis (Liquidity, Solvency, Activity, Profitability)', 'Partnership Reconstitution & Goodwill Valuation'],
    },
    {
      name: 'Business Studies',
      code: 'CBSE 054',
      score: '97% (Mid-Term)',
      description: 'Principles of scientific management, financial market mechanisms (NSE/BSE, SEBI regulations), and strategic marketing.',
      keyTopics: ["Fayol's & Taylor's Principles of Management", 'Financial Management (Capital Structure, Trading on Equity)', 'Stock Exchanges & Money Market Instruments', 'Consumer Protection & Marketing Mix (4Ps)'],
    },
    {
      name: 'Economics',
      code: 'CBSE 030',
      score: '96% (Mid-Term)',
      description: 'Macroeconomics, national income accounting, banking system credit creation, and Indian economic development.',
      keyTopics: ['National Income Aggregates (Value Added, Income, Expenditure)', 'RBI Monetary Policy Tools (Repo, Reverse Repo, CRR, SLR)', 'Balance of Payments & Foreign Exchange Rate', 'Economic Reforms 1991 (LPG Policies)'],
    },
    {
      name: 'Applied Mathematics',
      code: 'CBSE 241',
      score: '95% (Mid-Term)',
      description: 'Quantitative finance, compound interest mathematics, sinking funds, linear programming, and statistical modeling.',
      keyTopics: ['Time Value of Money (EMI, Perpetuity, Sinking Funds)', 'Linear Programming for Resource Optimization', 'Probability Distributions & Trend Analysis', 'Taxation & Financial Calculations'],
    },
  ] as AcademicSubject[],

  leadership: [
    {
      year: '2026',
      role: 'President',
      organization: 'School Commerce & Economics Society',
      description: 'Elected to lead a 120-student society. Organized the annual Inter-School Commerce Conclave, hosting 18 schools for Mock Stock Exchange, Shark Tank pitch, and Case Study Olympiad.',
      impact: 'Generated 400+ attendees and managed a sponsor budget of ₹65,000 with 100% accounting transparency.',
    },
    {
      year: '2025 – 2026',
      role: 'Chief Student Coordinator',
      organization: 'Annual School Carnival Enterprise Project',
      description: 'Conceptualized, financed, and operated a mock venture "Brews & Bites", handling vendor sourcing, pricing strategy, queue management, and inventory tracking.',
      impact: 'Generated ₹34,200 revenue in 8 hours with an operational net margin of 38.4%, donated to educational charity.',
    },
    {
      year: '2025',
      role: 'First Prize Winner',
      organization: 'National Young Economists Case Challenge',
      description: 'Presented a data-backed policy paper on "Financial Inclusion Through UPI: Economic Impact on Micro-Vendors in Semi-Urban India".',
      impact: 'Awarded Gold Citation and Best Speaker among 45 school delegations.',
    },
    {
      year: '2024 – 2025',
      role: 'Participant & Certified Delegate',
      organization: 'SEBI Financial Literacy & National Stock Exchange (NSE) Academy',
      description: 'Completed interactive training modules on equity markets, mutual fund categorization, debt instruments, and investor protection norms.',
      impact: 'Achieved 94% on NSE Investor Certification test.',
    },
  ] as Achievement[],

  skills: {
    financialModeling: ['Break-Even Point (BEP) Analysis', 'Cash Conversion Cycle (CCC)', 'Working Capital Modeling', 'Ratio Analysis (Solvency, Activity, DuPont)', 'Compound Annual Growth Rate (CAGR)'],
    businessAcumen: ['Business Model Canvas (BMC)', 'Unit Economics Breakdown', 'Competitive Strategy (Porter)', 'Marketing Mix & Go-To-Market (GTM)', 'Pitch Deck Formulation'],
    technicalTools: ['Advanced MS Excel / Google Sheets', 'Financial Charting & Projections', 'PowerPoint & Pitch Decks', 'Data Interpretation & Statistics', 'Basic Python for Financial Data'],
  },
};
