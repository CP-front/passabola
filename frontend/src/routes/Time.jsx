const Time = () => {
  const containerStyle = {
    padding: '2rem',
    textAlign: 'center',
    backgroundColor: '#f4f4f4',
    minHeight: '100vh',
  };

  const voltarBtnStyle = {
    background: 'none',
    border: 'none',
    color: '#6c63ff',
    fontSize: '1rem',
    marginBottom: '1rem',
    cursor: 'pointer',
  };

  const tituloStyle = {
    color: '#6c63ff',
    fontSize: '1.8rem',
    fontWeight: 'bold',
    marginBottom: '0.3rem',
  };

  const subtituloStyle = {
    color: '#888',
    fontSize: '0.9rem',
    marginBottom: '2rem',
  };

  const cardsContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    flexWrap: 'wrap',
  };

  const cardStyle = {
    background: 'white',
    padding: '2rem 1.5rem',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
    width: '280px',
    textAlign: 'center',
  };

  const iconImgStyle = {
    height: '60px',
    marginBottom: '1rem',
  };

  const vagasStyle = {
    fontSize: '0.95rem',
    marginBottom: '1.2rem',
  };

  const btnPassaStyle = {
    backgroundColor: '#6c63ff',
    color: 'white',
    padding: '0.6rem 1rem',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  };

  const btnBolaStyle = {
    backgroundColor: '#e91e63',
    color: 'white',
    padding: '0.6rem 1rem',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <button style={voltarBtnStyle}>← Voltar</button>
      <h2 style={tituloStyle}>Escolha Seu Time</h2>
      <p style={subtituloStyle}>Playball Pompéia - 09/06/2025</p>

      <div style={cardsContainerStyle}>
        {/* Card Time Passa */}
        <div style={cardStyle}>
          <h3 style={{ color: '#6c63ff' }}>Time Passa</h3>
          <img src="/src/assets/time-passa-icon.png" alt="Time Passa" style={iconImgStyle} />
          <p style={{
            ...vagasStyle,
            color: '#6c63ff',
            backgroundColor: '#ede8ff',
            borderRadius: '10px',
            padding: '4px'
          }}>
            5 vagas restantes
          </p>
          <button style={btnPassaStyle}>Escolher Time Passa</button>
        </div>

        {/* Card Time Bola */}
        <div style={cardStyle}>
          <h3 style={{ color: '#e91e63' }}>Time Bola</h3>
          <img src="/src/assets/time-bola-icon.png" alt="Time Bola" style={iconImgStyle} />
          <p style={{
            ...vagasStyle,
            color: '#e91e63',
            backgroundColor: '#fde1ed',
            borderRadius: '10px',
            padding: '4px'
          }}>
            3 vagas restantes
          </p>
          <button style={btnBolaStyle}>Escolher Time Bola</button>
        </div>
      </div>
    </div>
  );
};

export default Time;