import axios from "axios";
import { Component } from "react";
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
    axios.get('http://openapi.seoul.go.kr:8088/554552564a6b736835366741736851/xml/IotVdata018/1/5/', {
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
      } catch (error) {
        alert(error)
      }
    })
    .catch( error => {alert(error);return false;});
  }

  render () {
    return (
      <>
        <table className="table_ty1 tlist">
          <thead>
            <tr>
              <th>No</th>
              <th>일자</th>
              <th>시간</th>
              <th>연령대</th>
              <th>성별</th>
              <th>시</th>
              <th>군구</th>
              <th>유동 인구 수</th>
            </tr>
          </thead>
        </table>
        <table className="table_ty2 tlist">
          <tbody>
            <tr className="hidden_type">
              <td>1</td>
              <td>20210620</td>
              <td>00</td>
              <td>40</td>
              <td>여성</td>
              <td>서울</td>
              <td>영등포구</td>
              <td>23670</td>
            </tr>
            <tr className="hidden_type">
              <td>2</td>
              <td>20210620</td>
              <td>00</td>
              <td>30</td>
              <td>남성</td>
              <td>서울</td>
              <td>관악구</td>
              <td>27888</td>
            </tr>
          </tbody>
        </table>
      </>
    )
  }
}

export default floatingPopulationList;