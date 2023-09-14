import { Ban, Home, Mail, Phone, Settings } from 'lucide-react'

export function Panel() {
  return (
    <div className="sticky bottom-0 left-0 w-full border-t bg-white pb-8 pt-4">
      <ul className="flex w-full justify-between gap-2 px-2">
        <li className="flex cursor-pointer flex-col items-center gap-2 px-1 transition hover:scale-110">
          <Home size={22} strokeWidth={1.5} />
          <span className="text-sm font-normal">Home</span>
        </li>
        <li className="flex cursor-pointer flex-col items-center gap-2 px-1 transition hover:scale-110">
          <Phone size={22} strokeWidth={1.5} />
          <span className="text-sm font-normal ">Calls</span>
        </li>
        <li className="flex cursor-pointer flex-col items-center gap-2 px-1 transition hover:scale-110">
          <Mail size={22} strokeWidth={1.5} />
          <span className="text-sm font-normal ">Messages</span>
        </li>
        <li className="flex cursor-pointer flex-col items-center gap-2 px-1 transition hover:scale-110">
          <Ban size={22} strokeWidth={1.5} />
          <span className="text-sm font-normal ">Blocked</span>
        </li>
        <li className="flex cursor-pointer flex-col items-center gap-2 px-1 transition hover:scale-110">
          <Settings size={22} strokeWidth={1.5} />
          <span className="text-sm font-normal ">Settings</span>
        </li>
      </ul>
    </div>
  )
}
