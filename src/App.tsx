import FullScreenOverlay from './components/FullScreenOverlay'

function App() {
  return (
    <div className="grid grid-rows-[auto,auto,1fr] h-screen justify-center">
      <h1 className="text-center text-3xl text-[#2C4251] pt-4 pb-3 mb-2">
        Mobile Menu Patterns
      </h1>
      <div className="flex flex-wrap justify-center gap-4 max-w-2xl mb-8">
        <button className="bg-mosaic-500 text-gray-50 px-4 py-1 rounded-md capitalize">
          Push content down
        </button>
        <button className="bg-mosaic-500 text-gray-50 px-4 py-1 rounded-md capitalize">
          fullscreen overlay
        </button>
        <button className="bg-mosaic-500 text-gray-50 px-4 py-1 rounded-md capitalize">
          pop-over panel
        </button>
        <button className="bg-mosaic-500 text-gray-50 px-4 py-1 rounded-md capitalize">
          slide-in from left
        </button>
        <button className="bg-mosaic-500 text-gray-50 px-4 py-1 rounded-md capitalize">
          slide-in from right
        </button>
        <button className="bg-mosaic-500 text-gray-50 px-4 py-1 rounded-md capitalize">
          slide-in from bottom
        </button>
      </div>

      <FullScreenOverlay />
    </div>
  )
}

export default App
