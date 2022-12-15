import { gettotalorder } from "./Apicall";
import { useQuery } from "@tanstack/react-query";

export default function Totalorder() {
    const { data:totalorders } = useQuery(["totalInvoices"], gettotalorder, {
        suspense: true,
        useErrorBoundary: true,
        keepPreviousData: true,
        staleTime: Infinity,
      });

  return (
    <div >
      <h1>
        {totalorders["totalInvoices"]} Invoices
      </h1>
    </div>
  );
}