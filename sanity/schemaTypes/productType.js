import { defineField, defineType } from "sanity";
export const productType = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name of the product",
      type: "string",
      validation: (Rule) => Rule.required().min(2).max(50),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
      validation: (Rule) => Rule.required().min(2).max(50),
    }),
    defineField({
      name: "price",
      type: "number",
      validation: (Rule) => Rule.positive().precision(2),
    }),
    defineField({
      name: "image",
      title: "Image of the product",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "stock",
      type: "number",
      validation: (Rule) => Rule.positive().integer(),
    }),
  ],
});
