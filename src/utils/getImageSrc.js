// // const backendUrl = "http://44.202.128.16:8000";
// const backendUrl = "http://3.87.186.39";
// // const backendUrl = "http://localhost:8000";
// const getImageSrc = (imagePath) => {
//   if (!imagePath) {
//     return "/placeholder.jpg"; // Default placeholder image
//   }
//   if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
//     return imagePath;
//   }
//   return `${backendUrl}${imagePath}`;
// };

// export default getImageSrc;

// utils/getImageSrc.js
const getImageSrc = (imagePath) => {
  if (!imagePath) return "/placeholder.jpg";

  // If the path is an absolute URL starting with http://, we keep it as it is
  if (imagePath.startsWith("http://")) {
    // Use the HTTP path directly for backend image URLs
    return imagePath;
  }

  // If the path starts with /uploads, do not add the /uploads prefix again
  if (imagePath.startsWith("/uploads")) {
    return imagePath; // Return the path as it is
  }

  // For other relative paths, prepend /uploads
  return `/uploads${imagePath}`; // Directly serve image from /uploads path
};

export default getImageSrc;
