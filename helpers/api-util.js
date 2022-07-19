export async function getInstagramImages() {
  const response = await fetch(
    "https://focuseye.pl/wp-json/wp/v2/media?media_folder=59"
  );
  const data = await response.json();
  const thumbnails = data.map((image) => {
    const smallImg = image.media_details.sizes.thumbnail.source_url;
    return smallImg;
  });
  return thumbnails;
}
