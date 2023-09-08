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
          className="absolute inset-0 z-10 flex flex-col justify-end overflow-y-auto bg-black/50"
        >
          <motion.div
            initial={{
              bottom: '-100%',
            }}
            animate={{
              bottom: '0%',
            }}
            exit={{
              bottom: '-100%',
            }}
            className="absolute w-full rounded-t-2xl bg-white pb-8 pt-4"
          >
            <div className="pr-4">
              <motion.button
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                aria-label="close modal"
                className="ml-auto grid h-9 w-9 cursor-pointer place-items-center rounded-full text-baltic-900"
                onClick={closeMenu}
              >
                <X size={22} strokeWidth={1.5} />
              </motion.button>
            </div>

            <ul className="flex w-full flex-col gap-2 overflow-hidden">
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
