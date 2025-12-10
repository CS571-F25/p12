export default function ExecCard({ name, role }) {
  const img = `${import.meta.env.BASE_URL}images/${name.split(" ")[0]}.jpg`; // Firstname.jpg

  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "12px",
      padding: "30px",          // increased padding for bigger card
      textAlign: "center",
      marginBottom: "20px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
    }}>
      <img
        src={img}
        alt={`${name} headshot`}
        style={{
          width: "200px",       // bigger image
          height: "200px",
          objectFit: "cover",
          borderRadius: "12px",
          marginBottom: "20px"
        }}
      />
      <h3 style={{ fontSize: "1.8rem", marginBottom: "10px" }}>{name}</h3>
      <p style={{ fontSize: "1.1rem", color: "#555" }}>{role}</p>
    </div>
  );
}
