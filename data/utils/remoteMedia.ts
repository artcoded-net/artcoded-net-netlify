import path from "path";
import urlJoin from "url-join";

export const getRemoteMedia = (relativePath: string) =>
  urlJoin(
    process.env.NEXT_PUBLIC_GRAPHQL_SERVER || "http://localhost:1337",
    relativePath
  );
