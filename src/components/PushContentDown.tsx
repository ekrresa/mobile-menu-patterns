import * as React from 'react'
import { animated, useSpring } from '@react-spring/web'
import { Ban, Home, Mail, Menu, Phone, Search, Settings } from 'lucide-react'
import { matchSorter } from 'match-sorter'

import contactsJSON from '../assets/contacts.json'

type Contact = (typeof contactsJSON)[number]

export function PushContentDown() {
  const [menuOpen, toggleMenu] = React.useState(false)
  const [searchString, setSearchString] = React.useState('')

  const props = useSpring({
    gridTemplateRows: menuOpen ? '1fr' : '0fr',
  })

  const contacts = matchSorter(contactsJSON, searchString, {
    keys: ['first_name', 'last_name'],
  })

  const contactsByAlphabet = contacts.reduce(
    (group, contact) => {
      const firstLetter = contact.first_name[0]
        ? contact.first_name[0].toUpperCase()
        : ''

      group[firstLetter] = group[firstLetter] ?? []

      group[firstLetter]?.push(contact)
      return group
    },
    {} as Record<string, Contact[]>
  )

  const alphabets = Object.keys(contactsByAlphabet).sort()

  return (
    <div className="mx-auto mb-4 w-full max-w-md overflow-y-auto rounded-md bg-white text-baltic-900 drop-shadow">
      <div className="sticky top-0 bg-white">
        <div className="flex items-center justify-between border-b px-4 py-4">
          <h1 className="text-2xl font-semibold">Contacts</h1>

          <button
            className="grid place-items-center"
            onClick={() => toggleMenu(state => !state)}
          >
            <Menu strokeWidth={1.5} />
          </button>
        </div>

        <animated.nav style={props} className="grid px-6">
          <ul className="flex flex-col gap-4 overflow-hidden">
            <li className="flex items-center gap-2 pt-4">
              <Home size={22} strokeWidth={1.5} />
              <span className="font-normal">Home</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={22} strokeWidth={1.5} />
              <span className="font-normal">Calls</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={22} strokeWidth={1.5} />
              <span className="font-normal">Messages</span>
            </li>
            <li className="flex items-center gap-2">
              <Ban size={22} strokeWidth={1.5} />
              <span className="font-normal">Blocked Calls</span>
            </li>
            <li className="flex items-center gap-2 pb-4">
              <Settings size={22} strokeWidth={1.5} />
              <span className="font-normal">Settings</span>
            </li>
          </ul>
        </animated.nav>

        <div className="border-b bg-mosaic-50 px-4 py-4">
          <div className="flex items-center overflow-hidden rounded border bg-white pl-3 pr-2">
            <Search className="text-xl text-slate-500" />
            <input
              className="ml-3 flex-1 py-2 font-normal text-slate-800 focus:outline-none"
              onChange={e => setSearchString(e.target.value)}
              placeholder="Search..."
            />
          </div>
        </div>
      </div>

      <div className="mt-4">
        {alphabets.length > 0 ? (
          alphabets.map(alphabet => {
            const contacts = contactsByAlphabet[alphabet]

            return (
              <React.Fragment key={alphabet}>
                <div className="border-y bg-mosaic-50 px-4 uppercase">
                  <p className="w-12 text-center">{alphabet}</p>
                </div>

                {(contacts ?? []).map(contact => (
                  <div
                    key={contact.id}
                    className="flex items-center gap-4 border-b px-4 py-4"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-mosaic-100">
                      {contact.first_name[0]}
                      {contact.last_name[0]}
                    </span>

                    <div className="">
                      <p className="text-lg font-medium capitalize">
                        {contact.first_name + ' ' + contact.last_name}
                      </p>
                      <p className="font-normal tabular-nums">
                        {contact.phone_number}
                      </p>
                    </div>
                  </div>
                ))}
              </React.Fragment>
            )
          })
        ) : (
          <div className="text-center text-lg">No contacts found</div>
        )}
      </div>
    </div>
  )
}
