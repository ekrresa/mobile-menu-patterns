import { faker } from '@faker-js/faker';
import FullScreenOverlay from './components/FullscreenOverlay';

faker.seed(22);

function App() {
  return (
    <div className="grid grid-rows-layout h-screen justify-center">
      <h1 className="text-center text-3xl py-3 mb-2">Mobile Menu Patterns</h1>
      <div className="flex flex-wrap justify-center gap-4 max-w-2xl mb-8">
        <button className="bg-cyan-500 text-gray-50 px-4 py-1 rounded-md capitalize font-medium">
          Push content down
        </button>
        <button className="bg-cyan-500 text-gray-50 px-4 py-1 rounded-md capitalize font-medium">
          fullscreen overlay
        </button>
        <button className="bg-cyan-500 text-gray-50 px-4 py-1 rounded-md capitalize font-medium">
          pop-over panel
        </button>
        <button className="bg-cyan-500 text-gray-50 px-4 py-1 rounded-md capitalize font-medium">
          slide-in from left
        </button>
        <button className="bg-cyan-500 text-gray-50 px-4 py-1 rounded-md capitalize font-medium">
          slide-in from right
        </button>
        <button className="bg-cyan-500 text-gray-50 px-4 py-1 rounded-md capitalize font-medium">
          slide-in from bottom
        </button>
      </div>

      <FullScreenOverlay faker={faker} />
    </div>
  );
}

export default App;
