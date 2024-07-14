export const getDummyDatacategoryList = (): SimpleCategoryModel[] => {
  const arr: SimpleCategoryModel[] = [];

  const categories = [
    { name: "Development", code: "development" },
    { name: "Web Development", code: "web-development" },
    { name: "Front-End Development", code: "front-end-development" },
    { name: "Back-End Development", code: "back-end-development" },
    { name: "Full Stack Development", code: "full-stack-development" },
    { name: "Mobile Development", code: "mobile-development" },
    { name: "Game Development", code: "game-development" },
    { name: "Software Engineering", code: "software-engineering" },
    { name: "Development Tools", code: "development-tools" },
    { name: "IT & Software", code: "it-software" },
    { name: "IT Certification", code: "it-certification" },
    { name: "Network & Security", code: "network-security" },
    { name: "Operating Systems", code: "operating-systems" },
    { name: "Databases", code: "databases" },
    { name: "Software Testing", code: "software-testing" }
  ];

  categories.forEach((category) => {
    arr.push({
      id: "",
      name: category.name,
      code: category.code
    });
  });

  return arr;
};
