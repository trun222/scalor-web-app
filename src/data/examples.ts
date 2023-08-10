export const uploadExample = {
  id: 'upload',
  title: 'Upload',
  description: 'Upload a file to the server',
  axiosCode: `// Axios
await axios
  .post("https://api.scalor.app/upload", {
    file: imageOrVideoBinaryData,
    mimeType: 'Test.mp4'
  }, {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "multipart/form-data",
    token,
  }
});`,
  fetchCode: `

// Fetch
await fetch("https://api.scalor.app/upload", {
  method: 'POST',
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "multipart/form-data",
    token,
  },
  body: {
    file: imageOrVideoBinaryData,
    mimeType: 'Test.mp4'
  }
});
`
}

export const uploadCloudExample = {
  id: 'uploadCloud',
  title: 'Upload Cloud',
  description: 'Upload a file to the cloud',
  axiosCode: `// Axios
await axios
  .post("https://api.scalor.app/upload", {
    file: imageOrVideoBinaryData,
    connectionId: 1,
    fileURI: "test/Test.jpg",
    mimeType: "image/jpg"
  }, {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "multipart/form-data",
    token,
  }
});`,
  fetchCode: `

// Fetch
await fetch("https://api.scalor.app/upload", {
  method: 'POST',
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "multipart/form-data",
    token,
  },
  {
    file: imageOrVideoBinaryData,
    connectionId: 1,
    fileURI: "test/Test.jpg",
    mimeType: "image/jpg"
  }
});`,
}

export const startLargeUploadExample = {
  id: 'startLargeUpload',
  title: 'Start Large Upload',
  description: 'Start a large upload',
  axiosCode: `// Axios
await axios
  .post("https://api.scalor.app/start-large-upload", {
    connectionId: 1,
    fileURI: "test/Test12MB.mp4",
    fileSize: 12147905,
  }, {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "multipart/form-data",
    token,
  }
});`,
  fetchCode: `
  
// Fetch
await fetch("https://api.scalor.app/start-large-upload", {
  method: 'POST',
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "multipart/form-data",
    token,
  },
  {
    connectionId: 1,
    fileURI: "test/Test12MB.mp4",
    fileSize: 12147905,
  }
});`,
};

export const finishLargeUploadExample = {
  id: 'finishLargeUpload',
  title: 'Finish Large Upload',
  description: 'Finish a large upload',
  axiosCode: `// Axios
await axios
  .post("https://api.scalor.app/finish-large-upload", {
    connectionId: 1,
    fileURI: "test/Test1GB.mp4",
    parts: [
        {
            ETag: "3bf0f162d5d86c8bffae84947e4b043a",
          PartNumber: 1
        },
        {
            ETag: "60bbe173f86f9564c4d718b9daff098b,
            PartNumber: 2
        },
        {
            ETag: "ac08e978fa6263376b320c6736e0858a",
            PartNumber: 3
        }
    ],
    assetId: ".D5b06m3UKy8VnE62GV2_O",
    key: "test/Test12MB.mp4"
  }, {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "multipart/form-data",
    token,
  }
});`,
  fetchCode: `
  
// Fetch
await fetch("https://api.scalor.app/finish-large-upload", {
  method: 'POST',
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "multipart/form-data",
    token,
  },
  {
    connectionId: 1,
    fileURI: "test/Test1GB.mp4",
    parts: [
        {
            ETag: "3bf0f162d5d86c8bffae84947e4b043a",
          PartNumber: 1
        },
        {
            ETag: "60bbe173f86f9564c4d718b9daff098b,
            PartNumber: 2
        },
        {
            ETag: "ac08e978fa6263376b320c6736e0858a",
            PartNumber: 3
        }
    ],
    assetId: ".D5b06m3UKy8VnE62GV2_O",
    key: "test/Test12MB.mp4"
  }
});`,
};

export const getConnectionExample = {
  id: 'getConnection',
  title: 'Get Connection',
  description: 'Get a connection',
  axiosCode: `// Axios
await axios
  .get("https://api.scalor.app/cloudConnection/1", {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "multipart/form-data",
    token,
  }
});`,
  fetchCode: `
  
// Fetch
await fetch("https://api.scalor.app/cloudConnection/1", {
  method: 'GET',
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "multipart/form-data",
    token,
  }
});`,
};

export const createConnectionExample = {
  id: 'createConnection',
  title: 'Create Connection',
  description: 'Create a connection',
  axiosCode: `// Axios
await axios
  .post("https://api.scalor.app/cloudConnection", {
    "provider": "AWS",
    "bucket": "scalor",
    "region": "us-east-1",
    "accessKey": "AK9ASNFFPTVUWFVY1BXN",
    "secretKey": "1Hucj1HMiQQJol+szLestFu3Iyg0UdOOozb8Qy0b"
  },{
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "multipart/form-data",
    token,
  }
});`,
  fetchCode: `
  
// Fetch
await fetch("https://api.scalor.app/cloudConnection", {
  method: 'POST',
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "multipart/form-data",
    token,
  },
  {
    "provider": "AWS",
    "bucket": "scalor",
    "region": "us-east-1",
    "accessKey": "AK9ASNFFPTVUWFVY1BXN",
    "secretKey": "1Hucj1HMiQQJol+szLestFu3Iyg0UdOOozb8Qy0b"
  }
});`,
};

export const deleteConnectionExample = {
  id: 'deleteConnection',
  title: 'Delete Connection',
  description: 'Delete a connection',
  axiosCode: `// Axios
await axios
  .delete("https://api.scalor.app/cloudConnection/1", {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "multipart/form-data",
    token,
  }
});`,
  fetchCode: `
  
// Fetch
await fetch("https://api.scalor.app/cloudConnection/1", {
  method: 'DELETE',
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "multipart/form-data",
    token,
  }
});`,
};

export const imageResizeExample = {
  id: 'imageResize',
  title: 'Image Resize',
  description: 'Resize an image',
  axiosCode: `// Axios
await axios
  .post("https://api.scalor.app/resize", {
    "id": "19095586-063b-4f8f-82a7-7a2f5e56f91a",
    "height": 500,
    "width": 500,
    "platform": "SERVER",
    "mimeType": "image/jpg"
  }, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "multipart/form-data",
      token,
    }
  });`,
  fetchCode: `
  
// Fetch
await fetch("https://api.scalor.app/resize", {
  method: 'POST',
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "multipart/form-data",
    token,
  },
  {
    "id": "19095586-063b-4f8f-82a7-7a2f5e56f91a",
    "height": 500,
    "width": 500,
    "platform": "SERVER",
    "mimeType": "image/jpg"
  }
}); `,
};

export const imageQualityExample = {
  id: 'imageQuality',
  title: 'Image Quality',
  description: 'Change the quality of an image',
  axiosCode: `// Axios
await axios
  .post("https://api.scalor.app/quality", {
    "id": "19095586-063b-4f8f-82a7-7a2f5e56f91a",
    "quality": 10,
    "platform": "WEB",
    "mimeType": "image/jpg"
  }, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "multipart/form-data",
      token,
    }
  });`,
  fetchCode: `
  
// Fetch
await fetch("https://api.scalor.app/quality", {
  method: 'POST',
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "multipart/form-data",
    token,
  },
  {
    "id": "19095586-063b-4f8f-82a7-7a2f5e56f91a",
    "quality": 10,
    "platform": "WEB",
    "mimeType": "image/jpg"
  }
}); `,
};

export const imageMoonlightExample = {
  id: 'imageMoonlight',
  title: 'Image Moonlight',
  description: 'Add moonlight to an image',
  axiosCode: `// Axios
await axios
  .post("https://api.scalor.app/moonlight", {
    "id": "49ed40ce-e658-4f29-8c50-b8ea75e1929f",
    "moonValue": 0.9,
    "platform": "WEB",
    "mimeType": "image/jpg"
  }, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "multipart/form-data",
      token,
    }
  });`,
  fetchCode: `
  
// Fetch
await fetch("https://api.scalor.app/moonlight", {
  method: 'POST',
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "multipart/form-data",
    token,
  },
  {
    "id": "49ed40ce-e658-4f29-8c50-b8ea75e1929f",
    "moonValue": 0.9,
    "platform": "WEB",
    "mimeType": "image/jpg"
  }
}); `,
};

export const imageSharpenExample = {
  id: 'imageSharpness',
  title: 'Image Sharpness',
  description: 'Change the sharpness of an image',
  axiosCode: `// Axios
await axios
  .post("https://api.scalor.app/sharpen", {
    "id": "49ed40ce-e658-4f29-8c50-b8ea75e1929f",
    "sharpenValue": 2,
    "platform": "WEB",
    "mimeType": "image/jpg"
  }, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "multipart/form-data",
      token,
    }
  });`,
  fetchCode: `
  
// Fetch
  await fetch("https://api.scalor.app/sharpen", {
    method: 'POST',
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "multipart/form-data",
      token,
    },
  {
      "id": "49ed40ce-e658-4f29-8c50-b8ea75e1929f",
      "sharpenValue": 2,
      "platform": "WEB",
      "mimeType": "image/jpg"
  }
});`,
};

export const imageColorBalanceExample = {
  id: 'imageColorBalance',
  title: 'Image Color Balance',
  description: 'Change the color balance of an image',
  axiosCode: `// Axios
await axios
  .post("https://api.scalor.app/average", {
    "id": "49ed40ce-e658-4f29-8c50-b8ea75e1929f",
    "platform": "WEB",
    "mimeType": "image/jpg"
  }, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "multipart/form-data",
      token,
    }
  });`,
  fetchCode: `
  
// Fetch
  await fetch("https://api.scalor.app/average", {
    method: 'POST',
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "multipart/form-data",
      token,
    },
  {
      "id": "49ed40ce-e658-4f29-8c50-b8ea75e1929f",
      "platform": "WEB",
      "mimeType": "image/jpg"
  }
}); `,
};

export const imageGrayExample = {
  id: 'imageGray',
  title: 'Image Gray',
  description: 'Change an image to gray',
  axiosCode: `// Axios
await axios
  .post("https://api.scalor.app/gray", {
    "id": "49ed40ce-e658-4f29-8c50-b8ea75e1929f",
    "platform": "WEB",
    "mimeType": "image/jpg"
  }, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "multipart/form-data",
      token,
    }
  });`,
  fetchCode: `
  
// Fetch
await fetch("https://api.scalor.app/gray", {
  method: 'POST',
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "multipart/form-data",
    token,
  },
  {
    "id": "49ed40ce-e658-4f29-8c50-b8ea75e1929f",
    "platform": "WEB",
    "mimeType": "image/jpg"
  }
}); `,
};

export const imageCollageExample = {
  id: 'imageCollage',
  title: 'Image Collage',
  description: 'Create a collage from multiple images',
  axiosCode: `// Axios
await axios
  .post("https://api.scalor.app/collage", {
    "idOne": "19095586-063b-4f8f-82a7-7a2f5e56f91a",
    "idTwo": "25456512-0ea6-487f-85d6-91806ae5299c",
    "platform": "SERVER",
    "mimeType": "image/jpg"
  }, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "multipart/form-data",
      token,
    }
  });`,
  fetchCode: `
  
// Fetch
await fetch("https://api.scalor.app/collage", {
  method: 'POST',
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "multipart/form-data",
    token,
  },
  {
    "idOne": "19095586-063b-4f8f-82a7-7a2f5e56f91a",
    "idTwo": "25456512-0ea6-487f-85d6-91806ae5299c",
    "platform": "SERVER",
    "mimeType": "image/jpg"
  }
}); `,
};

export const videoEncodeExample = {
  id: 'videoEncode',
  title: 'Video Encode',
  description: 'Encode a video',
  axiosCode: `// Axios
await axios
  .post("https://api.scalor.app/encode", {
    "connectionId": 18,
    "id": "3122f4cd-21bc-45c9-95c8-a608ae962ee6",
    "webhookURL": "https://events.hookdeck.com/e/src_JdOcW",
    "fileURI": "test/new_footage.mp4",
    "format": "360",
    "mimeType": "video/mp4"
  }, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "multipart/form-data",
      token,
    }
  });`,
  fetchCode: `
  
// Fetch
await fetch("https://api.scalor.app/encode", {
  method: 'POST',
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "multipart/form-data",
    token,
  },
  {
    "connectionId": 18,
    "id": "3122f4cd-21bc-45c9-95c8-a608ae962ee6",
    "webhookURL": "https://events.hookdeck.com/e/src_JdOcW",
    "fileURI": "test/new_footage.mp4",
    "format": "360",
    "mimeType": "video/mp4"
  }
}); `,
};
