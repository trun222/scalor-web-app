import useHTTP from "../hooks/useHTTP";

export const handleImageMutation = async ({ request, onIsLoaded, onConvertedImage, toast }) => {
  try {
    onIsLoaded(false);
    const data = await useHTTP(request)
    onConvertedImage(data.file);
    onIsLoaded(true);
    toast({
      title: 'API RESPONSE.',
      description: `Image ${request.route} sucessfully.`,
      status: 'success',
      duration: 5000,
      position: 'top-left'
    })
  }
  catch (e) {
    onIsLoaded(true);
    toast({
      title: 'API RESPONSE.',
      description: `Image ${request.route} failed.`,
      status: 'error',
      duration: 5000,
      position: 'top-left'
    })
  }
}