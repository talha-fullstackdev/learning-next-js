import comments from "./data";
export const GET = async () => {
  return new Response(JSON.stringify(comments));
};
