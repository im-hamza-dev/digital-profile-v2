export const projects = [
  {
    id: "1",
    name: "SHAPE",
    industry: "Web Development",
    metric: "95+ PageSpeed",
    services: "Design • Development • SEO Optimization",
    description:
      "High-Performance Landing Page (Next.js, SEO Optimized, 95+ PageSpeed). Designed and developed a high-converting, performance-optimized landing page built with Next.js. The primary focus was speed, clarity, and conversion-driven structure. The website consistently achieved 90–95 scores across devices in Google PageSpeed Insights, ensuring fast load times and strong SEO fundamentals.",
    valueDelivered:
      "Fast-loading, SEO-friendly landing page designed to maximize trust and user engagement.",
    stack: "Next.js, React, Tailwind CSS, SEO optimization, performance tuning",
    images: [
      "/shape/frontend.png",
      "/shape/headless-cms-sanity.png",
      "/shape/nextjs-landing.png",
      "/shape/high conversion landing.png",
    ],
    size: "large" as const, 
  },
  {
    id: "2",
    name: "Tido",
    industry: "SaaS",
    metric: "Production Ready",
    services: "Full-Stack • Auth • Payments",
    description:
      "Full-Stack SaaS MVP with Secure Authentication & Payment Infrastructure. Developed a scalable SaaS MVP with secure authentication, role-based access, and integrated payment workflows. Implemented structured onboarding flows, protected dashboards, and subscription-ready architecture to support monetization from day one.",
    valueDelivered:
      "Production-ready SaaS foundation with authentication and payments fully integrated.",
    stack: "Next.js, Node.js, PostgreSQL, Stripe, REST APIs, secure auth flows",
    images: [
      "/tido/tido-auth-payment-mvp-saas.png",
    ],
    size: "small" as const,
  },
  {
    id: "3",
    name: "Sondr",
    industry: "Web Application",
    metric: "Scalable Architecture",
    services: "Full-Stack • React • Node.js",
    description:
      "Scalable Full-Stack Web Application with Clean Architecture. Contributed to building and refining a production-grade full-stack web application using React and Node.js. Delivered complex UI components, optimized state management, and structured backend APIs to ensure performance and maintainability.",
    valueDelivered:
      "High-performance, maintainable application architecture built for long-term scalability.",
    stack: "React, Next.js, Node.js, REST APIs, PostgreSQL",
    images: [
      "/sondr/1.png",
      "/sondr/2.png",
      "/sondr/3.png",
    ],
    size: "small" as const,
  },
  {
    id: "4",
    name: "DockSpace",
    industry: "Planning Tool",
    metric: "Optimized Utilization",
    services: "Design • Development • Visualization",
    description:
      "Dock & Fabrication Space Planning Tool (Interactive Visualization Platform). Shipped a comprehensive web-based tool for dock and fabrication space planning, designed to optimize area utilization and operational efficiency. Developed interactive spatial management features including layout visualization, space allocation tools, and structured planning workflows.",
    valueDelivered:
      "Improved dock space utilization, enhanced operational planning, and streamlined fabrication area management.",
    stack: "React, Canvas API, spatial interaction logic, optimized rendering strategies",
    images: [
      "/dockspace/canvas-mvp.png",
      "/dockspace/planning tool .png",
    ],
    size: "large" as const,
  },
  {
    id: "5",
    name: "CCTV-AI",
    industry: "AI & Surveillance",
    metric: "+15% Engagement",
    services: "AI Integration • Real-Time • Dashboard",
    description:
      "AI-Powered Surveillance & Violation Detection Dashboard. Built an advanced web-based surveillance dashboard for port management, enabling real-time visualization of AI-detected violations. Integrated RabbitMQ for communication between AI detection modules and the web platform. Implemented interactive canvas tools for zone mapping, measurement, zooming, and spatial planning.",
    valueDelivered:
      "Real-time monitoring system with automated violation reporting and improved operational visibility.",
    stack: "React, Redux, Canvas API, RabbitMQ, Socket.io, MinIO, OSM maps",
    images: [
      "/cctvai/1.png",
      "/cctvai/cam - feeds.png",
      "/cctvai/data visualization - analytics.png",
      "/cctvai/leaflet maps.png",
      "/cctvai/mvp-saas.png",
      "/cctvai/react.png",
      "/cctvai/usecases.png",
    ],
    size: "small" as const,
  },
  {
    id: "6",
    name: "Sales Tracking Dashboard",
    industry: "Retail Analytics",
    metric: "Real-Time Insights",
    services: "Dashboard • Analytics • Reporting",
    description:
      "Retail & POS Analytics Dashboard with Real-Time Insights. Developed a structured sales and inventory tracking dashboard designed for POS and retail environments. Implemented real-time reporting, filtering systems, and performance visualization to provide business owners with actionable insights.",
    valueDelivered:
      "Improved business decision-making through real-time sales analytics and reporting.",
    stack: "React, Redux, REST APIs, data visualization tools",
    images: [
      "/sales/1.png",
      "/sales/2.png",
      "/sales/3.png",
    ],
    size: "small" as const,
  },
  {
    id: "7",
    name: "Dapster",
    industry: "Automation Platform",
    metric: "Centralized Control",
    services: "Workflow • Automation • RPA",
    description:
      "Workflow Automation Platform Integrated with Robotic Systems. Engineered a workflow automation platform designed to manage and coordinate robotic process automations (RPA) and operational workflows. The system enabled centralized management of automation pipelines, task orchestration, monitoring, and structured execution flows.",
    valueDelivered:
      "Centralized automation control system improving operational efficiency and process visibility.",
    stack: "Next.js, Node.js, workflow orchestration logic, API integrations",
    images: [
      "/dapster/1.png",
      "/dapster/2.png",
    ],
    size: "large" as const,
  },
  {
    id: "8",
    name: "GetSnapDoc",
    industry: "Chrome Extension",
    metric: "Browser Tool",
    services: "Extension Development • Browser API • UI/UX",
    description:
      "Chrome Extension for Document Capture and Management. Developed a powerful browser extension that enables users to capture, organize, and manage documents directly from web pages. Built with modern web technologies and Chrome Extension APIs to provide seamless document snapping and organization capabilities.",
    valueDelivered:
      "Streamlined document capture workflow directly from the browser, improving productivity and organization.",
    stack: "Chrome Extension API, JavaScript, HTML, CSS, Chrome Storage API",
    images: [
      "/snapdoc/snapdoc.png",
    ],
    size: "small" as const,
  },
  {
    id: "9",
    name: "Content Formatter",
    industry: "Web Tool",
    metric: "Content Processing",
    services: "Tool Development • Text Processing • UI/UX",
    description:
      "Content Formatting and Processing Tool. Built a comprehensive web-based tool for formatting, processing, and transforming text content. Provides multiple formatting options, text manipulation features, and export capabilities to help users efficiently manage and format their content.",
    valueDelivered:
      "Efficient content formatting and processing tool that saves time and improves content quality.",
    stack: "React, JavaScript, Text processing algorithms, Web APIs",
    images: [
      "/contentformatter/contentformatter.png",
    ],
    size: "small" as const,
  },
] as const;

export type Project = (typeof projects)[number];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.id === slug);
}
