import React, { useState } from "react";
import "../components/TableSort.css";

const table = [
  { date: "2022-09-01", views: 100, article: "Article 1" },

  { date: "2023-09-01", views: 100, article: "Article 1" },

  { date: "2023-09-02", views: 150, article: "Article 2" },

  { date: "2023-09-02", views: 120, article: "Article 3" },

  { date: "2020-09-03", views: 200, article: "Article 4" },
];

function TableSort() {
  // const handleSortByDate = () => {
  //   table = table.sort((a, b) => b.date - a.date);
  //   console.log(table, "sort by date");
  // };
  // const handleSortByViews = () => {
  //   table = table.sort((a, b) => b.views - a.views);
  //   console.log(table, "sort by views");
  // };

  const [tableData, setTableData] = useState(table);
  const [sortOption, setSortOption] = useState(null);

  const sortTable = (option) => {
    const sortedData = [...tableData].sort((a, b) => {
      if (a[option] < b[option]) return 1;
      if (a[option] > b[option]) return -1;
      // If dates or views are equal, sort by the other criteria
      if (option === "date") return b.views - a.views;
      if (option === "views") return new Date(b.date) - new Date(a.date);
      return 0;
    });

    setTableData(sortedData);
    setSortOption(option);
  };

  return (
    <div className="App">
      <h1>Date and Views Table</h1>
      <button onClick={() => sortTable("date")}>Sort by Date</button>
      <button onClick={() => sortTable("views")}>Sort by Views</button>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr id={item.aticle} key={index}>
              <td>{item.date}</td>
              <td>{item.views}</td>
              <td>{item.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableSort;
