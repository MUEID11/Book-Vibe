import { useEffect, useState } from "react";
import { getBooks } from "../../Utils/localStorage";
import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, XAxis, YAxis } from "recharts";
import PropTypes from 'prop-types';
const PagesToRead = () => {
  const [books, setBooks] = useState([]);
  useEffect(()=>{
    const readBook = getBooks();
    const mapData = readBook?.map(value => ({
      name: value?.book_name,
      uv: value?.total_pages,
      pv: value?.rating,
      amt: value?.year_of_publishing
    }))
    setBooks(mapData);
  },[])
  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};
  return (
    <div className="h-[calc(100vh-70px)] flex justify-center items-center">
      {books? <ResponsiveContainer width={1000} height="100%">
      <BarChart
      width={1000}
      height='100%'
      data={books}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {books.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
      </ResponsiveContainer> : "NO DATA FOUND"}
    </div>
        
  );
};
PagesToRead.propTypes = {
  fill: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
}
export default PagesToRead;
