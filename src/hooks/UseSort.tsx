import { feedbackType } from "@/types/feedbackType";

export default function UseSort() {
  function sortData(data: Array<feedbackType> | null, sort: string) {
    if (!data) return data;
    switch (sort) {
      case "Most UpVotes":
        return data.sort(
          (a: feedbackType, b: feedbackType) =>
            Number(b.upVotes) - Number(a.upVotes)
        );
      case "Least UpVotes":
        return data.sort(
          (a: feedbackType, b: feedbackType) =>
            Number(a.upVotes) - Number(b.upVotes)
        );
      case "Most Comments":
        return data.sort(
          (a: feedbackType, b: feedbackType) =>
            b.comments.length - a.comments.length
        );
      case "Least Comments":
        return data.sort(
          (a: feedbackType, b: feedbackType) =>
            a.comments.length - b.comments.length
        );
      default:
        return data;
    }
  }
  return sortData;
}
