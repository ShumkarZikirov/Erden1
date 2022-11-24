import {useNavigate} from 'react-router-dom'
import {doctors} from "../../../arrays/doctors";
import './us-doctors-main.scss'
import {detailsDoctor} from "../../../redux/actions/global-action";
import {globalReducer} from "../../../redux/reducer/global-reducer";
import {rootReducer} from "../../../redux/reducer/root-reducer";
import {useDispatch, useSelector} from "react-redux";
import DetailsDoctor from "../../details-doctor";
import {Link} from 'react-router-dom';

const UsDoctorsMain = () => {
    const navigate = useNavigate()
    const { detailsDoctor} = useSelector(state => state.globalReducer)
    const dispatch = useDispatch()
    const getDetail = (id) => {
        navigate(`/doctor/:${id}`)
        getDetail(id)
    }
  return(
      <div className={'doctors'}>
          <div className={'doctors-main'}>
              <div className={'doctors-main__title'}>
                  <h1>Наши врачи</h1>
                  <p>Нашим специалистам доступны все новейшие методики лечения, имплантации и протезирования зубов</p>
              </div>
              <div className={'doctors-main__doctors'}>
                  {
                      doctors.map((elem,index) =>{
                          return(
                               // <Link to="/doctor/:id">
                                   <div onClick={() => getDetail(elem.id)} className={'doctors-main__doctors-block'} key={index}>
                                       <img src={elem.img} alt=""/>
                                       <p>{elem.name}</p>
                                   </div>
                               // </Link>
                          )
                      })
                  }
              </div>
          </div>
      </div>
  )
}
export default UsDoctorsMain