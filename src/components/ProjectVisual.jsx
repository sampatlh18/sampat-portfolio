import {
  Activity, CalendarDays, ClipboardList, HeartPulse, PawPrint,
  Package, ShieldCheck, Stethoscope, Users, Dog
} from "lucide-react";

export default function ProjectVisual({ type }) {
  if (type === "hospital") {
    return (
      <div className="project-visual hospital-visual">
        <div className="mock-browser">
          <div className="mock-browser-bar"><span /><span /><span /><i>hospital-dashboard / overview</i></div>
          <div className="hospital-ui">
            <aside className="hospital-sidebar">
              <div className="hospital-brand"><HeartPulse size={16} /> <b>Care<span>+</span></b></div>
              <span className="side-active"><Activity size={13} /> Overview</span>
              <span><Users size={13} /> Patients</span>
              <span><Stethoscope size={13} /> Doctors</span>
              <span><CalendarDays size={13} /> Appointments</span>
            </aside>
            <div className="hospital-content">
              <div className="mock-welcome"><div><small>MONITORING PANEL</small><b>Hospital overview</b></div><span className="mock-avatar">SH</span></div>
              <div className="mock-stats">
                <div><small>Patients</small><b>•••</b><span className="mock-stat-icon purple"><Users size={13} /></span></div>
                <div><small>Doctors</small><b>•••</b><span className="mock-stat-icon blue"><Stethoscope size={13} /></span></div>
                <div><small>Appointments</small><b>•••</b><span className="mock-stat-icon green"><CalendarDays size={13} /></span></div>
              </div>
              <div className="mock-lower">
                <div className="mock-chart"><small>ACTIVITY OVERVIEW</small><div className="chart-bars">{[35, 56, 43, 72, 50, 86, 62, 75, 46, 92, 66, 80].map((height, i) => <i key={i} style={{ height: `${height}%` }} />)}</div></div>
                <div className="mock-list"><small>RECENT ACTIVITY</small><span /><span /><span /></div>
              </div>
            </div>
          </div>
        </div>
        <span className="visual-caption"><span className="visual-caption-dot" /> PRODUCT CONCEPT / HOSPITAL MANAGEMENT</span>
      </div>
    );
  }

  return (
    <div className="project-visual pethub-visual">
      <div className="pet-orb pet-orb-one" />
      <div className="pet-orb pet-orb-two" />
      <div className="pet-dashboard">
        <div className="pet-dash-head"><div className="pet-logo"><PawPrint size={16} /> PetHub</div><span className="pet-user">SH</span></div>
        <div className="pet-greeting"><small>YOUR PET CARE SPACE</small><b>Care made simple.</b><span>Everything your companion needs, in one place.</span></div>
        <div className="pet-feature-grid">
          <div><span className="pet-feature-icon pink"><Dog size={17} /></span><b>Pet profiles</b><small>Personal details</small></div>
          <div><span className="pet-feature-icon violet"><HeartPulse size={17} /></span><b>Health records</b><small>Medical history</small></div>
          <div><span className="pet-feature-icon blue"><CalendarDays size={17} /></span><b>Appointments</b><small>Vet visits</small></div>
          <div><span className="pet-feature-icon orange"><Package size={17} /></span><b>Pet store</b><small>Food & essentials</small></div>
        </div>
        <div className="pet-admin-strip"><ShieldCheck size={14} /><span>ADMIN MANAGEMENT</span><i /><ClipboardList size={14} /></div>
      </div>
      <span className="visual-caption"><span className="visual-caption-dot" /> PRODUCT CONCEPT / PET CARE PLATFORM</span>
    </div>
  );
}
