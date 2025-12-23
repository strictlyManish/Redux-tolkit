import { useContext } from "react"
import { Projectbox } from "../context/ProjectContainer"
import Card from './../components/Card';

function Project() {
  const [data, setData] = useContext(Projectbox)

  return (
    <div className="min-h-screen px-3 sm:px-4 md:px-6 lg:px-8 py-6 md:py-10">
      <div className="w-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6 md:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
            My Projects
          </h1>
          <p className="text-gray-400 text-sm sm:text-base">
            Explore my recent work and projects
          </p>
        </div>

        {/* Grid */}
        {data && data.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {data.map((item) => (
              <Card key={item.id} data={item} />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center h-64">
            <p className="text-gray-400 text-lg">Loading..</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Project