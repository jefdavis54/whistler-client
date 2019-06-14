// lib/withApollo.js
import withApollo from "next-with-apollo";
import ApolloClient, { InMemoryCache } from "apollo-boost";
// zJED TODO Change this to an environment variable
import { GRAPHQL_URL_TEMP } from "./constants";

export default withApollo(
  ({ ctx, headers, initialState = {} }) =>
    new ApolloClient({
      uri: GRAPHQL_URL_TEMP,
      credentials: "same-origin",
      cache: new InMemoryCache().restore(initialState),
      request: async operation => {
        const token =
          typeof window !== "undefined" ? await localStorage.getItem("token") : undefined;
        operation.setContext({
          headers: {
            authorization: token ? `Bearer ${token}` : "",
          },
        });
      },
    }),
);
