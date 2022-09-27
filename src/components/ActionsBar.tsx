import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Center
} from "@chakra-ui/react";
import ResizeAction from "./Actions/ResizeAction";
import MoonlightAction from "./Actions/MoonlightAction";
import SharpenAction from "./Actions/SharpenAction";
import GrayAction from "./Actions/GrayAction";
import ColorBalanceAction from "./Actions/ColorBalanceAction";
import CollageAction from "./Actions/CollageAction";
import QualityAction from "./Actions/QualityAction";

export default function ActionsBar({ onIsLoaded, onConvertedImage, uploadId, convertedImage }: any) {
  return (
    <Tabs colorScheme="blackAlpha" >
      <TabList mt={20}>
        <Tab isDisabled={!uploadId}>Resize</Tab>
        <Tab isDisabled={!uploadId}>Moonlight</Tab>
        <Tab isDisabled={!uploadId}>Sharpen</Tab>
        <Tab isDisabled={!uploadId}>Gray</Tab>
        <Tab isDisabled={!uploadId}>Color Balance</Tab>
        <Tab isDisabled={!uploadId}>Collage</Tab>
        <Tab isDisabled={!uploadId}>Quality</Tab>
      </TabList>

      {uploadId && (
        <TabPanels>
          <TabPanel>
            <Center>
              <ResizeAction uploadId={uploadId} onIsLoaded={onIsLoaded} onConvertedImage={onConvertedImage} convertedImage={convertedImage} />
            </Center>
          </TabPanel>
          <TabPanel>
            <Center>
              <MoonlightAction uploadId={uploadId} onIsLoaded={onIsLoaded} onConvertedImage={onConvertedImage} />
            </Center>
          </TabPanel>
          <TabPanel>
            <Center>
              <SharpenAction uploadId={uploadId} onIsLoaded={onIsLoaded} onConvertedImage={onConvertedImage} />
            </Center>
          </TabPanel>
          <TabPanel>
            <Center>
              <GrayAction uploadId={uploadId} onIsLoaded={onIsLoaded} onConvertedImage={onConvertedImage} />
            </Center>
          </TabPanel>
          <TabPanel>
            <Center>
              <ColorBalanceAction uploadId={uploadId} onIsLoaded={onIsLoaded} onConvertedImage={onConvertedImage} />
            </Center>
          </TabPanel>
          <TabPanel>
            <Center>
              <CollageAction uploadId={uploadId} onIsLoaded={onIsLoaded} onConvertedImage={onConvertedImage} />
            </Center>
          </TabPanel>
          <TabPanel>
            <Center>
              <QualityAction uploadId={uploadId} onIsLoaded={onIsLoaded} onConvertedImage={onConvertedImage} />
            </Center>
          </TabPanel>
        </TabPanels>
      )}
    </Tabs>
  );
}