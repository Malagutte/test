import { useForm } from "react-hook-form";
import {
  ContactBodyRequest,
  ContactBodyResponse,
} from "./hooks/services/contact/type";
import { useContactService } from "./hooks/services/contact/contact.service.hook";
import { Button, Grid, TextField } from "@mui/material";

export const ContactForm = ({
  contact,
  closeModal,
}: {
  contact?: ContactBodyResponse;
  closeModal: () => void;
}) => {
  const { postCreate, putUpdate } = useContactService();
  const { handleSubmit, register } = useForm<ContactBodyRequest>({
    mode: "onSubmit",
    defaultValues: {
      name: contact?.name || "",
      email: contact?.email || "",
      phone: contact?.phone || "",
    },
  });

  const submitHandler = async (body: ContactBodyRequest) => {
    if (contact) {
      await putUpdate({ id: contact.id, body });
    } else {
      await postCreate({ body });
    }

    closeModal();
  };

  const onSubmit = handleSubmit(submitHandler);

  return (
    <form onSubmit={onSubmit}>
      <Grid
        container
        flexDirection={"row"}
        sx={{ width: "600px" }}
        justifyContent={"center"}
      >
        <Grid
          container
          flexDirection={"column"}
          item
          xs={11}
          justifyContent={"space-between"}
        >
          <Grid mb={1}>
            <TextField fullWidth {...register("name")} label="Name" />
          </Grid>
          <Grid mb={1}>
            <TextField fullWidth {...register("email")} label="Email" />
          </Grid>
          <Grid mb={1}>
            <TextField fullWidth {...register("phone")} label="Phone" />
          </Grid>
          <Grid mb={1}>
            <Button fullWidth variant="contained" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};
