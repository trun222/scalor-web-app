import type { NextPage } from "next";
import React from "react";
import {
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";
import SideBarLayout from "@/src/components/layouts/SideBarLayout";
import ColorBalanceAction from "@/src/components/Actions/ColorBalanceAction";
import DemoUploader from "@/src/components/uploads/DemoUploader";

const actionMenuItems = [
  {
    action: 'Resize',
    link: '/demo/resize'
  },
  {
    action: 'Moonlight',
    link: '/demo/moonlight'
  },
  {
    action: 'Sharpen',
    link: '/demo/sharpen'
  },
  {
    action: 'Gray',
    link: '/demo/gray'
  },
  {
    action: 'Color Balance',
    link: '/demo/color-balance'
  },
  {
    action: 'Collage',
    link: '/demo/collage'
  },
  {
    action: 'Quality',
    link: '/demo/quality'
  }
];

const ColorBalanceActionPage: NextPage = () => {
  const [uploadedImage, setUploadedImage] = React.useState("");
  const [convertedImage, setConvertedImage] = React.useState("");
  const [isLoaded, setIsLoaded] = React.useState(true);
  const [uploadId, setUploadId] = React.useState("");

  return (
    <SideBarLayout menuItems={actionMenuItems}>
      <Grid
        h='100%'
        templateRows='repeat(12, 1fr)'
        templateColumns='repeat(12, 1fr)'
      >
        <GridItem rowSpan={7} colSpan={12}>
          <Text fontSize="4xl" fontWeight="bold" color="black">
            Color Balance
          </Text>

          <DemoUploader
            uploadId={uploadId}
            uploadedImage={uploadedImage}
            convertedImage={convertedImage}
            setUploadId={setUploadId}
            setUploadedImage={setUploadedImage}
            setConvertedImage={setConvertedImage}
            isLoaded={isLoaded}
          />
        </GridItem>
        <GridItem rowSpan={12} colSpan={3}>
          <Text fontSize="2xl" fontWeight="bold" color="black" mt={2}>
            Settings
          </Text>

          <ColorBalanceAction
            uploadId={uploadId}
            onIsLoaded={(state: boolean) => setIsLoaded(state)}
            onConvertedImage={(imageData: string) => setConvertedImage(imageData)}
            convertedImage={convertedImage}
          />
        </GridItem>
      </Grid>
    </SideBarLayout>
  )
}

export default ColorBalanceActionPage;
