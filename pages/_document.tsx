import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

export default class MyDoc extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head />
        <body className="bg-gray-200 antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
