
import React from 'react';
import type { NextPage } from 'next'
import { Text, Select } from '@chakra-ui/react'
import DocsLayout from '@/src/components/layouts/DocsLayout';
import { CopyBlock, github } from "react-code-blocks";
import {
  uploadExample,
  uploadCloudExample,
  startLargeUploadExample,
  finishLargeUploadExample,
  getConnectionExample,
  createConnectionExample,
  deleteConnectionExample,
  imageResizeExample,
  imageQualityExample,
  imageMoonlightExample,
  imageSharpenExample,
  imageColorBalanceExample,
  imageGrayExample,
  imageCollageExample,
  videoEncodeExample,
} from '@/src/data/examples';

const RequestFormats: any = {
  react: "React",
  nodejs: "Node.Js",
}

const RequestTypes: any = {
  upload: "Upload",
  upload_cloud: "Upload Cloud",
  start_large_upload: "Start Large Upload",
  finish_large_upload: "Finish Large Upload",
  get_cloud_connection: "Get Cloud Connection",
  create_cloud_connection: "Create Cloud Connection",
  delete_cloud_connection: "Delete Cloud Connection",
  image_resize: "Image Resize",
  image_quality: "Image Quality",
  image_moonlight: "Image Moonlight",
  image_sharpen: "Image Sharpen",
  image_color_balance: "Image Color Balance",
  image_gray: "Image Gray",
  image_collage: "Image Collage",
  video_encode: "Video Encode",
}

const Examples: NextPage = () => {
  const [requestFormat, setRequestFormat] = React.useState('react');
  const [requestType, setRequestType] = React.useState('upload');

  const determineExample = function (): string {
    switch (requestFormat) {
      case 'react':
        switch (requestType) {
          case 'upload':
            return uploadExample.axiosCode + uploadExample.fetchCode;
          case 'upload_cloud':
            return uploadCloudExample.axiosCode + uploadCloudExample.fetchCode;
          case 'start_large_upload':
            return startLargeUploadExample.axiosCode + startLargeUploadExample.fetchCode;
          case 'finish_large_upload':
            return finishLargeUploadExample.axiosCode + finishLargeUploadExample.fetchCode;
          case 'get_cloud_connection':
            return getConnectionExample.axiosCode + getConnectionExample.fetchCode;
          case 'create_cloud_connection':
            return createConnectionExample.axiosCode + createConnectionExample.fetchCode;
          case 'delete_cloud_connection':
            return deleteConnectionExample.axiosCode + deleteConnectionExample.fetchCode;
          case 'image_resize':
            return imageResizeExample.axiosCode + imageResizeExample.fetchCode;
          case 'image_quality':
            return imageQualityExample.axiosCode + imageQualityExample.fetchCode;
          case 'image_moonlight':
            return imageMoonlightExample.axiosCode + imageMoonlightExample.fetchCode;
          case 'image_sharpen':
            return imageSharpenExample.axiosCode + imageSharpenExample.fetchCode;
          case 'image_color_balance':
            return imageColorBalanceExample.axiosCode + imageColorBalanceExample.fetchCode;
          case 'image_gray':
            return imageGrayExample.axiosCode + imageGrayExample.fetchCode;
          case 'image_collage':
            return imageCollageExample.axiosCode + imageCollageExample.fetchCode;
          case 'video_encode':
            return videoEncodeExample.axiosCode + videoEncodeExample.fetchCode;
          default:
            return uploadExample.axiosCode + uploadExample.fetchCode;
        }
      case 'nodejs':
        switch (requestType) {
          case 'upload':
            return uploadExample.axiosCode;
          case 'upload_cloud':
            return uploadCloudExample.axiosCode;
          case 'start_large_upload':
            return startLargeUploadExample.axiosCode;
          case 'finish_large_upload':
            return finishLargeUploadExample.axiosCode;
          case 'get_cloud_connection':
            return getConnectionExample.axiosCode;
          case 'create_cloud_connection':
            return createConnectionExample.axiosCode;
          case 'delete_cloud_connection':
            return deleteConnectionExample.axiosCode;
          case 'image_resize':
            return imageResizeExample.axiosCode;
          case 'image_quality':
            return imageQualityExample.axiosCode;
          case 'image_moonlight':
            return imageMoonlightExample.axiosCode;
          case 'image_sharpen':
            return imageSharpenExample.axiosCode;
          case 'image_color_balance':
            return imageColorBalanceExample.axiosCode;
          case 'image_gray':
            return imageGrayExample.axiosCode;
          case 'image_collage':
            return imageCollageExample.axiosCode;
          case 'video_encode':
            return videoEncodeExample.axiosCode;
          default:
            return uploadExample.axiosCode;
        }
      default:
        return uploadExample.axiosCode + uploadExample.fetchCode;
    }
  }

  return (
    <DocsLayout>
      <Text fontSize={{ base: "xl", md: "3xl" }}>Examples</Text>

      <Text w="60%">
        The examples below are provided, so that it is as easy as possible to start building
        your project with Scalor instead of spending time on writing boilerplate code.
      </Text>

      <Text>Request Format:</Text>

      <Select w={60} value={requestFormat} onChange={(e: any) => setRequestFormat(e.target.value)}>
        {
          Object.keys(RequestFormats).map((key: any) => {
            return <option key={key} value={key}>{RequestFormats[key]}</option>
          }
          )
        }
      </Select>

      <Text>Request Type:</Text>
      <Select w={60} value={requestType} onChange={(e: any) => setRequestType(e.target.value)}>
        {
          Object.keys(RequestTypes).map((key: any) => {
            return <option key={key} value={key}>{RequestTypes[key]}</option>
          }
          )
        }
      </Select>

      <Text>Request Type: {RequestFormats[requestFormat]} - {RequestTypes[requestType]}</Text>
      <CopyBlock
        // @ts-ignore
        text={determineExample()}
        language="tsx"
        showLineNumbers
        theme={github}
        codeBlock
        copied
        customStyle={{ width: '60%' }}
      />
    </DocsLayout>
  )
}

export default Examples;
