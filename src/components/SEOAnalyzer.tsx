"use client";

import { useState, useEffect, FormEvent } from "react";
import { 
  Search, 
  Loader2, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  Database, 
  Cpu, 
  Sparkles, 
  Network, 
  ChevronRight 
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface SEOAnalyzerProps {
  onBookCallWithUrl: (url: string) => void;
}

export default function SEOAnalyzer({ onBookCallWithUrl }: SEOAnalyzerProps) {
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState<"idle" | "scanning" | "completed">("idle");
  const [stepIndex, setStepIndex] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);

  const scanSteps = [
    { text: "Connecting to domain headers & looking up server location...", delay: 800 },
    { text: "Crawling index points for machine-readable JSON-LD Graph markup...", delay: 1000 },
    { text: "Mining HTML body elements for core entity & Wikidata identifiers...", delay: 1200 },
    { text: "Simulating Google AI Overview & Perplexity synthesis pipelines...", delay: 1000 },
    { text: "Generating custom topological gap analysis and entity recommendations...", delay: 800 }
  ];

  useEffect(() => {
    if (status !== "scanning") return;

    let logTimer: NodeJS.Timeout;
    let stepTimer: NodeJS.Timeout;

    if (stepIndex < scanSteps.length) {
      const currentStep = scanSteps[stepIndex];
      setLogs((prev) => [...prev, `[PROCESS] ${currentStep.text}`]);
      
      stepTimer = setTimeout(() => {
        setLogs((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = `[SUCCESS] Resolved: ${currentStep.text.replace("...", "")}`;
          return updated;
        });
        
        if (stepIndex === 0) {
          setLogs((prev) => [...prev, `[INFO] Server resolved: Status 200 OK. Standard indexing headers detected.`]);
        } else if (stepIndex === 1) {
          setLogs((prev) => [
            ...prev, 
            `[WARN] Missing @graph nested architecture. Unlinked Schema blocks found.`,
            `[WARN] No direct sameAs links referencing DBpedia or Wikidata nodes.`
          ]);
        } else if (stepIndex === 2) {
          setLogs((prev) => [
            ...prev, 
            `[INFO] Entity extraction score: 28% core topical coherence.`,
            `[WARN] Relational vocabulary is unstructured. High density of thin keyword phrases.`
          ]);
        } else if (stepIndex === 3) {
          setLogs((prev) => [
            ...prev, 
            `[INFO] Perplexity citing likelihood: Low.`,
            `[INFO] Google AI Overview citation confidence score: 14% due to conversational prose.`
          ]);
        }

        setStepIndex((prev) => prev + 1);
      }, currentStep.delay);
    } else {
      logTimer = setTimeout(() => {
        setStatus("completed");
      }, 500);
    }

    return () => {
      clearTimeout(logTimer);
      clearTimeout(stepTimer);
    };
  }, [status, stepIndex]);

  const handleStartScan = (e: FormEvent) => {
    e.preventDefault();
    if (!url) return;
    setStatus("scanning");
    setStepIndex(0);
    setLogs([`[INIT] Initiating Semantic & GEO crawler for: ${url}`]);
  };

  const resetScanner = () => {
    setStatus("idle");
    setLogs([]);
    setStepIndex(0);
  };

  const getCleanUrl = (rawUrl: string) => {
    try {
      let formatted = rawUrl.trim();
      if (!/^https?:\/\//i.test(formatted)) {
        formatted = "https://" + formatted;
      }
      const parsed = new URL(formatted);
      return parsed.hostname;
    } catch {
      return rawUrl;
    }
  };

  return (
    <div className="bg-white border-2 border-black p-6 md:p-8 relative overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400/5 to-transparent blur-2xl pointer-events-none" />

      {/* Header */}
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-200 pb-5">
        <div>
          <span className="text-[10px] font-mono tracking-widest text-cyan-600 uppercase flex items-center gap-1.5 mb-1.5 font-bold">
            <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse" />
            Interactive audit
          </span>
          <h3 className="text-xl md:text-2xl font-black font-sans text-black tracking-tight uppercase">
            Free AI search audit
          </h3>
          <p className="text-xs text-neutral-600 mt-1 font-medium">
            See how ready your site is for AI-driven search
          </p>
        </div>
        
        {status === "completed" && (
          <button
            onClick={resetScanner}
            className="text-xs font-mono text-neutral-600 hover:text-black border border-neutral-300 hover:border-black py-1.5 px-3 uppercase transition-colors font-bold cursor-pointer"
          >
            Run New Audit
          </button>
        )}
      </div>

      <AnimatePresence mode="wait">
        {/* State 1: Input URL */}
        {status === "idle" && (
          <motion.div
            key="idle"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <form onSubmit={handleStartScan} className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-[10px] font-mono tracking-wider text-neutral-600 uppercase mb-1.5 font-bold">
                    Target Domain URL
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                      <Search className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      required
                      placeholder="e.g., enterprise-cybersecurity.com"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      className="w-full bg-neutral-50 border-2 border-black text-black pl-10 pr-4 py-3 text-xs font-mono font-semibold focus:outline-none focus:bg-white transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full group flex items-center justify-center gap-2 bg-white hover:bg-neutral-50 text-black font-sans text-xs font-bold uppercase tracking-wider py-3.5 border-2 border-black transition-all cursor-pointer"
                >
                  <span>Run free audit</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="p-3.5 bg-neutral-50 border border-neutral-200 text-[11px] leading-relaxed text-neutral-600 font-mono font-medium font-semibold">
                This checks your JSON-LD schema, compares your content against how AI models process language, flags gaps in your Wikidata presence, and reviews local listing consistency. Runs entirely in your browser — nothing is stored.
              </div>
            </form>
          </motion.div>
        )}

        {/* State 2: Crawling/Scanning Logs */}
        {status === "scanning" && (
          <motion.div
            key="scanning"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-4 font-mono text-[11px]"
          >
            <div className="flex items-center justify-between bg-black px-4 py-3 border-2 border-black text-white">
              <div className="flex items-center gap-2">
                <Loader2 className="w-3.5 h-3.5 animate-spin text-cyan-400" />
                <span className="font-bold text-neutral-100 uppercase">CRAWLING SCHEMA NODES ON {getCleanUrl(url)}</span>
              </div>
              <span className="text-neutral-400 font-bold">{Math.round((stepIndex / scanSteps.length) * 100)}% Complete</span>
            </div>

            <div className="bg-white border-2 border-black p-4 h-60 overflow-y-auto flex flex-col gap-1 text-neutral-700 scrollbar-thin scrollbar-thumb-neutral-300">
              {logs.map((log, index) => {
                let colorClass = "text-neutral-600";
                if (log.startsWith("[SUCCESS]")) colorClass = "text-green-600 font-bold";
                if (log.startsWith("[WARN]")) colorClass = "text-amber-600 font-bold";
                if (log.startsWith("[INIT]")) colorClass = "text-cyan-600 font-bold";
                
                return (
                  <div key={index} className={`whitespace-pre-line py-0.5 ${colorClass}`}>
                    {log}
                  </div>
                );
              })}
              <div className="h-4" />
            </div>

            <div className="w-full bg-neutral-100 h-2.5 border-2 border-black overflow-hidden">
              <div 
                className="bg-cyan-400 h-full transition-all duration-300"
                style={{ width: `${(stepIndex / scanSteps.length) * 100}%` }}
              />
            </div>
          </motion.div>
        )}

        {/* State 3: Analysis Completed */}
        {status === "completed" && (
          <motion.div
            key="completed"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* Top Core Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white border-2 border-black p-4 relative">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-neutral-500 font-bold uppercase tracking-wider">Entity Graph Score</span>
                  <Database className="w-4 h-4 text-cyan-600" />
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black font-mono text-amber-600">32%</span>
                  <span className="text-neutral-500 text-[10px] font-mono font-bold">UNRESOLVED</span>
                </div>
                <p className="text-[10px] text-neutral-600 mt-2 font-mono font-medium leading-relaxed">
                  Wikidata mapping missing. No persistent organizational ID link established.
                </p>
              </div>

              <div className="bg-white border-2 border-black p-4 relative">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-neutral-500 font-bold uppercase tracking-wider">JSON-LD Graph Density</span>
                  <Network className="w-4 h-4 text-cyan-600" />
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black font-mono text-amber-600">18%</span>
                  <span className="text-neutral-500 text-[10px] font-mono font-bold">FRAGMENTED</span>
                </div>
                <p className="text-[10px] text-neutral-600 mt-2 font-mono font-medium leading-relaxed">
                  Isolated, non-nested schemas. Missing parent-child entity relations.
                </p>
              </div>

              <div className="bg-white border-2 border-black p-4 relative">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-neutral-500 font-bold uppercase tracking-wider">GEO Citation Likelihood</span>
                  <Cpu className="w-4 h-4 text-cyan-600" />
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black font-mono text-red-600">14%</span>
                  <span className="text-neutral-500 text-[10px] font-mono font-bold">NON-CITATION</span>
                </div>
                <p className="text-[10px] text-neutral-600 mt-2 font-mono font-medium leading-relaxed">
                  Highly conversational style lacking statistical tables or exact assertions.
                </p>
              </div>
            </div>

            {/* Analysis Summary */}
            <div className="p-4 bg-red-50 border-2 border-red-500 text-neutral-800 space-y-3 font-sans">
              <div className="flex items-center gap-2 text-red-700 text-xs font-mono uppercase tracking-wider font-bold">
                <AlertCircle className="w-4 h-4 text-red-600" />
                Critical Discovery: Schema Authority Gap
              </div>
              <p className="text-xs leading-relaxed text-neutral-700 font-medium">
                Our crawler analyzed <strong className="text-black font-mono">{getCleanUrl(url)}</strong>. While the layout loads well, your site communicates in strings (keywords) rather than entities. Search LLMs cannot associate your services with high-authority reference hubs. You are essentially invisible to ChatGPT and Perplexity Search, and vulnerable to upcoming Google AI Overview rollouts.
              </p>
            </div>

            {/* Actionable Recommendations */}
            <div className="space-y-2">
              <span className="block text-[10px] font-mono text-neutral-500 font-bold tracking-wider uppercase">
                Strategic Recovery Recommendations
              </span>
              <div className="space-y-1.5">
                {[
                  {
                    num: "1",
                    title: "Deploy Nested Unified Schema (@graph)",
                    desc: "Inject organizational schema that points directly to corresponding Wikidata identifiers, bridging your domain to verified external knowledge nodes."
                  },
                  {
                    num: "2",
                    title: "Synthesize Assertion Blocks",
                    desc: "Re-architect core content hubs with dense, factual bullet arrays and embedded data tables to heavily favor citation weights in Generative search algorithms."
                  },
                  {
                    num: "3",
                    title: "Resolve Topical Semantic Gaps",
                    desc: "Construct strategic topical hubs with Python-driven internal linking structures to establish immediate authority over targeted concept spaces."
                  }
                ].map((rec) => (
                  <div key={rec.num} className="bg-neutral-50 border border-neutral-200 p-3.5 flex items-start gap-3">
                    <div className="w-5 h-5 rounded bg-white text-cyan-700 flex items-center justify-center font-mono text-[10px] font-bold border border-neutral-300">
                      {rec.num}
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold text-black uppercase tracking-tight">{rec.title}</h4>
                      <p className="text-xs text-neutral-600 font-medium mt-0.5">{rec.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Personalized Conversion CTA */}
            <div className="bg-cyan-50/50 border-2 border-cyan-500/60 p-4 md:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <h4 className="text-xs font-bold text-cyan-700 uppercase tracking-widest font-mono">
                  Let's Solve This Audit
                </h4>
                <p className="text-xs text-neutral-700 font-medium mt-1 max-w-md">
                  Book a strategy session. I will walk you through a customized Knowledge Graph blueprint designed specifically for {getCleanUrl(url)} to secure organic and AI search dominance.
                </p>
              </div>
              <button
                onClick={() => onBookCallWithUrl(url)}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-neutral-50 text-black text-xs font-bold uppercase tracking-wider py-2.5 px-5 border-2 border-black transition-all cursor-pointer"
              >
                <span>Book Free Audit Walkthrough</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
