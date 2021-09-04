import { createSelector } from "@reduxjs/toolkit";
import { filtered } from "../../redux/filter/filter-selector";

export const getAllContacts = (state) => state.contacts;

// export default function getContactsList(state) {
//   return getContacts(state).filter((contact) => contact.name.toLowerCase().includes(state.filter.toLowerCase()));
// }

export const getContactsList = createSelector(
  [getAllContacts, filtered],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
