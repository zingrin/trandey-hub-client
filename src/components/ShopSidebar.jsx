import PopularProducts from "../pages/PopularProducts";
import TrendingProducts from "../pages/TrendingProducts";

export default function ShopSidebar({ allProducts }) {
  const trending = [...allProducts]
    .sort((a, b) => b.reviews - a.reviews)
    .slice(0, 6);

  const popular = [...allProducts]
    .sort((a, b) => b.rating - a.rating || b.reviews - a.reviews)
    .slice(0, 6);

  return (
    <aside className="w-[280px] space-y-8">
      <TrendingProducts products={trending} />
      <PopularProducts products={popular} />
    </aside>
  );
}
