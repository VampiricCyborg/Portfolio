export const links = {
  resume: "https://drive.google.com/file/d/10ARUMJWXSiGLVNsNBMu4wptBSm9HlSMd/view?usp=sharing",
  github: "https://github.com/VampiricCyborg",
  repos: "https://github.com/VampiricCyborg?tab=repositories",
  linkedin: "https://www.linkedin.com/in/madhav-ms/",
  leetcode: "https://leetcode.com/u/madhav_ms/",
  sluicePost:
    "https://dev.to/vampiriccyborg/building-sluice-qos-aware-capacity-governance-for-self-hosted-llm-inference-13ja",
};

export const nav = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "achievements", label: "Community" },
  { id: "contact", label: "Contact" },
] as const;

export const aboutParagraphs = [
  "I'm a Computer Science student at Chennai Institute of Technology, and I'm doing a BS in Data Science at IIT Madras at the same time.",
  "I care about the parts of AI systems that break in production. That means how requests get admitted when the GPUs are full, why an embedding service runs out of memory, whether a retrieved passage really supports the answer, and what an agent should remember between sessions.",
  "I learn these things by building them and measuring them, and I try to be honest about what I find — writing up what worked, what didn't, and where an idea looked better on paper than it held up in practice.",
  "Before this I did two internships at Invisibl Cloud Solutions, building production RAG pipelines, multi-agent workflows and a self-healing data pipeline.",
];

export const now = [
  { label: "Building", value: "A memory layer for AI coding agents" },
  { label: "Exploring", value: "Causal methods for energy and grid data" },
  { label: "Learning", value: "LLM evals, inference serving, distributed systems" },
  { label: "Based in", value: "Chennai, India" },
];

export type Role = { title: string; org: string; dates: string; bullets: string[] };

export const experience: Role[] = [
  {
    title: "AI Agent Engineer Intern",
    org: "Invisibl Cloud Solutions Pvt Ltd",
    dates: "Apr – Jun 2026",
    bullets: [
      "Built multi-agent RAG workflows with LangGraph, MCP and FastAPI for protocol retrieval, validation and root-cause troubleshooting, using ChromaDB and Sentence Transformers for semantic retrieval.",
      "Developed an autonomous hardware-fleet diagnosis workflow that analyzed device telemetry and syslogs to find root causes. It enforced a deterministic 85°C thermal guardrail that blocked unsafe reboot actions.",
      "Engineered a self-healing transaction-data pipeline (LangGraph + Pydantic) that detected and corrected type and arithmetic errors before they reached downstream reporting. In one case it fixed an incorrect total from 900 to 1,000 within a 3-cycle validation loop.",
    ],
  },
  {
    title: "Platform Engineer Intern",
    org: "Invisibl Cloud Solutions Pvt Ltd",
    dates: "Nov – Dec 2025",
    bullets: [
      "Built a natural-language analytics tool that lets non-technical users query CSV/XLSX data in plain English and get charted answers within seconds. It was evaluated across 50+ files holding millions of records.",
      "Engineered a multi-format RAG pipeline over 50 documents (~3,000 pages) using Sentence Transformers, semantic chunking and ChromaDB top-5 retrieval, with retrieval evaluations and input/output guardrails.",
      "Developed an AWS Strands agentic RAG workflow with 5 tools and evaluated it on 1,000 test cases, reaching a 95% success rate before deployment.",
    ],
  },
  {
    title: "Member",
    org: "Artificial Intelligence Centre of Excellence, Chennai Institute of Technology",
    dates: "Jun 2026 – Present",
    bullets: [
      "Contribute to applied AI research, workshops and project incubation run by the institute's AI CoE.",
      "Collaborate with peers on applied AI/ML projects.",
    ],
  },
];

export const education = [
  {
    degree: "BE Computer Science & Engineering",
    detail: "Chennai Institute of Technology · 2024 – 2028 · CGPA 8.4",
  },
  { degree: "BS Data Science & Applications", detail: "IIT Madras · 2024 – Present" },
];

export const skills = [
  {
    group: "AI Infrastructure",
    items:
      "LLM serving & admission control, vLLM, capacity/QoS policies, LLM evaluation, agent memory & context engineering, AI safety guardrails",
  },
  {
    group: "AI Engineering",
    items:
      "RAG, multi-agent systems, LangGraph, LangChain, AWS Strands, MCP, embeddings, semantic search, ONNX Runtime",
  },
  {
    group: "Retrieval & Data",
    items:
      "pgvector, ChromaDB, HNSW, semantic chunking, metadata filtering, ETL pipelines, Pandas, NumPy, statistics & regression",
  },
  {
    group: "Backend",
    items:
      "FastAPI, Flask, REST APIs, SSE streaming, async Python, auth & tenant isolation, PostgreSQL, Redis",
  },
  { group: "Languages", items: "Python, TypeScript/JavaScript, SQL, C/C++, Rust" },
  {
    group: "Infra & Ops",
    items:
      "Docker, Kubernetes, Prometheus, AWS (EC2, S3), CI/CD, GitHub Actions, Linux, Vercel, Railway, Render",
  },
];

export const hackathons = [
  "Smart India Hackathon 2026",
  "The Great Agent Hackathon",
  "AI Builders Hackathon",
  "Razorpay AI Buildathon",
  "IBM Z Datathon",
];

export const contacts = [
  { label: "24f2004254@ds.study.iitm.ac.in", href: "mailto:24f2004254@ds.study.iitm.ac.in" },
  { label: "madhavmsoff030307@gmail.com", href: "mailto:madhavmsoff030307@gmail.com" },
  { label: "github.com/VampiricCyborg", href: links.github },
  { label: "linkedin.com/in/madhav-ms", href: links.linkedin },
  { label: "leetcode.com/u/madhav_ms", href: links.leetcode },
];

// Words for the tape band between sections; decorative only.
export const tapeWords = [
  "LLM serving",
  "admission control",
  "RAG",
  "pgvector",
  "HNSW",
  "evals",
  "agent memory",
  "vLLM",
  "Rust",
  "measure everything",
];
