// const backendUrl = "http://44.202.128.16:8000";
const backendUrl = "http://3.87.186.39";
// const backendUrl = "http://localhost:8000";
const getImageSrc = (imagePath) => {
  if (!imagePath) {
    return "/placeholder.jpg"; // Default placeholder image
  }
  if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
    return imagePath;
  }
  return `${backendUrl}${imagePath}`;
};

export default getImageSrc;
