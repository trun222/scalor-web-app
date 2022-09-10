import React from "react";
import {
  FormLabel,
} from "@chakra-ui/react";

export default function Label({ label }: any) {
  return (
    <FormLabel fontWeight="light">{label}</FormLabel>
  );
}