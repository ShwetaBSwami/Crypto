import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import { DataReducer } from './redux';
import { connect } from 'react-redux'; //connect will ultimately return a new component which has the dispatch method as a prop
import { DataActions } from './redux';
import './Crypto.css';
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography, Button, Grid } from "@material-ui/core"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';
import Suggestions from './Suggestions';
import { withRouter } from 'react-router-dom';

import Donut from './Donut';
class Crypto extends Component {
  state = {
    flag: false,
    moreInfo: false,
    showInfo: false,
    dataInfo: '',
    data2: [{}],
    showText: '',
    query:'',
    results:[],
   
  }
  fetchData = () => {

    const { fetchApiAction: fetchApi } = this.props;
    fetchApi();
    this.setState({ flag: true/* , data2: this.props.fetchApiReducer */ })


  }
  fetchingData = ()=>{
    this.setState({results:this.state.data2.data})
  }
  //     shouldComponentUpdate(nextProps, nextState){
  //       debugger;
  //       console.log("check in update",nextProps)
  //       console.log("this.props in update",this.props)
  //       if(nextProps !== this.props){
  //         return false
  //       }

  // }
  static getDerivedStateFromProps(nextProps,prevState){
    console.log("nextprops",nextProps.history.push)
    return{
       data2:nextProps.fetchApiReducer
    }
    }

  displayData = (data) => {

    // console.log("displaydata", data)
    this.setState({ showInfo: true, dataInfo: data })
  }
  deleteData = (item) => {

    // console.log("item in deletedata",item)
    var array = this.state.data2.data; // make a separate copy of the array
    var index = array.indexOf(item)
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({ data2: array });
    }
  }
  moreInfo = (data) => {
    console.log("data in moreinfo",data)
    
    this.setState({ showText: data })
   
  }
  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.fetchingData()
        }
      } else if (!this.state.query) {
      }
    })
  }
  render() {
    console.log("this.state.data2",this.state.query)
    const chartConfig = {

      dataSource: this.state.dataInfo
    }
    //  console.log("fetchapireducer",this.props.fetchApiReducer.data.map((data)=>data))
    // console.log("fetchapireducer", this.props.fetchApiReducer)
    // console.log("this.state.dataInfo", this.state.dataInfo)
    return (
      <Fragment>


  {/* <input type="text" className="form-control form-control-lg" placeholder="Search" onChange={this.filterList}/> */}
         
  <input
         placeholder="Search for..."
         ref={input => this.search = input}
         onChange={this.handleInputChange}
       />
       <p>{this.state.query}</p>
       <Suggestions results={this.state.results}/> 
          {

            (this.state.flag == true) ? this.state.data2.data === undefined ? '' : this.state.data2.data.map((data, index) =>  
            
            <ExpansionPanel data={data} className="expansion-panel" key={index}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              onClick={() => this.displayData(data)}

            >
                          <Typography className="heading" key={index}>{data.name}</Typography>
                          <DeleteIcon onClick={() => this.deleteData(data)} />

            
            </ExpansionPanelSummary>
            <ExpansionPanelDetails >
              <Donut key={index} keyData={data} />

            </ExpansionPanelDetails>
            </ExpansionPanel>
            ):''
            
          }


          <Button onClick={this.fetchData} className="fetch-button">Fetch Data</Button>

      </Fragment>
    );
  }
}


const mapStateToProps = ({ DataReducer }) => {
  return {
    fetchApiReducer: DataReducer.fetchApiReducer,

  };
};

const mapDispatchToProps = {

  fetchApiAction: DataActions.fetchApiAction,


};
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Crypto));



