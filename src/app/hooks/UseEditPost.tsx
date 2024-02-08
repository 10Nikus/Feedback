useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/posts/${id}`);
      const result = await response.json();
      setData((prev) => ({
        ...prev,
        newTitle: result.feedback.title,
        newCategory: result.feedback.category,
        newDescription: result.feedback.description,
      }));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchData();
}, [id]);
