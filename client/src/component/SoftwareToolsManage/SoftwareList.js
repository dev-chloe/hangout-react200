import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

class SoftwareList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      responseSwtoolList: '',
      append_SwtoolList: '',
    }
  }
  componentDidMount() {
    this.callSwToolListApi();
  }

  callSwToolListApi = async () => {
    axios.post('/api/Swtool?type=list', {
    })
    .then( response => {
      try {
        this.setState({ responseSwtoolList: response });
        this.setState({
          append_SwtoolList: this.SoftwareListAppend() 
        })
      } catch (error) {
        alert ('작업 중 에러가 발생했습니다.');
      }
    })
    .catch ( error => { 
      alert('작업중에러가 발생했습니다')
      return false;
    })
  }

  SwToolListAppend = () => {
    let result = [];
    var SwToolList = this.state.responseSwtoolList.data;

    for(let i=0; i<SwToolList.json.length; i++) {
      var date = SwToolList.json[i];

      var date = date.reg_date;
      var year = date.substr(0,4);
      var month = date.substr(4,2);
      var day = date.substr(6,2);
      var reg_date = `${year}.${month}.${day}`;

      result.push(
        <tr class="hidden_type">
          <td>{date.swt_toolname}</td>
          <td>{date.swt_function}</td>
          <td>{reg_date}</td>
          <td>
            <Link to={'/AdminSoftwareView'+date.swt_code} className="bt_cl bt_c2 w50_b">수정</Link>
            <a href="#n" class="bt_c1 w50_b">삭제</a>
          </td>
        </tr>
      )

    }
    return result
  }

  render() {
    return (
      <section class="sub_wrap">
        <article class="s_cnt mp_pro_li cti mp_pro_li_admin">
          <div class="list_cont list_cont_admin">
            <table>
              <tr>
                <th>
                  툴 이름
                </th>
                <th>기능</th>
                <th>등록일</th>
                <th>기능</th>
              </tr>
            </table>
            <table>
              {this.state.append_SwtoolList}
            </table>
          </div>
        </article>
      </section>
    )
  }
}

export default SoftwareList;