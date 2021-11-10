import dynamic from "next/dynamic";

// export const getServerSideProps = async () => {
//   try {
//     // Esto puede ser mejor optimizado si usamos getStaticProps.
//     //Aun queda analizar, ya que no se agregan a menudo muchos bullyTypes
//     const result = await fetch("http://localhost:3001/bully_types");
//     const data = await result.json();
//     console.log(data);

//     return {
//       props: {
//         data,
//       }, // will be passed to the page component as props
//     };
//   } catch (error) {
//     console.log(error);
//   }
// };

const Reporte = () => {
  const Report = dynamic(() => import("../components/Report"), {
    ssr: false
  })

  return <Report />
};

export default Reporte;
