import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home page title</title>
      </Head>

      <h1 className="bg-white p-1">Home page main component</h1>
      {[
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      ].map((i) => (
        <p key={i} className="my-0.5 bg-white p-1">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
          distinctio nulla enim aspernatur ad sapiente maiores corporis
          architecto quas officia modi unde voluptas similique fuga, harum
          quibusdam molestiae laboriosam, accusamus provident quae dignissimos
          nobis magni! Nesciunt alias quo, dolorum enim nisi consequatur ab ipsa
          molestiae, laboriosam sed sunt, blanditiis vitae.
        </p>
      ))}
    </>
  );
}
