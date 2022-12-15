import axios from "axios";

const appUrl = axios.create({
  baseURL: "https://invoiceheroapi.mlveda-test.in/",
});

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaG9wTmFtZSI6InRlY2tpZS1zdXBwbGllcy00Lm15c2hvcGlmeS5jb20ifQ.c20g1P39f2XmfgFg_ZxOlzylhhcnyXvvD3shbdPJVt0";

export const gettotalorder = () => {
  return appUrl.get("/api/order/count", {
    headers: { Authorization: `Bearer ${token}` },
  })
  .then((res) => res.data);
};