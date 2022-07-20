export async function getInstagramImages() {
  const response = await fetch(
    "https://focuseye.pl/wp-json/wp/v2/media?media_folder=59"
  );
  const data = await response.json();
  // const images = data.map((image) => {
  //   const smallImg = image.media_details.sizes.thumbnail.source_url;
  //   return smallImg;
  // });
  const thumbnails = [];
  for (const image in data) {
    thumbnails.push({
      id: image,
      ...data[image],
    });
  }
  console.log(thumbnails);
  return thumbnails;
}
