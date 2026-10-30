import CartItems from "./CartItems.jsx";

function CartTable({ array }) {
  const element = array.map(({ id, imageSrc, imageAlt, title, price }) => {
    return (
      <CartItems
        key={id}
        imageSrc={imageSrc}
        imageAlt={imageAlt}
        title={title}
        price={`$${price}`}
      />
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Title</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{element}</tbody>
    </table>
  );
}

export default CartTable;
