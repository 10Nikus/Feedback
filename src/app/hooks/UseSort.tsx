export default function UseSort() {
  function sortData(data: any, sort: string) {
    if (!data) return data;

    switch (sort) {
      case "Most UpVotes":
        return data.sort(
          (a: any, b: any) => Number(b.upVotes) - Number(a.upVotes)
        );
      case "Least UpVotes":
        return data.sort(
          (a: any, b: any) => Number(a.upVotes) - Number(b.upVotes)
        );
      case "Most Comments":
        return data.sort(
          (a: any, b: any) => b.comments.length - a.comments.length
        );
      case "Least Comments":
        return data.sort(
          (a: any, b: any) => a.comments.length - b.comments.length
        );
      default:
        return data;
    }
  }
  return sortData;
}
