import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface Props extends React.PropsWithChildren {
  isOpen: boolean
  onClose: () => void
}
export function PatternModal(props: Props) {
  const { isOpen, onClose, children } = props

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 cursor-pointer bg-white/80 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
          >
            <div className="xs:w-96 absolute left-1/2 top-1/2 w-[90vw] -translate-x-1/2 -translate-y-1/2">
              <div className="h-[70vh] w-full overflow-hidden rounded-2xl border border-gray-300 shadow-lg">
                {children}
              </div>
              <button
                className="mt-8 w-full rounded-xl bg-mosaic-600 px-8 py-2 text-white shadow-md"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
