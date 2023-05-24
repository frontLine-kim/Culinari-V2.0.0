import styled from "styled-components";

const Item = styled.div`
  margin: 0 auto;
  padding: 10px;
  font-size: 14px;
  width: 220px;

  .image_wrapper {
    width: 200px;
    height: 230px;
    overflow: hidden;
    margin-bottom: 6px;
    background-color: #f1f3f5;
  }

  .name {
    margin-bottom: 5px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .price {
    margin-top: 10px;
    margin-bottom: 5px;
    font-size: 16px;
    font-weight: bold;
  }

  .info{
    width: 200px;
  }

  img {
    width: 100%;
    transition: 1s;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

function ProductItem({ id, imgUrl, name, price }) {
  const ref = `/product/${id}`;
  return (
    <Item>
      <a href={ref}>
        <div className="image_wrapper">
          <img src={imgUrl} />
        </div>
        <div className="info">
          <h3 className="name">{name}</h3>
          <div className="price">{price.toLocaleString()}원</div>
        </div>
      </a>
    </Item>
  );
}

export default ProductItem;
