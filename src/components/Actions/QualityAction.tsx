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

interface IQualityFormInputs {
  quality: number
}

const QualitySchema = yup.object({
  quality: yup.number().positive().integer().min(0).max(100).required(),
}).required();

export default function qualityAction({ uploadId, onIsLoaded, onConvertedImage }: any) {
  const [quality, setQuality] = React.useState(50);
  const toast = useToast();

  const { register, handleSubmit, trigger, control, formState: { errors } } = useForm<IQualityFormInputs>({
    resolver: yupResolver(QualitySchema)
  });

  const onSubmit = (data: any) => {
    const { quality } = data;
    setQuality(quality);
  };

  const onUpdateState = async (name: any, value: any) => {
    const valid = await trigger(name);
    if (!valid) {
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Text fontSize="4xl" fontWeight="thin">Quality Example</Text>

      <Controller
        name="quality"
        control={control}
        defaultValue={50}
        render={({ field: { value, onChange, ...field } }: any) => (
          <FormControl>
            <Label label="Quality" />
            <Input
              {...register("quality")}
              onChange={({ target: { value } }) => {
                onChange(value);
                onUpdateState('quality', value);
                setQuality(parseInt(value));
              }}
              w={48}
            />
            <Text w={48}>{errors.quality?.message}</Text>
          </FormControl>
        )}
      />

      <HStack mt={4} spacing={6}>
        <Button
          disabled={!uploadId}
          onClick={async () =>
            handleImageMutation({
              request: {
                route: 'quality',
                payload: {
                  id: uploadId,
                  quality,
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
          Quality
        </Button>
      </HStack>
    </form>
  );
}