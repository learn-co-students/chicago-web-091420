import React from 'react';
import DeleteablePainting from './DeleteablePainting';
import Painting from './Painting';
import { connect } from 'react-redux'
import { fetchPaintingsSuccess, fetchPaintingsThunk }  from '../actions/index'


// recognize a new event (like fetch rewq, or delete btn etc.)
// wire the component so that it is connected to write capabilities
// define the action creator for the new event and pass it into mapDispatchToProps
// wire the component so that it is calling the new dispatch at the right place
// once the action is dispatching successfully:
//   update the reducer so that it acknowledges the new action


class PaintingList extends React.Component {
  componentDidMount(){
    this.props.fetchPaintingsThunk()
  }

  renderPaintings = () => {
    return this.props.paintings.map(p => (
      <DeleteablePainting
        key={p.id}
        painting={p}
        handleVote={this.handleVote}
      />
    ));
  }

  render() {
    return (
        <div>
            <div>
                <h1>All Paintings</h1>
                {
                  this.props.loading ?
                  <h4>Loading...</h4>
                  : 
                  <div className="ui items">{this.renderPaintings()}</div>
                }
            </div>
        </div>
    );
  }
}

// mapStateToProps
// 1) gets store state as an argument
// 2) returns an object:
//      each key/val of the obj will become props of the component that youre connecting


const mapStateToProps= (state) => {
  return {
    paintings: state.paintings,
    loading: state.loading
  }
}









const mapDispatchToProps = {
  fetchPaintingsSuccess,
  fetchPaintingsThunk
}




export default connect(mapStateToProps, mapDispatchToProps)(PaintingList)




















