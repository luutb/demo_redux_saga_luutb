import FirstComponent from '../component/firstComponent'
import { connect } from 'react-redux'
import { doChangeText,mouseLeave } from "../core/action/testAction"

function mapStateToProps(state, ownProps){
    return {
      test: state.testChangeReducer.value,
      x:state.testChangeReducer.x,
      y:state.testChangeReducer.y

    }
  }
  
  function mapDispatchToProps(dispatch, ownProps){
    return {
      changeText:()=>{
          dispatch(doChangeText())
      },
      onMouseLeaveRedux:()=>{
     
        dispatch(mouseLeave())
      }
      
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(FirstComponent)