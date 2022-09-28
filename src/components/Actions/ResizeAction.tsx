import React from "react";
import {
  HStack,
  Button,
  useToast,
  FormControl,
  Input,
  Text,
  VStack
} from "@chakra-ui/react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { handleImageMutation } from "@/src/util/action.service";
import Label from '@/src/components/common/Label';

interface IResizeFormInputs {
  height: number
  width: number
}

const ResizeSchema = yup.object({
  height: yup.number().positive().integer().required(),
  width: yup.number().positive().integer().required(),
}).required();

export default function ResizeAction({ uploadId, convertedImage, onIsLoaded, onConvertedImage }: any) {
  const [height, setHeight] = React.useState(200);
  const [width, setWidth] = React.useState(200);
  const toast = useToast();

  const { register, handleSubmit, trigger, control, formState: { errors } } = useForm<IResizeFormInputs>({
    resolver: yupResolver(ResizeSchema)
  });

  const onSubmit = (data: any) => {
    const { height, width } = data;
    setHeight(height);
    setWidth(width);
  };

  const onUpdateState = async (name: any, value: any) => {
    const valid = await trigger(name);
    if (!valid) {
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack spacing={4} mt={2}>
        <Controller
          name="height"
          control={control}
          defaultValue={200}
          render={({ field: { value, onChange, ...field } }: any) => (
            <FormControl>
              <Label label="Height" />
              <Input
                {...register("height")}
                onChange={({ target: { value } }) => {
                  onChange(value);
                  onUpdateState('height', value);
                  setHeight(parseInt(value));
                }}
                w={48}
              />
              <Text w={48}>{errors.height?.message}</Text>
            </FormControl>
          )}
        />
        <Controller
          name="width"
          control={control}
          defaultValue={200}
          render={({ field: { value, onChange, ...field } }: any) => (
            <FormControl>
              <Label label="Width" />
              <Input
                {...register("width")}
                onChange={({ target: { value } }) => {
                  onChange(value);
                  onUpdateState('width', value);
                  setWidth(parseInt(value));
                }}
                w={48}
              />
              <Text w={48}>{errors.height?.message}</Text>
            </FormControl>
          )}
        />
      </VStack>

      <HStack mt={4} spacing={6}>
        <Button
          disabled={!uploadId}
          onClick={async () =>
            handleImageMutation({
              request: {
                route: 'resize',
                payload: {
                  id: uploadId,
                  height,
                  width,
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
          Resize
        </Button>
      </HStack>
    </form>
  );
}