import MainContainer from "../components/MainContainer";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import App from "./graphql/main";

const client = new ApolloClient({
  uri: "http://192.168.17.133:5000/graphql",
  cache: new InMemoryCache(),
});

const index = () => {
  return (
    <ApolloProvider client={client}>
      <MainContainer keywords={"main page"}>
        <h1>Головна</h1>
        <App />
      </MainContainer>
    </ApolloProvider>
  );
};

export default index;
