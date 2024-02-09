export default function useFilter() {
  function filterData(
    data: any,
    filter: string,
    property: "status" | "category"
  ) {
    if (filter === "all") return data;
    if (!data) return [];
    if (property === "category") {
      const res = data.filter((item: any) => item.category === filter);
      return res;
    } else {
      const res = data.filter((item: any) => item.status === filter);
      return res;
    }
  }
  return filterData;
}
