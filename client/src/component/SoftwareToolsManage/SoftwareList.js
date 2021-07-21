import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";

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
    axios.post('http://localhost:5000/api/Swtool?type=list', {
    })
    .then( response => {
      // console.log(response)
      try {
        this.setState({ 
          responseSwtoolList: response 
        },);
        this.setState({
          append_SwtoolList: this.SoftwareListAppend() 
        })
      } catch (error) {
        alert ('리액트 스테이트 변경 중 에러가 발생했습니다.');
      }
    })
    .catch ( error => { 
      alert('비동기 통신 중 에러가 발생했습니다')
      return false;
    })
  }

  SwToolListAppend = () => {
    let result = [];
    var SwToolList = this.state.responseSwtoolList;
    console.log(SwToolList)
    for(let i=0; i<SwToolList.json.length; i++) {
      var data = SwToolList.json[i];

      var date = date.reg_date;
      var year = date.substr(0,4);
      var month = date.substr(4,2);
      var day = date.substr(6,2);
      var reg_date = `${year}.${month}.${day}`;

      result.push(
        <tr className="hidden_type">
          <td>{data.swt_toolname}</td>
          <td>{data.swt_function}</td>
          <td>{reg_date}</td>
          <td>
            <Link to={'/AdminSoftwareView'+data.swt_code} className="bt_cl bt_c2 w50_b">수정</Link>
            <a href="#n" class="bt_c1 w50_b">삭제</a>
          </td>
        </tr>
      )
    }
    return result
  }

  render() {
    return (
      <section className="sub_wrap">
        <article className="s_cnt mp_pro_li cti mp_pro_li_admin">
          <div className="list_cont list_cont_admin">
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