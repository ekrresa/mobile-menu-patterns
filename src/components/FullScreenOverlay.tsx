import * as React from 'react'
import { animated, useSpring } from '@react-spring/web'
import { Ban, Home, Mail, Menu, Phone, Search, Settings } from 'lucide-react'
import { matchSorter } from 'match-sorter'

import contactsJSON from '../assets/contacts.json'

type Contact = (typeof contactsJSON)[number]

export default function FullScreenOverlay() {
  const [menuOpen, toggleMenu] = React.useState(false)
  const [searchString, setSearchString] = React.useState('')

  const props = useSpring({
    gridTemplateRows: menuOpen ? '1fr' : '0fr',
  })

  const filteredContacts = matchSorter(contactsJSON, searchString, {
    keys: ['first_name', 'last_name'],
  })

  const contactsByAlphabet = filteredContacts.reduce((group, contact) => {
    const firstLetter = contact.first_name[0]
      ? contact.first_name[0].toUpperCase()
      : ''

    group[firstLetter] = group[firstLetter] ?? []

    group[firstLetter]?.push(contact)
    return group
  }, {} as Record<string, Contact[]>)

  const alphabets = Object.keys(contactsByAlphabet).sort()

  return (
    <div className="bg-white text-baltic-900 w-full max-w-md drop-shadow mx-auto mb-4 overflow-y-auto rounded-md">
      <div className="sticky top-0 bg-white">
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <h1 className="text-2xl font-semibold">Contacts</h1>

          <button
            className="bg-mosaic-100 grid place-items-center rounded-full p-2"
            onClick={() => toggleMenu(state => !state)}
          >
            <Menu className="text-2xl" />
          </button>
        </div>

        <animated.nav style={props} className="px-6 grid">
          <ul className="flex flex-col gap-4 overflow-hidden">
            <li className="flex gap-2 pt-4 items-center">
              <Home size={22} strokeWidth={1.5} />
              <span className="font-normal">Home</span>
            </li>
            <li className="flex gap-2 items-center">
              <Phone size={22} strokeWidth={1.5} />
              <span className="font-normal">Calls</span>
            </li>
            <li className="flex gap-2 items-center">
              <Mail size={22} strokeWidth={1.5} />
              <span className="font-normal">Messages</span>
            </li>
            <li className="flex gap-2 items-center">
              <Ban size={22} strokeWidth={1.5} />
              <span className="font-normal">Blocked Calls</span>
            </li>
            <li className="flex gap-2 pb-4 items-center">
              <Settings size={22} strokeWidth={1.5} />
              <span className="font-normal">Settings</span>
            </li>
          </ul>
        </animated.nav>

        <div className="px-4 py-4 border-b bg-mosaic-50">
          <div className="flex items-center bg-white border pl-3 pr-2 rounded overflow-hidden">
            <Search className="text-xl text-slate-500" />
            <input
              className="flex-1 ml-3 py-2 font-normal text-slate-800 focus:outline-none"
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
                <div className="px-4 bg-mosaic-50 border-y uppercase">
                  <p className="w-12 text-center">{alphabet}</p>
                </div>

                {(contacts ?? []).map(contact => (
                  <div
                    key={contact.id}
                    className="px-4 py-4 border-b flex items-center gap-4"
                  >
                    <span className="rounded-full w-12 h-12 bg-mosaic-100 flex justify-center items-center shrink-0">
                      {contact.first_name[0]}
                      {contact.last_name[0]}
                    </span>

                    <div className="">
                      <p className="font-medium text-lg capitalize">
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
