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
          className="justify-left absolute inset-0 z-10 flex overflow-y-auto bg-black/30"
        >
          <motion.div
            initial={{
              x: '-80%',
            }}
            animate={{
              x: 0,
              transition: {
                type: 'tween',
                duration: 0.2,
              },
            }}
            exit={{
              x: '-90%',
            }}
            className="w-3/4 bg-white"
          >
            <div className="">
              <motion.button
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                aria-label="close modal"
                className="absolute right-2.5 top-4 grid h-9 w-9 cursor-pointer place-items-center rounded-full text-baltic-900"
                onClick={closeMenu}
              >
                <X size={22} strokeWidth={1.5} />
              </motion.button>
            </div>

            <ul className="flex w-full flex-col gap-2 overflow-hidden pt-16">
              <li className="pt-2"></li>
              <li className="flex cursor-pointer items-center gap-2 px-6 py-1 transition-colors hover:bg-mosaic-100">
                <Home size={22} strokeWidth={1.5} />
                <span className="font-normal">Home</span>
              </li>
              <li className="flex cursor-pointer items-center gap-2 px-6 py-1 transition-colors hover:bg-mosaic-100">
                <Phone size={22} strokeWidth={1.5} />
                <span className="font-normal">Calls</span>
              </li>
              <li className="flex cursor-pointer items-center gap-2 px-6 py-1 transition-colors hover:bg-mosaic-100">
                <Mail size={22} strokeWidth={1.5} />
                <span className="font-normal">Messages</span>
              </li>
              <li className="flex cursor-pointer items-center gap-2 px-6 py-1 transition-colors hover:bg-mosaic-100">
                <Ban size={22} strokeWidth={1.5} />
                <span className="font-normal">Blocked Calls</span>
              </li>
              <li className="flex cursor-pointer items-center gap-2 px-6 py-1 transition-colors hover:bg-mosaic-100">
                <Settings size={22} strokeWidth={1.5} />
                <span className="font-normal">Settings</span>
              </li>
              <li className="pb-2"></li>
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
