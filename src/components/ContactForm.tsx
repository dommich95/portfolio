// components/ContactForm.tsx
import { Box, Button, Flex, Text } from "@radix-ui/themes";
import React, { useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import "../app/globals.css";
import styled from "styled-components";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<FormData>();
  const formRef = useRef<HTMLFormElement | null>(null);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await fetch(
        "https://getform.io/f/cd412dc4-2980-48e2-94c4-2336e88325c3",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        formRef.current?.reset();
        console.log("Form submitted successfully");
      } else {
        // Handle errors, e.g., show an error message.
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
      <Flex
        direction="column"
        justify="center"
        gap="8"
        style={{
          width: "100%",
        }}
      >
        <Box
          style={{
            textAlign: "center",
            fontSize: "40px",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
          <Text>Contact</Text>
        </Box>
        <label>
          <StyledInput
            placeholder="Name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <Box pt="3">
              <Text color="red" size="4">
                *{errors.name.message} !
              </Text>
            </Box>
          )}
        </label>

        <label>
          <StyledInput
            placeholder="E-mail"
            type="email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <Box pt="3">
              <Text color="red" size="4">
                *{errors.email.message} !
              </Text>
            </Box>
          )}
        </label>

        <label>
          <StyledInputMessage
            placeholder="Message"
            {...register("message", { required: "Message is required" })}
          />
          {errors.message && (
            <Box pt="3">
              <Text color="red" size="4">
                *{errors.message.message} !
              </Text>
            </Box>
          )}
        </label>

        <Button
          style={{
            backgroundColor: "transparent",
            width: "fit-content",
            border: "1px solid white",
            padding: "20px",
            fontSize: "20px",
            margin: "0 auto",
          }}
          type="submit"
          disabled={isSubmitting}
        >
          Submit
        </Button>
      </Flex>
    </form>
  );
};

const StyledInput = styled.input`
  max-width: 85vw;
  width: 500px;
  border-radius: 6px;
  border: 1px solid white;
  background-color: rgba(204, 214, 246, 0.2);
  color: white;
  padding: 0.75rem;
`;
const StyledInputMessage = styled.textarea`
  max-width: 85vw;
  width: 500px;
  height: 300px;
  border-radius: 6px;
  border: 1px solid white;
  background-color: rgba(204, 214, 246, 0.2);
  color: white;
  padding: 0.75rem;
`;
export default ContactForm;
