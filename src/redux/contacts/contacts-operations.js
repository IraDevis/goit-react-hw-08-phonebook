import axios from "axios";
import * as actions from "./contacts-actions";

axios.defaults.baseURL = "http://localhost:3000";

export const fetchContacts = () => (dispatch) => {
  dispatch(actions.fetchContactRequest());
  axios
    .get(`/contacts/`)
    .then(({ data }) => dispatch(actions.fetchContactSuccess(data)))
    .catch((error) => dispatch(actions.fetchContactError(error)));
};

export const addContact = (contact) => (dispatch) => {
  const item = {
    name: contact.name,
    number: contact.number,
  };

  dispatch(actions.addContactRequest());

  axios
    .post("/contacts", item)
    .then(({ data }) => dispatch(actions.addContactSuccess(data)))
    .catch((error) => dispatch(actions.addContactError(error)));
};

export const deleteContacts = (id) => (dispatch) => {
  dispatch(actions.deleteContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(actions.deleteContactSuccess(id)))
    .catch((error) => dispatch(actions.deleteContactError(error)));
};
