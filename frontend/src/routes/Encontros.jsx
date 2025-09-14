function Encontros() {
  return (
    <div style={{ background: "#f5f5f5", minHeight: "100vh", padding: "40px" }}>
      
      {/* Container do título e botão */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: "30px" }}>
        <button style={{
          border: "1px solid #7b2ff7",
          background: "transparent",
          color: "#7b2ff7",
          padding: "8px 16px",
          borderRadius: "6px",
          cursor: "pointer",
          marginRight: "15px"
        }}>
          ← Voltar
        </button>
        <h2 style={{ color: "#7b2ff7", fontWeight: "bold", fontSize: "22px", margin: 0 }}>
          Encontros Disponíveis
        </h2>
      </div>

      {/* Cards */}
      <div style={{ display: "flex", gap: "20px" }}>
        {/* Card 1 */}
        <div style={{
          background: "white",
          borderRadius: "10px",
          boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
          padding: "20px",
          width: "300px"
        }}>
          <h3 style={{ color: "#7b2ff7", marginBottom: "10px" }}>📍 Playball Pompeia</h3>
          <p>📅 09/06/2025</p>
          <p style={{
            background: "#eee",
            display: "inline-block",
            padding: "4px 10px",
            borderRadius: "10px",
            fontSize: "12px",
            marginBottom: "15px"
          }}>8 vagas restantes</p>
          <button style={{
            background: "linear-gradient(to right, #7b2ff7, #f107a3)",
            color: "white",
            border: "none",
            padding: "10px",
            borderRadius: "6px",
            cursor: "pointer",
            width: "100%"
          }}>
            Inscreva-se
          </button>
        </div>

        {/* Card 2 */}
        <div style={{
          background: "white",
          borderRadius: "10px",
          boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
          padding: "20px",
          width: "300px"
        }}>
          <h3 style={{ color: "#7b2ff7", marginBottom: "10px" }}>📍 Playball Pompeia</h3>
          <p>📅 12/06/2025</p>
          <p style={{
            background: "#eee",
            display: "inline-block",
            padding: "4px 10px",
            borderRadius: "10px",
            fontSize: "12px",
            marginBottom: "15px"
          }}>12 vagas restantes</p>
          <button style={{
            background: "linear-gradient(to right, #7b2ff7, #f107a3)",
            color: "white",
            border: "none",
            padding: "10px",
            borderRadius: "6px",
            cursor: "pointer",
            width: "100%"
          }}>
            Inscreva-se
          </button>
        </div>
      </div>
    </div>
  );
}

export default Encontros;