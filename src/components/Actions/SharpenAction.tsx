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

interface ISharpenFormInputs {
  sharpenValue: number
}

const SharpenSchema = yup.object({
  sharpenValue: yup.number().positive().min(0).max(10).required(),
}).required();

export default function SharpenAction({ uploadId, onIsLoaded, onConvertedImage }: any) {
  const [sharpenValue, setSharpenValue] = React.useState(0);
  const toast = useToast();

  const { register, handleSubmit, trigger, control, formState: { errors } } = useForm<ISharpenFormInputs>({
    resolver: yupResolver(SharpenSchema)
  });

  const onSubmit = (data: any) => {
    const { sharpenValue } = data;
    setSharpenValue(sharpenValue);
  };

  const onUpdateState = async (name: any, value: any) => {
    const valid = await trigger(name);
    if (!valid) {
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Text fontSize="4xl" fontWeight="thin">Sharpen Example</Text>

      <Controller
        name="sharpenValue"
        control={control}
        defaultValue={2}
        render={({ field: { value, onChange, ...field } }: any) => (
          <FormControl>
            <Label label="Sharpen Value" />
            <Input
              {...register("sharpenValue")}
              onChange={({ target: { value } }) => {
                onChange(value);
                onUpdateState('sharpenValue', value);
                setSharpenValue(parseInt(value));
              }}
              w={48}
            />
            <Text w={48}>{errors.sharpenValue?.message}</Text>
          </FormControl>
        )}
      />

      <HStack mt={4} spacing={6}>
        <Button
          disabled={!uploadId}
          onClick={async () =>
            handleImageMutation({
              request: {
                route: 'sharpen',
                payload: {
                  id: uploadId,
                  sharpenValue,
                  platform: 'WEB',
                  mimeType: "image/jpg"
                },
                token: process?.env?.NEXT_PUBLIC_USER_API_TOKEN,
              },
              onIsLoaded,
              onConvertedImage,
              toast
            })}
          colorScheme="teal"
          size="md">
          Sharpen
        </Button>
      </HStack>
    </form>
  );
}