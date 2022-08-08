export async function getChrzestImages() {
  const response = await fetch(
    "https://focuseye.pl/wp-json/wp/v2/media?media_folder=60"
  );
  const data = await response.json();
  const chrzestWPImg = data.map((image) => {
    const images = image.media_details.sizes.full.source_url;
    return images;
  });

  return chrzestWPImg;
}
