import React from "react";

const table = [
  { date: "2022-09-01", views: 100, article: "Article 1" },

  { date: "2023-09-01", views: 100, article: "Article 1" },

  { date: "2023-09-02", views: 150, article: "Article 2" },

  { date: "2023-09-02", views: 120, article: "Article 3" },

  { date: "2020-09-03", views: 200, article: "Article 4" },
];

function TableSort() {
  return (
    <div>
      TableSort
      <button>Sort by Date</button>
      <button>Sort by Views</button>
    </div>
  );
}

export default TableSort;
