import "./About.css";

function OverviewIcon({ children }) {
    return (
      <div className="absolute left-[12px] top-[24px] size-[57px]">
        {children}
      </div>
    );
  }
  
  function OverviewCard({ title, description, icon }) {
    return (
      <div className="overview-card">
        <div className="overview-icon">
          {icon}
        </div>
  
        <h3 className="overview-title">
          {title}
        </h3>
  
        <p className="overview-description">
          {description}
        </p>
      </div>
    );
  }
  
  export default OverviewCard;
  