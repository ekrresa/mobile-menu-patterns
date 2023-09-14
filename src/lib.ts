import { matchSorter } from 'match-sorter'
import contactsJSON from './assets/contacts.json'

type Contact = (typeof contactsJSON)[number]

export function getContactsByAlphabet(searchString: string) {
  const contacts = matchSorter(contactsJSON, searchString, {
    keys: ['first_name', 'last_name', 'phone_number'],
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

  return { alphabets, contactsByAlphabet }
}
