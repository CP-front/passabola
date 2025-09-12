import { Link, useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-700 min-h-[calc(100vh-229px)] flex flex-col items-center justify-center p-8 w-screen overflow-hidden">
      <h1 className="text-4xl font-bold text-white-800 mb-8 text-center">a</h1>

      <div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors shadow-lg" onClick={() => navigate('/calculator')}>Calculadora</button>
      </div>

    </div>
  )
}

export default Home