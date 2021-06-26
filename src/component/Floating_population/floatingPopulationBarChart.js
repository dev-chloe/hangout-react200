import axios from "axios";
import { Component } from "react";
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";
const parseString = require("xml2js").parseString;

class floatingPopulationBarChart extends Component {
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
    axios.get('http://openapi.seoul.go.kr:8088/554552564a6b736835366741736851/xml/IotVdata018/1/10/', {
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
      <>
        <BarChart 
          width={1000}
          height={300}
          data={ this.FloatPopulListAppend() }
          margin= {{
            top: 5, right: 50, left: 20, bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="ORGAN_NM" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="COLUMN6" fill="#8884d8" />
        </BarChart>
      </>
    )
  }
}

export default floatingPopulationBarChart;