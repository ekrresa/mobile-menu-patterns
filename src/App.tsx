import * as React from 'react';
import { HiMenu } from 'react-icons/hi';
import { IoSearchOutline } from 'react-icons/io5';
import { faker } from '@faker-js/faker';
import groupBy from 'lodash.groupby';
import contacts from './assets/contacts.json';

const result = groupBy(contacts, contact => contact.first_name[0]);
faker.seed(22);

function App() {
  const keys = Object.keys(result).sort();

  return (
    <>
      <h1 className="text-center text-3xl py-3 mb-2">Mobile Menu Patterns</h1>
      <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto mb-8">
        <button className="bg-cyan-500 text-gray-50 px-4 py-1 rounded-md font-medium">
          Push content down
        </button>
        <button className="bg-cyan-500 text-gray-50 px-4 py-1 rounded-md font-medium">
          fullscreen overlay
        </button>
        <button className="bg-cyan-500 text-gray-50 px-4 py-1 rounded-md font-medium">
          pop-over panel
        </button>
        <button className="bg-cyan-500 text-gray-50 px-4 py-1 rounded-md font-medium">
          slide-in from left
        </button>
        <button className="bg-cyan-500 text-gray-50 px-4 py-1 rounded-md font-medium">
          slide-in from right
        </button>
        <button className="bg-cyan-500 text-gray-50 px-4 py-1 rounded-md font-medium">
          slide-in from bottom
        </button>
      </div>

      <div className="max-w-[428px] bg-white mx-auto h-[50rem] overflow-y-auto rounded">
        <div className="sticky top-0 bg-white">
          <div className="flex justify-between items-center  px-4 py-4 border-b">
            <h1 className="text-2xl font-semibold">Contacts</h1>

            <button className="bg-slate-200 grid place-items-center rounded-full p-2">
              <HiMenu className="text-2xl" />
            </button>
          </div>

          <div className="px-4 py-4 border-b bg-gray-50">
            <div className="flex items-center bg-white border pl-3 pr-2 rounded overflow-hidden">
              <IoSearchOutline className="text-xl text-slate-500" />
              <input
                className="flex-1 ml-3 py-2 font-medium focus:outline-none"
                placeholder="Search..."
              />
            </div>
          </div>
        </div>

        <div className="mt-4">
          {keys.map(key => {
            const contacts = result[key];
            return (
              <React.Fragment key={key}>
                <div className="px-4 bg-gray-50 border-y uppercase">{key}</div>
                {contacts.map(contact => (
                  <div
                    key={contact.id}
                    className="px-4 py-4 border-b flex items-center gap-4"
                  >
                    <img
                      src={faker.image.avatar()}
                      className="rounded-full w-16"
                      alt=""
                    />
                    <div className="">
                      <p className="font-semibold text-lg capitalize">
                        {contact.first_name + ' ' + contact.last_name}
                      </p>
                      <p className="font-normal">{contact.phone}</p>
                    </div>
                  </div>
                ))}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
