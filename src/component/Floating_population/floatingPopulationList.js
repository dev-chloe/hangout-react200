import { Component } from "react";

class floatingPopulationList extends Component {
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