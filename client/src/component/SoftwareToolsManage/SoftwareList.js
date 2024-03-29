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
        this.setState({ responseSwtoolList: response });
        this.setState({ append_SwtoolList: this.SwToolListAppend() });
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
    // let result = []
    var SwToolList = this.state.responseSwtoolList.data;
    // console.log(SwToolList)
    
    // for(let i=0; i<SwToolList.json.length; i++){
    //     var data = SwToolList.json[i]

    //     var date = data.reg_date
    //     var year = date.substr(0,4)
    //     var month = date.substr(4,2)
    //     var day = date.substr(6,2)
    //     var reg_date = year +'.'+month+'.'+day

    //     result.push(
    //         <tr className="hidden_type">
    //             <td>{data.swt_toolname}</td>
    //             <td>{data.swt_function}</td>
    //             <td>{reg_date}</td>
    //             <td>
    //                 <Link to={'/AdminSoftwareView/'+data.swt_code} 
    //                 className="bt_c1 bt_c2 w50_b">수정</Link>
    //                 <a href="#n" className="bt_c1 w50_b" >삭제</a>
    //             </td>
    //         </tr>
    //     )
    // }
    return SwToolList
  }

  render () {
    return (
      <section className="sub_wrap" >
        <article className="s_cnt mp_pro_li ct1 mp_pro_li_admin">
          <div className="li_top">
              <h2 className="s_tit1">Software Tools 목록</h2>
              <div className="li_top_sch af">
              <Link to={'/AdminSoftwareView/register'} className="sch_bt2 wi_au">Tool 등록</Link>
              </div>
          </div>

          <div className="list_cont list_cont_admin">
            <table className="table_ty1 ad_tlist">
              <tr>
                <th>툴 이름</th>
                <th>기능</th>
                <th>등록일</th>
                <th>기능</th>
              </tr>
            </table>	
            <table className="table_ty2 ad_tlist">
              <tr>
                <td>{this.state.append_SwtoolList.swt_toolname}</td>
              </tr>
            </table>
          </div>
        </article>
      </section>
    );
  }
}

export default SoftwareList;