import { incrementAction } from "../actions/IncrementActions";
import { connect } from 'react-redux';
import { withRouter } from "react-router";

const IncrementModule = ({incrementAction},props) => {
return (

    <div>
        {}
      Licznik: {console.log(props.increment)}
      <button onClick={()=>incrementAction()}>Inkrementuj</button>
    </div>
  );
}


const mapStateToProps = (state) => {
    console.log(state)
  return {
      
      increment: state.increment
  }
};

const mapDispatchToProps = {
  incrementAction
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(IncrementModule));