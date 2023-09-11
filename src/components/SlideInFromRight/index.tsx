import * as React from 'react'
import { Menu, Search } from 'lucide-react'
import { matchSorter } from 'match-sorter'

import contactsJSON from '../../assets/contacts.json'
import { Panel } from './Panel'
import { motion } from 'framer-motion'

type Contact = (typeof contactsJSON)[number]

export function SlideInFromRight() {
  const [menuOpen, toggleMenu] = React.useState(false)
  const [searchString, setSearchString] = React.useState('')

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
    <div className="relative mb-4 h-full w-full overflow-y-auto bg-white text-baltic-900">
      <Panel open={menuOpen} closeMenu={() => toggleMenu(false)} />

      <div className="sticky top-0 bg-white">
        <div className="flex items-center justify-between border-b px-4 py-4">
          <h1 className="text-xl font-medium text-mosaic-900">
            Slide In From Right
          </h1>

          <motion.button
            aria-label={menuOpen ? 'close menu' : 'open menu'}
            className="grid place-items-center"
            onClick={() => toggleMenu(state => !state)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Menu strokeWidth={1.5} />
          </motion.button>
        </div>

        <div className="border-b bg-mosaic-50 px-4 py-4">
          <div className="flex items-center overflow-hidden rounded border bg-white pl-3 pr-2">
            <Search
              className="text-xl text-slate-500"
              size={20}
              strokeWidth={1.5}
            />
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
                  <p className="w-10 text-center">{alphabet}</p>
                </div>

                {(contacts ?? []).map(contact => (
                  <div
                    key={contact.id}
                    className="flex items-center gap-4 border-b px-4 py-4"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-mosaic-100">
                      {contact.first_name[0]}
                      {contact.last_name[0]}
                    </span>

                    <div className="">
                      <p className=" font-medium capitalize">
                        {contact.first_name + ' ' + contact.last_name}
                      </p>
                      <p className="text-sm font-normal tabular-nums">
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
