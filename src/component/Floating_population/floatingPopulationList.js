import axios from "axios";
import { Component } from "react";
import { CartesianGrid, LineChart, XAxis, YAxis, Tooltip, Legend, Line } from "recharts";
const parseString = require("xml2js").parseString;

class floatingPopulationList extends Component {
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
    // .then(response => console.log(response.data))
    .then(response => {
      const xmlStr = response.data
      let floatingData = {}
      parseString( xmlStr, (error, result) => {
        // console.log(result); 
        // console.log(result.IotVdata018.row);
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
    // let result = []
    var FPList = this.state.responseFPList
    // var jsonString = JSON.stringify(FPList)
    // jsonString = jsonString.replace(/\(1시간 단위\)/g, '')
    // jsonString = jsonString.replace(/\(10세 단위\)/g, '')
    // var json = JSON.parse(jsonString)

    // for (let i = 0; i < FPList.length; i++) {
    //   var data = FPList[i]
    //   var idx = i + 1
    //   result.push (
    //     <tr className="hidden_type">
    //       <td>{idx}</td>
    //       <td>{data.REGIST_DT}</td>
    //       <td>{data.ORGAN_NM}</td>
    //       <td>{data.COLUMN1}</td>
    //       <td>{data.COLUMN6}</td>
    //     </tr>
    //   )
    // }
    return FPList
  }

  render () {
    return (
      <>
        <LineChart
          width = { 1000 }
          height = { 300 }
          data = { this.FloatPopulListAppend() }
          margin = { { top: 4, right: 30, left: 20, bottom: 5} }
        >
          <CartesianGrid strokeDasharray="3 10" />
          <XAxis dataKey="ORGAN_NM" /><YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="COLUMN6" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
        {/* <table className="table_ty1 tlist">
          <thead>
            <tr>
              <th>No</th>
              <th>일자</th>
              <th>지역</th>
              <th>시리얼</th>
              <th>방문자수</th>
            </tr>
          </thead>
          <tbody>
            {this.state.append_FPList}
          </tbody>
        </table> */}
      </>
    )
  }
}

export default floatingPopulationList;

/* 
  sk 텔레콤 빅 데이터 허브 사이트가 사라진 관계로
  서울 열린 데이터 광장(http://data.seoul.go.kr/dataList/datasetList.do)에서
  서울시 유동인구 측정 정보 api를 이용했다.
  xml을 xml2js을 이용하여 json으로 변경하여 사용하였다.
 */