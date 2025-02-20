export default function ProductsLayout({ children }) {
    return (
      <div>
        <h1>products header</h1>
        <main>{children}</main>
        <h1>products footer</h1>
      </div>
    );
  }