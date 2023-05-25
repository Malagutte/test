import { useApi } from "../api.hook";
import {
  ContactBodyResponse,
  ContactCreateRequest,
  ContactUpdateRequest,
} from "./type";

export const useContactService = () => {
  const { del, get, put, post } = useApi();

  const pathUrl = "/api/v1/contacts";

  const postCreate = async ({ body }: ContactCreateRequest): Promise<void> => {
    await post(pathUrl, { ...body });
  };

  const putUpdate = async ({
    id,
    body,
  }: ContactUpdateRequest): Promise<void> => {
    await put(`${pathUrl}/${id}`, { ...body });
  };

  const deleteContact = async (id: string): Promise<void> => {
    await del(`${pathUrl}/${id}`);
  };

  const getContacts = async (): Promise<ContactBodyResponse[]> => {
    const { data } = await get<ContactBodyResponse[]>(pathUrl);
    return data;
  };

  return {
    postCreate,
    putUpdate,
    deleteContact,
    getContacts,
  };
};
