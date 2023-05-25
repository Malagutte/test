import { useEffect, useState } from "react";
import App from "./App";
import { useContactService } from "./hooks/services/contact/contact.service.hook";
import { ContactBodyResponse } from "./hooks/services/contact/type";

export const AppContainer = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedContact, setSelectedContact] = useState<ContactBodyResponse>();
  const [contacts, setContacts] = useState<ContactBodyResponse[]>([]);

  const { getContacts, deleteContact } = useContactService();

  const fetchContacts = async () => {
    setIsLoading(true);
    const response = await getContacts();
    setContacts(response);
    setIsLoading(false);
  };

  const handleDelete = async (id: string) => {
    setIsLoading(true);
    await deleteContact(id);
    await fetchContacts();
    setIsLoading(false);
  };

  const handleOpenModal = (contact?: ContactBodyResponse) => {
    setSelectedContact(contact);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedContact(undefined);
  };

  useEffect(() => {
    if (!isModalOpen) fetchContacts();
  }, [isModalOpen]);

  return (
    <App
      {...{
        rows: contacts,
        isLoading,
        handleDelete,
        handleOpenModal,
        closeModal,
        isModalOpen,
        selectedContact,
      }}
    />
  );
};
