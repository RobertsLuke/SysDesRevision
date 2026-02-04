import { useState } from "react";

const COLORS = {
  bg: "#0a0e17",
  surface: "#111827",
  surfaceLight: "#1a2236",
  border: "#2a3548",
  borderHighlight: "#3b4c66",
  text: "#e2e8f0",
  textMuted: "#8896ab",
  textDim: "#5a6a80",
  accent: "#f59e0b",
  accentDim: "rgba(245, 158, 11, 0.15)",
  green: "#10b981",
  greenDim: "rgba(16, 185, 129, 0.15)",
  red: "#ef4444",
  redDim: "rgba(239, 68, 68, 0.12)",
  blue: "#3b82f6",
  blueDim: "rgba(59, 130, 246, 0.15)",
  purple: "#a78bfa",
  purpleDim: "rgba(167, 139, 250, 0.12)",
  orange: "#fb923c",
  orangeDim: "rgba(251, 146, 60, 0.12)",
};

const PhaseTag = ({ children, color }) => (
  <span
    style={{
      display: "inline-block",
      padding: "2px 8px",
      borderRadius: "4px",
      fontSize: "10px",
      fontWeight: 700,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      background: color === "green" ? COLORS.greenDim :
                  color === "blue" ? COLORS.blueDim :
                  color === "amber" ? COLORS.accentDim :
                  color === "red" ? COLORS.redDim :
                  color === "purple" ? COLORS.purpleDim :
                  color === "orange" ? COLORS.orangeDim :
                  COLORS.accentDim,
      color: color === "green" ? COLORS.green :
             color === "blue" ? COLORS.blue :
             color === "amber" ? COLORS.accent :
             color === "red" ? COLORS.red :
             color === "purple" ? COLORS.purple :
             color === "orange" ? COLORS.orange :
             COLORS.accent,
      border: `1px solid ${
        color === "green" ? "rgba(16,185,129,0.3)" :
        color === "blue" ? "rgba(59,130,246,0.3)" :
        color === "amber" ? "rgba(245,158,11,0.3)" :
        color === "red" ? "rgba(239,68,68,0.3)" :
        color === "purple" ? "rgba(167,139,250,0.3)" :
        color === "orange" ? "rgba(251,146,60,0.3)" :
        "rgba(245,158,11,0.3)"
      }`,
    }}
  >
    {children}
  </span>
);

const ComponentChip = ({ children }) => (
  <span
    style={{
      display: "inline-block",
      padding: "1px 6px",
      borderRadius: "3px",
      fontSize: "10px",
      fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
      background: "rgba(99, 102, 241, 0.15)",
      color: "#818cf8",
      border: "1px solid rgba(99, 102, 241, 0.25)",
      marginRight: "4px",
    }}
  >
    {children}
  </span>
);

const TreeNode = ({ title, phase, components, children, indent = 0, connector = true, highlight, note }) => (
  <div style={{ marginLeft: indent * 28, position: "relative" }}>
    {connector && indent > 0 && (
      <div
        style={{
          position: "absolute",
          left: -18,
          top: 0,
          bottom: "50%",
          width: 1,
          borderLeft: `1px dashed ${COLORS.borderHighlight}`,
        }}
      />
    )}
    <div
      style={{
        background: highlight === "beginner" ? "rgba(239, 68, 68, 0.06)" :
                    highlight === "knowledge" ? "rgba(16, 185, 129, 0.06)" :
                    highlight === "both" ? "rgba(245, 158, 11, 0.06)" :
                    "transparent",
        border: `1px solid ${
          highlight === "beginner" ? "rgba(239, 68, 68, 0.2)" :
          highlight === "knowledge" ? "rgba(16, 185, 129, 0.2)" :
          highlight === "both" ? "rgba(245, 158, 11, 0.2)" :
          COLORS.border
        }`,
        borderRadius: "8px",
        padding: "10px 14px",
        marginBottom: "6px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
        {phase && <PhaseTag color={phase}>{phase === "amber" ? "orientation" : phase === "blue" ? "teach" : phase === "green" ? "verify" : phase === "red" ? "fail" : phase === "purple" ? "macro" : phase === "orange" ? "summary" : phase}</PhaseTag>}
        <span style={{ fontSize: "13px", fontWeight: 600, color: COLORS.text }}>{title}</span>
      </div>
      {components && (
        <div style={{ marginTop: "5px" }}>
          {components.map((c, i) => <ComponentChip key={i}>{c}</ComponentChip>)}
        </div>
      )}
      {note && (
        <div style={{ fontSize: "11px", color: COLORS.textMuted, marginTop: "4px", fontStyle: "italic" }}>{note}</div>
      )}
    </div>
    {children}
  </div>
);

const Arrow = ({ label, indent = 0 }) => (
  <div style={{ marginLeft: indent * 28 + 14, display: "flex", alignItems: "center", gap: "6px", padding: "2px 0" }}>
    <div style={{ color: COLORS.textDim, fontSize: "14px" }}>↓</div>
    {label && <span style={{ fontSize: "10px", color: COLORS.textDim, fontStyle: "italic" }}>{label}</span>}
  </div>
);

const Branch = ({ label, indent = 0 }) => (
  <div style={{ marginLeft: indent * 28 + 4, display: "flex", alignItems: "center", gap: "6px", padding: "4px 0" }}>
    <div style={{ color: COLORS.accent, fontSize: "12px" }}>├──</div>
    <span style={{ fontSize: "11px", color: COLORS.accent, fontWeight: 600 }}>{label}</span>
  </div>
);

export default function DecisionTreeViz() {
  const [activeView, setActiveView] = useState("full");

  const showBeginner = activeView === "full" || activeView === "beginner";
  const showKnowledge = activeView === "full" || activeView === "knowledge";

  return (
    <div
      style={{
        background: COLORS.bg,
        minHeight: "100vh",
        color: COLORS.text,
        fontFamily: "'Inter', -apple-system, sans-serif",
        padding: "32px 24px",
      }}
    >
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />

      {/* Header */}
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <div style={{ marginBottom: "8px", display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: COLORS.textDim, fontWeight: 700 }}>Teach Mode</span>
          <span style={{ color: COLORS.textDim }}>·</span>
          <span style={{ fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: COLORS.textDim, fontWeight: 700 }}>Node Micro-Cycle</span>
        </div>
        <h1 style={{ fontSize: "28px", fontWeight: 800, color: COLORS.text, margin: "0 0 4px 0", lineHeight: 1.2 }}>
          Decision Tree — Node 1
        </h1>
        <p style={{ fontSize: "13px", color: COLORS.textMuted, margin: "0 0 20px 0" }}>
          Microscopy techniques over time · 5 granules · 3 groups
        </p>

        {/* View Toggle */}
        <div style={{ display: "flex", gap: "6px", marginBottom: "24px" }}>
          {[
            { id: "full", label: "Full Tree" },
            { id: "beginner", label: "Beginner Path", color: COLORS.red },
            { id: "knowledge", label: "Knowledgeable Path", color: COLORS.green },
          ].map(({ id, label, color }) => (
            <button
              key={id}
              onClick={() => setActiveView(id)}
              style={{
                padding: "6px 14px",
                borderRadius: "6px",
                border: `1px solid ${activeView === id ? (color || COLORS.accent) : COLORS.border}`,
                background: activeView === id ? (color ? `${color}15` : COLORS.accentDim) : "transparent",
                color: activeView === id ? (color || COLORS.accent) : COLORS.textMuted,
                fontSize: "12px",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.15s",
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Legend */}
        <div style={{ display: "flex", gap: "16px", marginBottom: "24px", flexWrap: "wrap" }}>
          {[
            { label: "Orientation", color: "amber" },
            { label: "Teach", color: "blue" },
            { label: "Verify", color: "green" },
            { label: "Fail / Re-teach", color: "red" },
            { label: "Macro-verify", color: "purple" },
            { label: "Summary", color: "orange" },
          ].map(({ label, color }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <PhaseTag color={color}>{label}</PhaseTag>
            </div>
          ))}
        </div>

        {/* Granule Groups Reference */}
        <div style={{
          background: COLORS.surface,
          border: `1px solid ${COLORS.border}`,
          borderRadius: "8px",
          padding: "12px 16px",
          marginBottom: "24px",
        }}>
          <div style={{ fontSize: "11px", fontWeight: 700, color: COLORS.textMuted, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px" }}>
            Granule Groups
          </div>
          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
            <div>
              <span style={{ fontSize: "12px", color: COLORS.accent, fontWeight: 700 }}>G1</span>
              <span style={{ fontSize: "12px", color: COLORS.textMuted, marginLeft: "6px" }}>1.1 + 1.2 — Timeline</span>
            </div>
            <div>
              <span style={{ fontSize: "12px", color: COLORS.accent, fontWeight: 700 }}>G2</span>
              <span style={{ fontSize: "12px", color: COLORS.textMuted, marginLeft: "6px" }}>1.3 + 1.4 — Mechanism</span>
            </div>
            <div>
              <span style={{ fontSize: "12px", color: COLORS.accent, fontWeight: 700 }}>G3</span>
              <span style={{ fontSize: "12px", color: COLORS.textMuted, marginLeft: "6px" }}>1.5 — TEM vs SEM</span>
            </div>
          </div>
        </div>

        {/* ===== THE TREE ===== */}
        <div style={{
          background: COLORS.surface,
          border: `1px solid ${COLORS.border}`,
          borderRadius: "12px",
          padding: "20px",
        }}>

          {/* Orientation */}
          <TreeNode
            title={`"What do you already know about microscopes?"`}
            phase="amber"
            highlight="both"
            note="Open question — response determines entire path"
          />

          {/* Branch point */}
          {showBeginner && (
            <>
              <Branch label={`"I don't know anything" → BEGINNER FLAG SET`} />

              {/* Beginner: G1 Teach */}
              <TreeNode
                title="Teach G1: Timeline (1.1 + 1.2)"
                phase="blue"
                components={["image ×2", "callout"]}
                indent={1}
                highlight="beginner"
                note="Side-by-side photos of light & electron microscope. Dates as callout."
              />
              <Arrow indent={1} />

              {/* Beginner: G1 Verify */}
              <TreeNode
                title="Micro-verify G1 (open recall)"
                phase="green"
                indent={1}
                highlight="beginner"
                note={`"When were light microscopes developed, and when did electron microscopes come along?"`}
              />

              {/* Fail path */}
              <Arrow indent={1} label="student fails" />
              <TreeNode
                title="Re-teach with callout → scaffold to fill-blank"
                phase="red"
                components={["callout"]}
                indent={1}
                highlight="beginner"
                note="Different format. Isolate dates visually. Step DOWN the verify ladder."
              />
              <Arrow indent={1} label="partial answer — re-verify gap only" />
              <TreeNode
                title="Targeted re-verify: '1930s were ___ microscopes?'"
                phase="green"
                indent={1}
                highlight="beginner"
                note="Only re-verify what they got wrong. Don't repeat what they nailed."
              />
              <Arrow indent={1} label="pass ✓ (or cut-off after 2 fails)" />

              {/* Beginner: G2 Teach */}
              <TreeNode
                title="Teach G2: Mechanism (1.3 + 1.4)"
                phase="blue"
                components={["callout"]}
                indent={1}
                highlight="beginner"
                note={`Hook: "The clue is in the name!" Light → light, electron → electrons.`}
              />
              <Arrow indent={1} />
              <TreeNode
                title="Micro-verify G2 (open recall)"
                phase="green"
                indent={1}
                highlight="beginner"
                note="Hook made open recall achievable. Pass ✓"
              />
              <Arrow indent={1} />

              {/* Beginner: G3 Teach */}
              <TreeNode
                title="Teach G3: TEM vs SEM (1.5)"
                phase="blue"
                components={["image ×2", "comparison"]}
                indent={1}
                highlight="beginner"
                note={`TEM vs SEM images + comparison table. Hook: "transmission = through, scanning = surface"`}
              />
              <Arrow indent={1} />
              <TreeNode
                title="Micro-verify G3 (binary choice)"
                phase="green"
                indent={1}
                highlight="beginner"
                note={`"Which gives 3D — TEM or SEM?" Pass ✓`}
              />
              <Arrow indent={1} />

              {/* Beginner: Macro */}
              <TreeNode
                title="Macro-verify Stage 1: match-pairs"
                phase="purple"
                components={["match-pairs"]}
                indent={1}
                highlight="beginner"
                note="Connect facts across all granules. Structured scaffold for beginner."
              />
              <Arrow indent={1} />
              <TreeNode
                title="Macro-verify Stage 2: written response"
                phase="purple"
                indent={1}
                highlight="beginner"
                note={`"In a couple of sentences, what's the difference?" — THE CONFIDENCE LOOP MOMENT`}
              />
              <Arrow indent={1} />
              <TreeNode
                title="Node 1 Summary — 4/5 first time · 1 to revisit"
                phase="orange"
                indent={1}
                highlight="beginner"
                note="~10 minutes total. 5 granules taught, 0 quick-checked."
              />
            </>
          )}

          {showKnowledge && (
            <>
              <Branch label={`"Light 1600s, electron 1930s..." → G1 verified in orientation`} />

              {/* Knowledge: Quick-check G2 */}
              <TreeNode
                title="Quick-check G2: Mechanism (1.3 + 1.4)"
                phase="green"
                indent={1}
                highlight="knowledge"
                note={`"What does each one use to create an image?" — Pass ✓`}
              />
              <Arrow indent={1} />

              {/* Knowledge: Quick-check G3 */}
              <TreeNode
                title="Quick-check G3: TEM vs SEM (1.5)"
                phase="green"
                indent={1}
                highlight="knowledge"
                note={`"TEM and SEM — ring any bells?" — Pass ✓`}
              />
              <Arrow indent={1} />

              {/* Knowledge: Macro — skip stage 1 */}
              <TreeNode
                title="Macro-verify Stage 2 only: written response"
                phase="purple"
                indent={1}
                highlight="knowledge"
                note="Skip match-pairs — facts already connected. Straight to written."
              />
              <Arrow indent={1} />
              <TreeNode
                title="Node 1 Summary — 5/5 · all verified"
                phase="orange"
                indent={1}
                highlight="knowledge"
                note="~2 minutes total. 0 granules taught, 5 quick-checked."
              />
            </>
          )}
        </div>

        {/* Stats comparison */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "12px",
          marginTop: "16px",
        }}>
          <div style={{
            background: COLORS.surface,
            border: `1px solid rgba(239, 68, 68, 0.2)`,
            borderRadius: "8px",
            padding: "14px 16px",
          }}>
            <div style={{ fontSize: "11px", fontWeight: 700, color: COLORS.red, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "10px" }}>
              Beginner Path
            </div>
            {[
              ["Duration", "~10 min"],
              ["Granules taught", "5"],
              ["Quick-checks", "0"],
              ["Components used", "8"],
              ["Verify attempts", "7"],
              ["Macro stages", "2"],
            ].map(([label, value]) => (
              <div key={label} style={{ display: "flex", justifyContent: "space-between", padding: "3px 0" }}>
                <span style={{ fontSize: "12px", color: COLORS.textMuted }}>{label}</span>
                <span style={{ fontSize: "12px", color: COLORS.text, fontWeight: 600 }}>{value}</span>
              </div>
            ))}
          </div>
          <div style={{
            background: COLORS.surface,
            border: `1px solid rgba(16, 185, 129, 0.2)`,
            borderRadius: "8px",
            padding: "14px 16px",
          }}>
            <div style={{ fontSize: "11px", fontWeight: 700, color: COLORS.green, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "10px" }}>
              Knowledgeable Path
            </div>
            {[
              ["Duration", "~2 min"],
              ["Granules taught", "0"],
              ["Quick-checks", "5"],
              ["Components used", "0"],
              ["Verify attempts", "3"],
              ["Macro stages", "1"],
            ].map(([label, value]) => (
              <div key={label} style={{ display: "flex", justifyContent: "space-between", padding: "3px 0" }}>
                <span style={{ fontSize: "12px", color: COLORS.textMuted }}>{label}</span>
                <span style={{ fontSize: "12px", color: COLORS.text, fontWeight: 600 }}>{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Key principle */}
        <div style={{
          background: COLORS.accentDim,
          border: `1px solid rgba(245, 158, 11, 0.3)`,
          borderRadius: "8px",
          padding: "14px 16px",
          marginTop: "16px",
        }}>
          <div style={{ fontSize: "13px", color: COLORS.accent, fontWeight: 700, marginBottom: "4px" }}>
            One tree. Every student level.
          </div>
          <div style={{ fontSize: "12px", color: COLORS.textMuted, lineHeight: 1.5 }}>
            The orientation question is the single branching point. Everything downstream adapts — teaching depth, component usage, verification difficulty, macro-verify stages, tone, and pace. Same 5 granules, same decision tree, completely different experiences.
          </div>
        </div>
      </div>
    </div>
  );
}
