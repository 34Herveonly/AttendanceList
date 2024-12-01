import { useState } from "react";

// Define the type for a single attendance record
interface AttendanceRecord {
  name: string;
  RegNum: string;
  department: string;
  Year: string;
  Date: string;
}

const Attendance = () => {
  // State for search input, dropdown, and date
  const [searchText, setSearchText] = useState<string>(""); // Search text
  const [selectedOption, setSelectedOption] = useState<string>(""); // Dropdown value
  const [searchDate, setSearchDate] = useState<string>(""); // Date filter

  // Sample data with type annotations
  const data: AttendanceRecord[] = [
    { name: "John Doe", RegNum: "222001122", department: "Computer Science", Year: "Year 1", Date: "2024-10-22" },
    { name: "Jane Smith", RegNum: "222001122", department: "Mathematics", Year: "Year 2", Date: "2024-11-22" },
    { name: "Mr ndi", RegNum: "222001234", department: "Computer Science", Year: "Year 3", Date: "2024-11-30" }
  ];

  // Filtered data based on search text, dropdown, and date
  const filteredData = data.filter((item) => {
    return (
      (!searchText || item.department.toLowerCase().includes(searchText.toLowerCase())) &&
      (!selectedOption || item.Year === selectedOption) &&
      (!searchDate || item.Date === searchDate)
    );
  });

  return (
    <>
      <div className="attendance-page">
        {/* Title */}
        <div className="title">
          <h1>ATTENDANCE LIST</h1>
        </div>

        {/* Search and Filter Section */}
        <div className="students-list">
          <input
            type="search"
            placeholder="Search by Department"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
            <option value="">Choose a Year</option>
            <option value="Year 1">Year 1</option>
            <option value="Year 2">Year 2</option>
            <option value="Year 3">Year 3</option>
            <option value="Year 4">Year 4</option>
            <option value="Year 5">Year 5</option>
          </select>
          <input
            type="date"
            value={searchDate}
            onChange={(e) => setSearchDate(e.target.value)}
            placeholder="Search by Date"
          />
          <button>Search</button>
        </div>

        {/* Attendance Table */}
        <div className="attendance-table">
          <table>
            <thead>
              <tr>
                <th>FullName</th>
                <th>Reg_Number</th>
                <th>Department</th>
                <th>Year Of Study</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((row, index) => (
                <tr key={index}>
                  <td>{row.name}</td>
                  <td>{row.RegNum}</td>
                  <td>{row.department}</td>
                  <td>{row.Year}</td>
                  <td>{row.Date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Attendance;
