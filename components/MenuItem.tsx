export default function MenuItem({
  name,
  desc,
  price,
}: {
  name: React.ReactNode;
  desc: string;
  price: string;
}) {
  return (
    <div className="menu-item">
      <div>
        <div className="name">{name}</div>
        <div className="desc">{desc}</div>
      </div>
      <span className="price">{price}</span>
    </div>
  );
}
