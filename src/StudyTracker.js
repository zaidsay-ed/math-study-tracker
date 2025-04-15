import { useState, useEffect } from "react";

const studyPlan = [
  { subject: "MATH", date: "Apr 15", topic: "Improper integrals + convergence (Week 7)", tier: "🟦 Must-Master" },
  { subject: "MATH", date: "Apr 15", topic: "FTC + Antidifferentiation (Week 1–2)", tier: "🟩 Foundation" },
  { subject: "MATH", date: "Apr 16", topic: "PDF + Probability + Variance (Week 8)", tier: "🟦 Must-Master" },
  { subject: "MATH", date: "Apr 16", topic: "Substitution + Integration by Parts", tier: "🟨 Core Concept" },
  { subject: "MATH", date: "Apr 17", topic: "Sequences + Series + Geometric + Integral Test", tier: "🟦 Must-Master" },
  { subject: "MATH", date: "Apr 17", topic: "Trig Substitution + Riemann Sums + Trapezoid", tier: "🟨 Core Concept" },
  { subject: "MATH", date: "Apr 18", topic: "Ratio Test + Taylor Series + Error Bounds", tier: "🟦 Must-Master" },
  { subject: "MATH", date: "Apr 18", topic: "Partial Fractions + Simpson’s Rule", tier: "🟨 Core Concept" },
  { subject: "MATH", date: "Apr 19", topic: "Mock Exam (Series/Taylor)", tier: "🟦 Must-Master" },
  { subject: "MATH", date: "Apr 20", topic: "Review weak areas + convergence tests", tier: "🟦 Must-Master" },
  { subject: "STAT", date: "Apr 16", topic: "Module 6 – Simulation-Based Hypothesis Tests", tier: "🟦 Must-Master" },
  { subject: "STAT", date: "Apr 17", topic: "Module 7 – Traditional Hypothesis Tests", tier: "🟦 Must-Master" },
  { subject: "STAT", date: "Apr 18", topic: "Module 8 – Errors in Inference", tier: "🟦 Must-Master" },
  { subject: "STAT", date: "Apr 19", topic: "Module 9 – ANOVA + Multiple Testing", tier: "🟥 Catch-Up" },
  { subject: "STAT", date: "Apr 20", topic: "Module 10 – A/B Testing + Review", tier: "🟥 Catch-Up" },
  { subject: "CPSC", date: "Apr 17", topic: "Lab 7–8 – File System APIs + File Descriptors", tier: "🟨 Core Review" },
  { subject: "CPSC", date: "Apr 18", topic: "Lab 9 – File Metadata + V6/Ext2 Comparison", tier: "🟨 Core Review" },
  { subject: "CPSC", date: "Apr 19", topic: "Lab 10 – Process Isolation + TLBs", tier: "🟦 Must-Master" },
  { subject: "CPSC", date: "Apr 20", topic: "x86 VM System, Page Table Walk, Clock Algorithm", tier: "🟦 Must-Master" },
];

export default function StudyTracker() {
  const [checked, setChecked] = useState(Array(studyPlan.length).fill(false));
  const completedCount = checked.filter(Boolean).length;
  const progress = Math.round((completedCount / studyPlan.length) * 100);

  const toggleCheck = (index) => {
    const newChecked = [...checked];
    newChecked[index] = !newChecked[index];
    setChecked(newChecked);
  };

  return (
    <div className="p-4 max-w-5xl mx-auto bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6 text-white">📚 Final Exam Study Tracker</h1>

      <div className="mb-6">
        <p className="mb-2 text-white">Progress: {progress}%</p>
        <div className="w-full h-4 bg-gray-700 rounded-full">
          <div
            className="h-4 bg-green-400 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="space-y-4">
        {studyPlan.map((item, index) => (
          <div
            key={index}
            className={`flex items-center justify-between p-4 border rounded-2xl shadow-sm ${checked[index] ? "bg-green-900" : "bg-gray-800"}`}
          >
            <div>
              <p className="text-sm font-semibold text-gray-300">{item.date} – {item.subject}</p>
              <p className="text-base font-medium text-white">{item.topic}</p>
              <p className="text-xs text-gray-400">{item.tier}</p>
            </div>
            <input
              type="checkbox"
              checked={checked[index]}
              onChange={() => toggleCheck(index)}
              className="w-5 h-5"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
