function CartItems({ imageSrc, imageAlt, title, price }) {
  return (
    <tr className="product-description">
      <td className="product-image-container">
        <img className="product-image" src={imageSrc} alt={imageAlt} />
      </td>
      <td className="item-name">{title}</td>
      <td className="item-price">{price}</td>
    </tr>
  );
}

export default CartItems;
