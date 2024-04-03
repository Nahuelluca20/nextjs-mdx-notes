import Editor from "./components/editor";

export default function page({searchParams}: {searchParams: URLSearchParams}) {
  console.log(searchParams);

  return <Editor />;
}
