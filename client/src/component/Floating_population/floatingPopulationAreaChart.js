import axios from "axios";
import React,{ Component } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
const parseString = require("xml2js").parseString;

class floatingPopulationAreaChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      responseFPList: '',
      append_FPList: '',
    }
  }

  componentDidMount() {
    this.callFloatPopulListApi()
  }

  callFloatPopulListApi = async () => {
    axios.get('http://openapi.seoul.go.kr:8088/554552564a6b736835366741736851/xml/IotVdata018/1/5/', {
      "Content-Type" : "application/json; charset=utf-8"
    })
    .then(response => {
      const xmlStr = response.data
      let floatingData = {}
      parseString( xmlStr, (error, result) => {
        floatingData = result.IotVdata018.row
      })
      console.log(floatingData)
      try {
        this.setState({responseFPList: floatingData });

        this.setState({
          append_FPList: this.FloatPopulListAppend()
        })
      } catch (error) {
        alert(error)
      }
    })
    .catch( error => {alert(error);return false;});
  }

  FloatPopulListAppend = () => {
    var FPList = this.state.responseFPList
    return FPList
  }
  render () {
    return (
      <AreaChart
          width={500}
          height={400}
          data={this.FloatPopulListAppend()}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="ORGAN_NM" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="COLUMN6" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
    )
  }
}

export default floatingPopulationAreaChart;