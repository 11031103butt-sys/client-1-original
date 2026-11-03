import { ShieldCheck } from "lucide-react";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrap topbarInner">
        <span>
          <ShieldCheck size={14} />
          Professional immigration documentation
        </span>
        <span>5,000+ cases completed*</span>
        <span>300+ experts on panel*</span>
        <span>AACRAO EDGE-aligned credential evaluation methodology*</span>
      </div>
    </div>
  );
}
