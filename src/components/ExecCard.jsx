export default function ExecCard({ name, role }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "12px",
      padding: "20px",
      textAlign: "center",
      marginBottom: "20px"
    }}>
      <h3 style={{ fontSize: "1.5rem", marginBottom: "8px" }}>{name}</h3>
      <p style={{ fontSize: "1rem", color: "#555" }}>{role}</p>
    </div>
  );
}