import * as React from 'react';
import { Faker } from '@faker-js/faker';
import groupBy from 'lodash.groupby';
import { HiMenu } from 'react-icons/hi';
import { IoSearchOutline } from 'react-icons/io5';

import contacts from '../../assets/contacts.json';

const result = groupBy(contacts, contact => contact.first_name[0]);

interface Props {
  faker: Faker;
}
export default function PushContentDown({ faker }: Props) {
  const keys = Object.keys(result).sort();

  return (
    <div className="bg-white w-[27rem] mx-auto mb-4 overflow-y-auto rounded-md">
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
                  <img src={faker.image.avatar()} className="rounded-full w-16" alt="" />
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
  );
}
