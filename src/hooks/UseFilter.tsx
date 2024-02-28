import { feedbackType } from "@/types/feedbackType";

export default function useFilter() {
  function filterData(
    data: Array<feedbackType> | null,
    filter: string,
    property: "status" | "category"
  ) {
    if (filter === "all") return data;
    if (!data) return [];
    if (property === "category") {
      const res = data.filter((item: feedbackType) => item.category === filter);
      return res;
    } else {
      const res = data.filter((item: feedbackType) => item.status === filter);
      return res;
    }
  }
  return filterData;
}
