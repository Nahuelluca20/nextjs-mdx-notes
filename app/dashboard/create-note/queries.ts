"use server";

export async function sendMdx(formData: FormData) {
  const rawFormData = {
    mdxContent: formData.get("content"),
  };

  console.log(rawFormData.mdxContent);

  return rawFormData.mdxContent;
}
