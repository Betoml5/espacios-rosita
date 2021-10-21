import { useRouter } from "next/dist/client/router";
import fetch from "node-fetch";

export const getServerSideProps = async ({ params }) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/report/${params.id}`
    );
    const { body: report } = await response.json();
    return {
      props: {
        report,
      },
    };
  } catch (error) {
    console.log(error);
  }
};

const ReportDetail = ({ report }) => {
  return (
    <div className="">
      <p>{report.name}</p>
    </div>
  );
};

export default ReportDetail;
