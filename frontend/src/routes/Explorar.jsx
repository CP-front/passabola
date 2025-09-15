const Explorar = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Conteúdo principal */}
      <main className="flex-grow bg-gray-100 flex flex-col items-center justify-center px-4 py-12">
        {/* Título */}
        <h1 className="text-3xl md:text-4xl font-bold text-purple-800 mb-3 text-center">
          Explorar os Jogos
        </h1>
        <p className="text-purple-600 text-center mb-10 text-lg">
          Encontre encontros de futebol feminino na sua cidade
        </p>

        {/* Card de busca */}
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-3xl">
          <h2 className="text-xl font-semibold text-purple-800 mb-6 text-center">
            Buscar Encontros
          </h2>

          <form className="grid md:grid-cols-2 gap-6">
            {/* Cidade */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">
                Cidade
              </label>
              <input
                type="text"
                placeholder="Digite sua cidade"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Data */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">
                Data
              </label>
              <input
                type="date"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </form>

          {/* Botão */}
          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="w-full md:w-auto bg-gradient-to-r from-purple-600 to-pink-500 text-white px-40 py-3 rounded-lg font-medium shadow hover:opacity-90 transition"
            >
              🔍 Buscar Encontros
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Explorar;