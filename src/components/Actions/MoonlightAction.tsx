import React from "react";
import {
  HStack,
  Button,
  useToast,
  FormControl,
  Input,
  Text,
} from "@chakra-ui/react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { handleImageMutation } from "@/src/util/action.service";
import Label from '@/src/components/common/Label';

interface IMoonlightFormInputs {
  moonValue: number
}

const MoonlightSchema = yup.object({
  moonValue: yup.number().positive().min(0).max(1).required(),
}).required();

export default function MoolightAction({ uploadId, metadata, onIsLoaded, onConvertedImage }: any) {
  const [moonValue, setMoonValue] = React.useState(0);
  const toast = useToast();

  const { register, handleSubmit, trigger, control, formState: { errors } } = useForm<IMoonlightFormInputs>({
    resolver: yupResolver(MoonlightSchema)
  });

  const onSubmit = (data: any) => {
    const { moonValue } = data;
    setMoonValue(moonValue);
  };

  const onUpdateState = async (name: any, value: any) => {
    const valid = await trigger(name);
    if (!valid) {
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="moonValue"
        control={control}
        defaultValue={.5}
        render={({ field: { value, onChange, ...field } }: any) => (
          <FormControl>
            <Label label="Moon Value" />
            <Input
              {...register("moonValue")}
              onChange={({ target: { value } }) => {
                onChange(value);
                onUpdateState('height', value);
                setMoonValue(parseFloat(value));
              }}
              w={48}
            />
            <Text w={48}>{errors.moonValue?.message}</Text>
          </FormControl>
        )}
      />

      <HStack mt={4} spacing={6}>
        <Button
          disabled={!uploadId}
          onClick={async () =>
            handleImageMutation({
              request: {
                route: 'moonlight',
                payload: {
                  id: uploadId,
                  moonValue,
                  platform: 'WEB',
                  mimeType: metadata?.mimeType,
                },
                token: process?.env?.NEXT_PUBLIC_USER_API_TOKEN,
              },
              onIsLoaded,
              onConvertedImage,
              toast
            })}
          colorScheme="teal"
          size="md">
          Moonlight
        </Button>
      </HStack>
    </form>
  );
}