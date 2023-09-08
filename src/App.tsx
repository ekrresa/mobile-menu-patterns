// import { PushContentDown } from './components/PushContentDown'
import { SlideInFromLeft } from './components/SlideInFromLeft'

function App() {
  return (
    <div className="grid h-screen grid-rows-[auto,auto,1fr] justify-center">
      <h1 className="mb-2 pb-3 pt-4 text-center text-3xl font-medium text-baltic-900">
        Mobile Menu Patterns
      </h1>
      <div className="mb-8 flex max-w-2xl flex-wrap justify-center gap-4">
        <button className="rounded-md bg-mosaic-600 px-4 py-1 capitalize text-gray-50">
          Push content down
        </button>
        <button className="rounded-md bg-mosaic-600 px-4 py-1 capitalize text-gray-50">
          fullscreen overlay
        </button>
        <button className="rounded-md bg-mosaic-600 px-4 py-1 capitalize text-gray-50">
          pop-over panel
        </button>
        <button className="rounded-md bg-mosaic-600 px-4 py-1 capitalize text-gray-50">
          slide-in from left
        </button>
        <button className="rounded-md bg-mosaic-600 px-4 py-1 capitalize text-gray-50">
          slide-in from right
        </button>
        <button className="rounded-md bg-mosaic-600 px-4 py-1 capitalize text-gray-50">
          slide-in from bottom
        </button>
      </div>

      <SlideInFromLeft />
    </div>
  )
}

export default App
