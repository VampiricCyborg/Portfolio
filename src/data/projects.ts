export type Project = {
  slug: string;
  title: string;
  hook: string;
  description: string;
  metric: string;
  metricNote?: string;
  tags: string[];
  status: "Shipped" | "In development";
  links: { github: string; live?: string; writeup?: string };
};

// Inline markup: `code` and *emphasis* are rendered by <RichText />.
export const projects: Project[] = [
  {
    slug: "sluice",
    title: "Sluice: QoS-Aware Capacity Governance for Self-Hosted LLMs",
    hook: "Stops one noisy tenant from eating a paying customer's SLA.",
    description:
      "Sluice is a FastAPI admission-control proxy for multi-tenant vLLM clusters. For every request it decides whether to pass, degrade, queue, fall back to a smaller model or reject. It combines GPU cache pressure, queue depth and per-tier SLA-violation rates to make that call. Redis coordinates fallback routing and cross-replica queueing, a PostgreSQL decision ledger records why each call was made, and Prometheus handles telemetry. It also has an offline replay tool that tests policy changes against recorded traffic.",
    metric:
      "Guaranteed-tier SLA violations cut from 30.0% to 2.0% under sustained overload, at ~0.006 ms median proxy overhead.",
    metricNote: "Synthetic benchmark against a mock backend.",
    tags: ["Python", "FastAPI", "vLLM", "Redis", "PostgreSQL", "Prometheus", "Docker", "Kubernetes"],
    status: "Shipped",
    links: {
      github: "https://github.com/VampiricCyborg/Sluice",
      writeup:
        "https://dev.to/vampiriccyborg/building-sluice-qos-aware-capacity-governance-for-self-hosted-llm-inference-13ja",
    },
  },
  {
    slug: "docuquery",
    title: "DocuQuery: Ask Your Documents, Get Cited Answers",
    hook: "Production RAG that shows the exact page and passage behind every answer.",
    description:
      "DocuQuery is a full-stack RAG platform. It has an async FastAPI backend, a PostgreSQL + pgvector (HNSW) store, and SSE-streamed answers from five LLM providers with document-, page- and chunk-level citations. Authenticated routes keep each user's documents isolated from everyone else's. When production hit an out-of-memory crash on Railway, I replaced the embedding stack with ONNX Runtime INT8 (bge-small-en-v1.5), then benchmarked batch sizes from 1 to 64 to choose the default.",
    metric:
      "Retrieval latency P50 11.8 ms / P95 14.1 ms · batched embeddings run 6.17× faster than unbatched · 79/79 backend tests passing.",
    tags: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL + pgvector", "ONNX Runtime", "SSE", "Docker"],
    status: "Shipped",
    links: {
      github: "https://github.com/VampiricCyborg/DocuQuery",
      live: "https://docuqueryvc.vercel.app",
    },
  },
  {
    slug: "cairn",
    title: "Cairn: Git-Native Memory for AI Coding Agents",
    hook: "Leave a marker so the next agent doesn't start from zero.",
    description:
      "Cairn turns what a coding agent learns in a session (a failed approach, a build-system quirk) into reviewed plain-Markdown entries committed to the repo. It runs a capture → reflect → curate → inject pipeline over a schema-validated Markdown/YAML store, and its adapters work with both Claude Code and opencode. The design is adapted from ACE (Agentic Context Engineering).",
    metric:
      "A CLI (`init`, `validate`, `context`, `review`) with deterministic duplicate- and contradiction-detection gates, plus an eval harness that scores extraction against gold-standard fixtures in CI.",
    tags: ["Python", "Anthropic SDK", "Pydantic", "JSON Schema", "Typer", "Agent Tooling"],
    status: "In development",
    links: { github: "https://github.com/VampiricCyborg/Cairn" },
  },
  {
    slug: "vigilarch",
    title: "Vigilarch: Tamper-Evident Offline Incident Ledger",
    hook: "Proves *when* a record was written without a server or a trusted clock.",
    description:
      "Vigilarch is an append-only ledger for incident reports at disconnected sites such as mines, tunnels and ports. When two nodes meet, they co-sign each other's chain head. That bounds each record's creation time between attestations, so any backdating shows up as a detectable fork that can be traced to a key. It's written as a Rust workspace of nine crates, and the core also compiles to WebAssembly for the live browser demo.",
    metric: "3 scenarios × 1,000 seeds, 3000/3000 passing · 158 native tests.",
    tags: ["Rust", "WebAssembly", "Cryptographic Attestation", "Offline-First", "Simulation Testing"],
    status: "Shipped",
    links: {
      github: "https://github.com/VampiricCyborg/Vigilarch",
      live: "https://vampiriccyborg.github.io/Vigilarch/",
    },
  },
  {
    slug: "loam",
    title: "Loam: A Readable, Instrumented HNSW Vector Index",
    hook: "The index behind every RAG pipeline, built line by line from the paper.",
    description:
      "Loam is HNSW vector search in pure Python and NumPy. Every benchmark is checked against a brute-force index, and a search trace shows where the `ef` budget goes, one hop at a time. It includes ablations on neighbor selection and on whether the hierarchy actually helps.",
    metric:
      "recall@10 of 0.997 at ef=64 on GloVe-25 (10k vectors), using ~10% of the distance computations of an exact scan.",
    tags: ["Python", "NumPy", "ANN Search", "Benchmarking"],
    status: "Shipped",
    links: { github: "https://github.com/VampiricCyborg/loam" },
  },
  {
    slug: "marginalis",
    title: 'Marginalis: Is "Run It When the Grid Is Green" Right?',
    hook: "Average carbon intensity is the wrong signal for scheduling load.",
    description:
      "Marginalis estimates marginal and average CO₂ emissions factors from EIA-930 hourly grid data for three US balancing authorities (2019–2026), using first-difference regression. The method and hold-out split were frozen before any evaluation. The effect held in MISO but not in ERCOT or CAISO, and the README reports all three.",
    metric:
      "MISO: scheduling by marginal cost avoided 230 kg CO₂/MWh (95% CI 44–420) on 2025 hold-out data, and the result held again in 2026.",
    tags: ["Python", "FastAPI", "PostgreSQL", "React", "TypeScript", "Econometrics"],
    status: "Shipped",
    links: {
      github: "https://github.com/VampiricCyborg/Marginalis",
      live: "https://marginalis-5xm3.onrender.com",
    },
  },
];
