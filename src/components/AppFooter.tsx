export default function AppFooter() {
  return (
    <footer className="mt-2 pb-1">
      <p className="mb-0.5 bg-white p-1">App footer component</p>
      {[1, 2, 3, 4, 5, 6, 7].map((i) => (
        <p key={i} className="my-0.5 bg-white p-1">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
          reprehenderit similique maxime quas, nemo itaque, sunt blanditiis eum
          fugit, temporibus dolor accusamus molestiae. Inventore non quod at in
          incidunt est.
        </p>
      ))}
    </footer>
  );
}
