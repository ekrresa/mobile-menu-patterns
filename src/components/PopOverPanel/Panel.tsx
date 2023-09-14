import { AnimatePresence, motion } from 'framer-motion'
import { Ban, Home, Mail, Phone, Settings, X } from 'lucide-react'

interface Props {
  open: boolean
  closeMenu: () => void
}
export function Panel(props: Props) {
  const { closeMenu, open } = props

  return (
    <AnimatePresence>
      {open && (
        <div className="absolute inset-0 z-10 flex justify-center overflow-y-auto">
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
            className="absolute inset-0 cursor-pointer bg-black/50"
            onClick={closeMenu}
          />

          <motion.div
            className="fixed top-5 mx-auto flex w-11/12 items-center rounded-2xl bg-white py-4"
            initial={{
              scale: 1.1,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.75,
            }}
          >
            <motion.button
              whileTap={{ scale: 0.9 }}
              aria-label="close modal"
              className="absolute right-2 top-2 grid h-9 w-9 cursor-pointer place-items-center rounded-full text-baltic-900"
              onClick={closeMenu}
            >
              <X size={22} strokeWidth={1.5} />
            </motion.button>

            <ul className="flex w-full flex-col gap-2 overflow-hidden">
              <li className="pt-2"></li>
              <li className="flex cursor-pointer items-center gap-2 px-6 py-1 transition-colors hover:bg-mosaic-50">
                <Home size={22} strokeWidth={1.5} />
                <span className="font-normal">Home</span>
              </li>
              <li className="flex cursor-pointer items-center gap-2 px-6 py-1 transition-colors hover:bg-mosaic-50">
                <Phone size={22} strokeWidth={1.5} />
                <span className="font-normal">Calls</span>
              </li>
              <li className="flex cursor-pointer items-center gap-2 px-6 py-1 transition-colors hover:bg-mosaic-50">
                <Mail size={22} strokeWidth={1.5} />
                <span className="font-normal">Messages</span>
              </li>
              <li className="flex cursor-pointer items-center gap-2 px-6 py-1 transition-colors hover:bg-mosaic-50">
                <Ban size={22} strokeWidth={1.5} />
                <span className="font-normal">Blocked Calls</span>
              </li>
              <li className="flex cursor-pointer items-center gap-2 px-6 py-1 transition-colors hover:bg-mosaic-50">
                <Settings size={22} strokeWidth={1.5} />
                <span className="font-normal">Settings</span>
              </li>
              <li className="pb-2"></li>
            </ul>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
