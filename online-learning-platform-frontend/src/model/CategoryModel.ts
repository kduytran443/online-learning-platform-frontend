interface CategoryModel {
  id: string;
  name: string;
  description: string;
  code: string;
  parentCategory: string;
  subCategories: CategoryModel[];
}
