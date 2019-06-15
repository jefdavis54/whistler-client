import App, { Container } from "next/app";
import { ThemeProvider } from "styled-components";
import { ApolloProvider } from "react-apollo";
import withApollo from "../lib/withApollo";
import Page from "../components/Page";
import InitializeGlobalStyles from "../styles/_global";
import defaultTheme from "../styles/_theme_default";

interface WithApolloProps {
  apollo: any;
}

class MyApp extends App<React.ComponentClass & WithApolloProps> {
  // zJED TODO - This exposes the query to the user. Should I use 'https://github.com/zeit/next-codemod#url-to-withrouter' instead?
  static async getInitialProps({ Component, ctx }: any) {
    let pageProps: any = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    pageProps.query = ctx.query;
    return { pageProps };
  }
  render() {
    const { Component, apollo, pageProps } = this.props;

    return (
      <Container>
        <InitializeGlobalStyles />
        <ThemeProvider theme={defaultTheme}>
          <ApolloProvider client={apollo}>
            <Page>
              <Component {...pageProps} />
            </Page>
          </ApolloProvider>
        </ThemeProvider>
      </Container>
    );
  }
}

export default withApollo(MyApp);
