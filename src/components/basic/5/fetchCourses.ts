export const fetchCourses = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: "React Basics", instructor: "John Doe", students: 45 },
        {
          id: 2,
          title: "JavaScript ES6+",
          instructor: "Jane Smith",
          students: 32,
        },
      ]);
    }, 2000);
  });
};
