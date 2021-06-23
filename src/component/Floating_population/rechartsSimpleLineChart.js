import { PureComponent } from "react";
import { CartesianGrid, LineChart, XAxis, YAxis, Tooltip, Legend, Line } from "recharts";

const data = [
  { 군구: '광진구', 유동인구수: 32760, 비유동인구수: 34000 },
  { 군구: '동대문구', 유동인구수: 33403, 비유동인구수: 64542 },
  { 군구: '마포구', 유동인구수: 56564, 비유동인구수: 23542 },
  { 군구: '구로구', 유동인구수: 33124, 비유동인구수: 98055 },
  { 군구: '관악구', 유동인구수: 30210, 비유동인구수: 45962 }
]

export default class rechartsSimpleLineChart extends PureComponent {
  static jsfiddleUrl = 'https://jspiddle.net/alidingling/xqjtetw0/';

  render () {
    return (
      <LineChart
        width = { 1000 }
        height = { 300 }
        data = { data }
        margin = { { top: 4, right: 30, left: 20, bottom: 5} }
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="군구" /><YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="유동인구수" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="비유동인구수" stroke="#82ca9d" />
      </LineChart>
    )
  }
}