import * as React from 'react'

import { FullScreenOverlay } from './components/FullScreenOverlay'
import { PopOverPanel } from './components/PopOverPanel'
import { PushContentDown } from './components/PushContentDown'
import { SlideInFromBottom } from './components/SlideInFromBottom'
import { SlideInFromLeft } from './components/SlideInFromLeft'
import { SlideInFromRight } from './components/SlideInFromRight'
import { PatternModal } from './components/PatternModal'

type PatternState =
  | 'push-content-down'
  | 'slide-in-from-bottom'
  | 'fullscreen-overlay'
  | 'pop-over-panel'
  | 'slide-in-from-left'
  | 'slide-in-from-right'

const patternMap: Record<PatternState, React.ReactNode> = {
  'push-content-down': <PushContentDown />,
  'slide-in-from-bottom': <SlideInFromBottom />,
  'fullscreen-overlay': <FullScreenOverlay />,
  'pop-over-panel': <PopOverPanel />,
  'slide-in-from-left': <SlideInFromLeft />,
  'slide-in-from-right': <SlideInFromRight />,
}
function App() {
  const [activePattern, setActivePattern] =
    React.useState<PatternState>('push-content-down')

  const [modalOpen, setModalOpen] = React.useState(false)

  return (
    <div className="mx-auto max-w-3xl px-6 text-center">
      <header>
        <h1 className="text-center text-[2.5rem] font-semibold text-mosaic-900">
          Mobile Menu Patterns
        </h1>

        <p className="mt-2 text-center text-lg text-baltic-900">
          A collection of patterns for site navigation on mobile
        </p>
      </header>

      <section className="mb-8 mt-24 flex flex-wrap justify-center gap-x-4 gap-y-10 text-left">
        <button
          className="border-b-4 border-baltic-700 bg-transparent text-lg capitalize text-baltic-700"
          onClick={() => {
            setActivePattern('fullscreen-overlay')
            setModalOpen(true)
          }}
        >
          Full Screen Overlay
        </button>
        <button
          className="border-b-4 border-baltic-700 bg-transparent text-lg capitalize text-baltic-700"
          onClick={() => {
            setActivePattern('pop-over-panel')
            setModalOpen(true)
          }}
        >
          Popover Panel
        </button>
        <button
          className="border-b-4 border-baltic-700 bg-transparent text-lg capitalize text-baltic-700"
          onClick={() => {
            setActivePattern('push-content-down')
            setModalOpen(true)
          }}
        >
          Push content down
        </button>
        <button
          className="border-b-4 border-baltic-700 bg-transparent text-lg capitalize text-baltic-700"
          onClick={() => {
            setActivePattern('slide-in-from-bottom')
            setModalOpen(true)
          }}
        >
          Slide in from bottom
        </button>
        <button
          className="border-b-4 border-baltic-700 bg-transparent text-lg capitalize text-baltic-700"
          onClick={() => {
            setActivePattern('slide-in-from-left')
            setModalOpen(true)
          }}
        >
          Slide in from left
        </button>

        <button
          className="border-b-4 border-baltic-700 bg-transparent text-lg capitalize text-baltic-700"
          onClick={() => {
            setActivePattern('slide-in-from-right')
            setModalOpen(true)
          }}
        >
          Slide in from right
        </button>
      </section>

      <PatternModal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        {patternMap[activePattern]}
      </PatternModal>

      <footer className="absolute bottom-0 left-0 -z-10 mt-8 w-full py-4 text-center text-sm text-baltic-700">
        Built by{' '}
        <a
          href="https://github.com/ekrresa"
          target="_blank"
          rel="noreferrer"
          className="decoration-slate-500 transition-all duration-500 hover:underline"
        >
          Ochuko.
        </a>
      </footer>
    </div>
  )
}

export default App
