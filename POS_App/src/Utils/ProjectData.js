import { groceryItems } from "../productData.json";

const uniqueCategories = [...new Set(groceryItems.map((item) => item.type))];

export const FilterOptions = [
  { key: "all", label: "All" },
  ...uniqueCategories.map((category) => ({
    key: category,
    label: category.charAt(0).toUpperCase() + category.slice(1),
  })),
];

export const SortOptions = [
  { key: "name", label: "Name" },
  { key: "price", label: "Price" },
  { key: "category", label: "Category" },
  { key: "clear", label: "Clear" },
];
