import httpLoader from "../loaders/httpLoader";

export const handleImageMutation = async ({ request, onIsLoaded, onConvertedImage, toast }: any) => {
  try {
    onIsLoaded(false);
    const data = await httpLoader(request)
    onConvertedImage(data.file);
    onIsLoaded(true);
    toast({
      title: 'API RESPONSE.',
      description: `Image ${request.route} sucessfully.`,
      status: 'success',
      duration: 5000,
      position: 'bottom-left'
    })
  }
  catch (e) {
    onIsLoaded(true);
    toast({
      title: 'API RESPONSE.',
      description: `Image ${request.route} failed.`,
      status: 'error',
      duration: 5000,
      position: 'bottom-left'
    })
  }
}