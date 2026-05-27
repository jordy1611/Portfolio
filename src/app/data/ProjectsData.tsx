export type FeaturedProject = {
  title: string
  year: string
  role: string
  description: string
  highlights: string[]
  technologies: string[]
  modalBody1: string
  modalBody2: string
  modalHighlights: string[]
  modalSkills: string[]
}

export type OtherProject = {
  title: string
  year: string
  role: string
  description: string
  technologies: string[]
  modalBody1: string
  modalBody2: string
  modalHighlights: string[]
  modalSkills: string[]
}

export type AnyProject = FeaturedProject | OtherProject

export const projectsData = {
  sectionTitle: "Featured Projects",
  sectionSubtitle: "Here are some of my recent projects that showcase my skills and passion for web development",
  otherProjectsTitle: "Other Projects",
  modalLabels: {
    highlights: "Highlights",
    technologies: "Technologies",
    skillsDemonstrated: "Skills Demonstrated",
  },
  featuredProjects: [
    {
      title: 'E-Commerce Platform',
      year: '2024',
      role: 'Freelance Contract',
      description: 'A full-stack e-commerce solution built with Next.js, TypeScript, and Stripe integration. Features include user authentication, product management, real-time inventory tracking, dynamic pricing rules, and an admin dashboard for order fulfillment and analytics. Deployed on Vercel with a fully automated CI/CD pipeline backed by Redis caching to keep response times under 100ms at scale.',
      highlights: ['Processed $500k+ in transactions', 'Sub-100ms API response times', 'PCI-compliant payment flow'],
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Redis', 'Tailwind'],
      modalBody1: 'The checkout flow was optimized through extensive A/B testing, reducing cart abandonment by 22%. Inventory updates are propagated in real time via database triggers and a lightweight event bus, ensuring stock counts stay accurate even during high-traffic sales events without requiring polling from the client.',
      modalBody2: "Observability was a first-class concern throughout — structured logging, distributed tracing with OpenTelemetry, and custom Grafana dashboards give the team full visibility into every order's lifecycle. The admin dashboard surfaces fulfillment bottlenecks and flags anomalous refund patterns automatically.",
      modalHighlights: ['Processed $500k+ in transactions', 'Sub-100ms API response times', 'PCI-compliant payment flow', '22% reduction in cart abandonment via A/B testing', 'Zero-downtime deployments with feature flags', 'OpenTelemetry distributed tracing across all services'],
      modalSkills: ['System Design', 'Performance Optimization', 'Cross-functional Collaboration', 'Attention to Detail', 'Stakeholder Communication'],
    },
    {
      title: 'Task Management App',
      year: '2023',
      role: 'Company Project',
      description: 'A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features. Supports nested tasks, time tracking, file attachments, and Slack notifications with role-based access control. WebSocket rooms are scoped per workspace to keep updates isolated and bandwidth-efficient even across large teams.',
      highlights: ['Used by 3 internal teams', 'Real-time sync across devices', 'Custom workflow automation'],
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'AWS S3', 'Jest'],
      modalBody1: 'Offline support was a key requirement — changes made without connectivity are queued locally and replayed against the server on reconnection using an optimistic update strategy. Conflict resolution follows a last-write-wins policy with a visible activity log so users can audit any overwritten changes.',
      modalBody2: 'The test suite covers 87% of business logic with a mix of unit, integration, and end-to-end tests. Automated visual regression testing with Chromatic catches unexpected UI changes before they reach production, keeping the interface consistent across frequent releases.',
      modalHighlights: ['Used by 3 internal teams', 'Real-time sync across devices', 'Custom workflow automation', 'Offline-first with conflict resolution', '87% test coverage across unit and integration tests', 'Visual regression testing via Chromatic'],
      modalSkills: ['Team Leadership', 'Agile Development', 'Problem Solving', 'Technical Writing', 'Empathy for End Users'],
    },
    {
      title: 'AI Writing Assistant',
      year: '2024',
      role: 'Solo Project',
      description: 'A smart writing tool powered by large language models that helps users draft, edit, and improve content with context-aware suggestions, tone adjustment, and plagiarism detection. Supports 12 languages and integrates with Google Docs. Retrieval-augmented context from a Pinecone vector store gives the model relevant prior content without exceeding token budgets.',
      highlights: ['10k+ active users at peak', 'GPT-4 & Claude integrations', 'GDPR-compliant data handling'],
      technologies: ['React', 'OpenAI API', 'Python', 'FastAPI', 'Pinecone', 'Docker'],
      modalBody1: 'Latency was the biggest engineering challenge — streaming tokens directly to the UI via server-sent events keeps perceived response time low even for long completions. A request queue with priority lanes ensures paying users never wait behind free-tier traffic during peak hours.',
      modalBody2: 'GDPR compliance required building a full data subject rights pipeline: automated deletion, export, and consent management. The privacy architecture was reviewed by an external DPO and all PII is stored in an isolated Postgres schema with row-level security enforced at the database layer.',
      modalHighlights: ['10k+ active users at peak', 'GPT-4 & Claude integrations', 'GDPR-compliant data handling', 'Streaming token delivery via SSE', 'Priority request queue for tiered users', 'External DPO-reviewed privacy architecture'],
      modalSkills: ['AI/ML Product Thinking', 'User Research', 'Regulatory Compliance', 'Adaptability', 'Clear Communication'],
    },
    {
      title: 'Real-Time Finance Tracker',
      year: '2023',
      role: 'Freelance Contract',
      description: 'A personal finance dashboard that aggregates bank transactions, visualizes spending patterns, and sends smart budget alerts. Supports multi-currency accounts, recurring expense prediction, and exportable monthly reports. All financial data is encrypted at rest and in transit using OAuth 2.0 with transparent token refresh so sessions never drop mid-use.',
      highlights: ['Plaid integration for 11k+ banks', 'ML-powered anomaly detection', 'End-to-end encrypted storage'],
      technologies: ['Vue.js', 'Node.js', 'Plaid API', 'PostgreSQL', 'Chart.js', 'Terraform'],
      modalBody1: 'The anomaly detection model was trained on anonymized transaction sequences and deployed as a FastAPI microservice. It flags unusual spending with a confidence score and a plain-language explanation, so users understand why an alert fired without needing to interpret raw model output.',
      modalBody2: 'Infrastructure is defined entirely in Terraform and provisioned across two AWS regions for redundancy. Automated nightly backups with point-in-time recovery ensure financial data is never at risk, and a chaos engineering schedule validates recovery procedures quarterly.',
      modalHighlights: ['Plaid integration for 11k+ banks', 'ML-powered anomaly detection', 'End-to-end encrypted storage', 'Plain-language ML explanations for alerts', 'Multi-region AWS infrastructure via Terraform', 'Quarterly chaos engineering drills'],
      modalSkills: ['Data Modeling', 'Security Mindset', 'Infrastructure as Code', 'Analytical Thinking', 'User Trust & Transparency'],
    },
  ] as FeaturedProject[],
  otherProjects: [
    {
      title: 'Weather Dashboard',
      year: '2022',
      role: 'Solo Project',
      description: 'Location-based forecasts with interactive radar maps, hourly breakdowns, and severe weather push alerts. Caches forecast data to minimize API calls and support offline use. Service worker integration enables full functionality even without a network connection.',
      technologies: ['Vue.js', 'Chart.js', 'OpenWeather API', 'Tailwind', 'PWA'],
      modalBody1: 'The radar map layers multiple data sources — precipitation, wind, and UV index — into a single composited WebGL canvas for smooth pan and zoom at any zoom level. Forecast tiles are pre-fetched on idle to ensure instant load when the user navigates to the hourly view.',
      modalBody2: 'Push notifications are batched and throttled server-side to avoid alert fatigue, with user-configurable thresholds per weather type. The service worker cache strategy uses stale-while-revalidate for non-critical data and cache-first for map tiles to keep the app snappy in poor connectivity.',
      modalHighlights: ['WebGL composited radar layer', 'Offline-first with service worker', 'Configurable push alert thresholds', 'Pre-fetched forecast tiles on idle'],
      modalSkills: ['Performance Optimization', 'UX Thinking', 'Offline-First Design'],
    },
    {
      title: 'Social Media Analytics',
      year: '2023',
      role: 'Company Project',
      description: 'Aggregates cross-platform engagement data into a unified dashboard with trend detection, competitor benchmarking, and automated weekly PDF reports sent via email. Background Celery tasks handle data ingestion without blocking the UI.',
      technologies: ['Python', 'Django', 'React', 'D3.js', 'Celery', 'Redis'],
      modalBody1: 'Platform APIs have wildly inconsistent rate limits, so a token-bucket scheduler was built to pace requests per platform without starving slower sources. All raw API responses are stored in a data lake before normalization, making it easy to replay ingestion if the schema changes.',
      modalBody2: 'The PDF report generator uses headless Chrome via Puppeteer to render the live dashboard and capture it as a pixel-perfect document. Reports are queued, generated asynchronously, and delivered via SendGrid with a signed S3 download link valid for 7 days.',
      modalHighlights: ['Token-bucket rate limiter per platform', 'Raw data lake for schema-safe replay', 'Headless Chrome PDF generation', 'Signed S3 delivery links'],
      modalSkills: ['Data Engineering', 'API Integration', 'Analytical Thinking', 'Attention to Detail'],
    },
    {
      title: 'AI Chat Interface',
      year: '2024',
      role: 'Solo Project',
      description: 'Multi-turn conversational UI with streaming responses, context memory, and support for file uploads. Includes a prompt library and usage analytics for teams. Conversations are persisted per user with configurable retention policies.',
      technologies: ['React', 'OpenAI API', 'Node.js', 'WebSocket', 'Prisma'],
      modalBody1: 'Context management was the core technical challenge — a sliding window compressor summarizes older turns using a smaller, cheaper model before appending them to the active context. This keeps conversations coherent over long sessions without blowing through token limits or incurring excessive cost.',
      modalBody2: 'The prompt library supports versioning, so teams can iterate on system prompts and roll back if a change degrades output quality. Usage analytics track token consumption per user and per prompt template, giving admins clear cost attribution and optimization targets.',
      modalHighlights: ['Sliding-window context compression', 'Prompt library with version history', 'Per-user token cost attribution', 'Configurable message retention policies'],
      modalSkills: ['AI Product Design', 'Cost Optimization', 'Team Collaboration', 'Iterative Thinking'],
    },
    {
      title: 'Portfolio Website',
      year: '2025',
      role: 'Solo Project',
      description: "Responsive developer portfolio with smooth scroll animations, dark theme, and a contact form backed by a serverless email handler. Scores 100 on Lighthouse. Fully static output means zero cold starts and instant global delivery via CDN.",
      technologies: ['Next.js', 'Motion', 'Tailwind', 'TypeScript', 'Vercel'],
      modalBody1: "Animation timings were carefully tuned to feel snappy on low-end devices — all transitions stay under 350ms and respect the user's prefers-reduced-motion setting. The particle background is canvas-based and pauses rendering when the tab is hidden to avoid unnecessary CPU usage.",
      modalBody2: 'The contact form uses a Vercel Edge Function to forward submissions to a private email via Resend, with honeypot spam filtering and rate limiting applied at the edge. No database is required — keeping the infrastructure footprint minimal and maintenance-free.',
      modalHighlights: ['100 Lighthouse score across all categories', 'prefers-reduced-motion support', 'Canvas particle system with tab visibility pausing', 'Edge function contact form with spam filtering'],
      modalSkills: ['Attention to Detail', 'Accessibility', 'Performance Mindset', 'Self-Direction'],
    },
    {
      title: 'Recipe Finder App',
      year: '2022',
      role: 'Solo Project',
      description: "Suggests recipes from pantry ingredients with dietary filters and nutritional breakdowns. Generates a smart grocery list for missing items and syncs across devices. Offline mode caches the last 50 recipes so the app remains usable without connectivity.",
      technologies: ['React Native', 'Node.js', 'Spoonacular API', 'SQLite', 'Expo'],
      modalBody1: "Ingredient matching uses a fuzzy search index so \"tomatos\" still matches \"tomatoes\" and partial inputs surface relevant results immediately. The nutritional breakdown is normalized against USDA data to correct for inconsistencies in the third-party API's database.",
      modalBody2: 'The grocery list deduplicates ingredients across multiple selected recipes and groups them by store section — produce, dairy, pantry — to streamline the shopping experience. SQLite replication between devices is handled via a lightweight CRDTs merge strategy on the Node.js backend.',
      modalHighlights: ['Fuzzy ingredient matching with USDA normalization', 'Cross-recipe grocery list deduplication', 'Store-section grouping for shopping UX', 'CRDT-based cross-device SQLite sync'],
      modalSkills: ['Mobile Development', 'User Empathy', 'Data Quality', 'Creative Problem Solving'],
    },
    {
      title: 'DevOps Monitoring Hub',
      year: '2023',
      role: 'Company Project',
      description: 'Centralizes logs, uptime metrics, and error rates across microservices. Fires PagerDuty alerts on anomalies and provides a visual service dependency map. Custom Prometheus exporters were written in Go for services that lacked native instrumentation.',
      technologies: ['React', 'Grafana', 'Prometheus', 'Docker', 'Kubernetes', 'Go'],
      modalBody1: 'The service dependency map is generated dynamically from Kubernetes service mesh metadata, so it always reflects the current topology without manual maintenance. Nodes are color-coded by error rate and sized by request volume, making hotspots immediately visible during incidents.',
      modalBody2: 'Alert fatigue was a real problem before implementing a suppression engine that groups related alerts into a single incident and mutes downstream noise while an upstream fix is in progress. Mean time to resolution dropped by 40% in the first month after rollout.',
      modalHighlights: ['Dynamic topology map from K8s service mesh', 'Error-rate color coding for at-a-glance triage', 'Alert suppression engine to reduce noise', '40% reduction in mean time to resolution'],
      modalSkills: ['Systems Thinking', 'Incident Management', 'Go Development', 'Reliability Engineering', 'Clear Documentation'],
    },
  ] as OtherProject[],
}
