import React, { useState, useContext, useEffect } from "react";
import { localGallery } from "../public/data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [blogWP, setBlogWP] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [fourTitle, setFourTitle] = useState(null);
  const [offersWP, setOffersWP] = useState(null);
  const [gallery, setGallery] = useState(localGallery);

  useEffect(async () => {
    setIsLoading(true);
    try {
      const responseBlog = await fetch(
        `https://data.focuseye.pl/wp-json/wp/v2/artykuly`
      );
      const data = await responseBlog.json();
      const blogWP = data.map((article) => {
        return article;
      });
      const titleOfArticles = blogWP.map((item) => {
        const title = item.acf.title;
        return title;
      });
      const fourTitle = titleOfArticles.slice(0, 4);
      setFourTitle(fourTitle);
      setBlogWP(blogWP);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(async () => {
    try {
      const responseOferta = await fetch(
        `https://data.focuseye.pl/wp-json/wp/v2/oferty?order=asc`
      );
      const data = await responseOferta.json();
      const offersWP = data.map((offer) => {
        return offer;
      });
      setOffersWP(offersWP);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(async () => {
    try {
      const responseChrzestImg = await fetch(
        "https://data.focuseye.pl/wp-json/wp/v2/media?media_folder=60&per_page=100"
      );
      const dataChrzest = await responseChrzestImg.json();
      const chrzestImgWP = dataChrzest.map((image) => {
        const images = image.source_url;
        return images;
      });

      const responseCiazoweImg = await fetch(
        "https://data.focuseye.pl/wp-json/wp/v2/media?media_folder=62&per_page=100"
      );
      const dataCiazowe = await responseCiazoweImg.json();
      const ciazoweImgWP = dataCiazowe.map((image) => {
        const images = image.source_url;
        return images;
      });

      const responseNoworodkoweImg = await fetch(
        "https://data.focuseye.pl/wp-json/wp/v2/media?media_folder=63&per_page=100"
      );
      const dataNoworodkowe = await responseNoworodkoweImg.json();
      const noworodkoweImgWP = dataNoworodkowe.map((image) => {
        const images = image.source_url;
        return images;
      });

      const responseRodzinneImg = await fetch(
        "https://data.focuseye.pl/wp-json/wp/v2/media?media_folder=64&per_page=100"
      );
      const dataRodzinne = await responseRodzinneImg.json();
      const rodzinneImgWP = dataRodzinne.map((image) => {
        const images = image.source_url;
        return images;
      });
      const responseSlubyImg = await fetch(
        "https://data.focuseye.pl/wp-json/wp/v2/media?media_folder=65&per_page=100"
      );
      const dataSluby = await responseSlubyImg.json();
      const slubyImgWP = dataSluby.map((image) => {
        const images = image.source_url;
        return images;
      });
      const responseZakochaniImg = await fetch(
        "https://data.focuseye.pl/wp-json/wp/v2/media?media_folder=66&per_page=100"
      );
      const dataZakochani = await responseZakochaniImg.json();
      const zakochaniImgWP = dataZakochani.map((image) => {
        const images = image.source_url;
        return images;
      });
      const galleryWordPress = [
        { id: 1, img: ciazoweImgWP, category: "brzuszkowe" },
        { id: 2, img: slubyImgWP, category: "ślubne" },
        { id: 3, img: zakochaniImgWP, category: "miłosne" },
        { id: 4, img: noworodkoweImgWP, category: "noworodkowe" },
        { id: 5, img: chrzestImgWP, category: "chrzciny" },
        { id: 6, img: rodzinneImgWP, category: "rodzinne" },
      ];
      setGallery(galleryWordPress);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        blogWP,
        isLoading,
        fourTitle,
        offersWP,
        gallery,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
