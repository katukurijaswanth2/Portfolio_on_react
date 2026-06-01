import "./RolesSection.css";

const rolesData = [
  { id: 1, title1: "Full Stack", title2: "Developer" },
  { id: 2, title1: "Front End",  title2: "Developer" },
  { id: 3, title1: "Back End",   title2: "Developer" },
  { id: 4, title1: "Software",   title2: "Developer"  },
];

export const RolesSection = () => {
  return (
    <div className="service">
      <div className="service-heading">
        <span className="table-of">Table of </span>
        <span className="service-content">contents</span>
      </div>

      <div className="parent-role1">
        <div className="parent-role">
          <div className="roles-container" id="roles">
            {rolesData.map((role) => (
              <div className="role-card" key={role.id}>
                <div className="role-number"><span>0{role.id}</span></div>
                <div className="role-title">
                  <span className="roleTitle1">{role.title1}</span>
                  <span className="roleTitle2">{role.title2}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

