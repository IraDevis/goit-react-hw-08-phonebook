import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getContactsList } from "../../redux/contacts/contacts-selector";
import {
  fetchContacts,
  deleteContacts,
} from "../../redux/contacts/contacts-operations";

export default function ContactList() {
  const contacts = useSelector(getContactsList);
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  return (
    <>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            <p>
              {name}: {number}
            </p>
            <button type="button" onClick={() => dispatch(deleteContacts(id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
