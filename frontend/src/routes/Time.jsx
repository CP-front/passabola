const Time = () => {
  
  return (
     <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Cabeçalho */}
      <div className="flex items-center gap-2 mb-8 font-bold">
        <button className="flex items-center gap-2 px-4 py-2 border-2 cursor-pointer rounded-md text-sm text-purple-600 border-purple-600 hover:bg-purple-100">
          ← Voltar
        </button>
        <h1 className="text-2xl text-purple-700">Escolha seu time</h1>
        <p className="flex-col">Pla</p>
      </div>
        {/* Title Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-purple-600 mb-2">Escolha Seu Time</h2>
          <p className="text-gray-600">Playball Pompéia - 09/06/2025</p>
        </div>

        {/* Team Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Time Passa Card */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-xl font-bold text-purple-600 mb-4">Time Passa</h3>

            {/* Team Logo */}
            <div className="w-20 h-20 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white font-bold text-lg">AQA</span>
            </div>

            <p className="text-gray-600 mb-6">5 vagas restantes</p>

            <button className="w-full bg-purple-600 hover:bg-purple-700">Escolher Time Passa</button>
          </div>

          {/* Time Bola Card */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-xl font-bold text-pink-600 mb-4">Time Bola</h3>

            {/* Team Logo */}
            <div className="w-20 h-20 bg-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white font-bold text-lg">AQA</span>
            </div>

            <p className="text-gray-600 mb-6">3 vagas restantes</p>

            <button className="w-full bg-pink-600 hover:bg-pink-700">Escolher Time Bola</button>
          </div>
        </div>
      </main>
  );
};

export default Time;