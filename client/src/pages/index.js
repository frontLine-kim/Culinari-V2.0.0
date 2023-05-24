import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import MainBanner from "../components/MainBanner";

import ProductItemSlider from "../components/ProductItemSlider";

const Container = styled.div`
  min-width: 1100px;
`;

export const TodayRecommendProducts = styled.div`
  max-width: 1100px;
  margin: 40px auto;
`;

export const Title = styled.div`
  font-weight: 700;
  text-align: center;
  font-size: 28px;
  padding: 20px;
`;

export function Main() {
  const [newProductData, setNewProductData] = useState(null);
  const [bestProductData, setBestProductData] = useState(null);

  useEffect(() => {
    const getNewProductData = async () => {
      const { data } = await axios.get(`${process.env.REACT_APP_URL}/collections/newproduct?size=20`);

      return data;
    };

    const getBestProductData = async () => {
      const { data } = await axios.get(`${process.env.REACT_APP_URL}/collections/bestproducts?size=20`);

      return data;
    };

    (async () => {
      try {
        const newProductData = await getNewProductData();
        const bestProductData = await getBestProductData();

        setNewProductData(newProductData);
        setBestProductData(bestProductData);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <>
      <MainBanner />
      <Container>
      <TodayRecommendProducts>
        <Title>이달의 추천 상품</Title>
        <ProductItemSlider data={bestProductData && bestProductData.data} />
      </TodayRecommendProducts>

      <TodayRecommendProducts>
        <Title>이달의 신상품</Title>
        <ProductItemSlider data={newProductData && newProductData.data} />
      </TodayRecommendProducts>
    </Container>
    </>
    
  );
}
