// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import FusionCharts from 'fusioncharts';
// import Charts from 'fusioncharts/fusioncharts.charts';
// import ReactFC from 'react-fusioncharts';
// import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
// import Typography from '@material-ui/core/Typography';
// import { withRouter } from 'react-router-dom';

// ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);





// class Donut extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             show : null
//         }
//     }
//     showNext=()=>{
//        this.props.history.push('/information');
//     }
//     render() {
//         console.log("history.push",this.props.history)
//         var { keyData } = this.props;
//         console.log("keyData", keyData)
//         var sourceData = keyData && keyData.data ? keyData.data : '';
//         var chartConfigs = {
//             type: 'column2d',
//             width: 600,
//             height: 400,
//             dataFormat: 'json',
//             dataSource: sourceData,
//           };
        
//         return (
//                 <div>
//                     <ReactFC {...chartConfigs}/>
//                    {sourceData && <input type="button" value="See More" onClick={()=>this.setState({show: keyData.about})}/>}
//                     {this.state.show && JSON.stringify(this.state.show)}
//                     <input type="button" value="Next" onClick={this.showNext}/>
//                 </div>
//         )
//     }
// }


// export default withRouter(Donut);


//using hooks


import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);





const Donut=(props)=> {
   
   const [show,setShow] = useState(null)
    console.log("history.push",props.history)
            var { keyData } = props;
            console.log("keyData", keyData)
        var sourceData = keyData && keyData.data ? keyData.data : '';
    var chartConfigs = {
                    type: 'column2d',
                    width: 600,
                    height: 400,
                    dataFormat: 'json',
                    dataSource: sourceData,
                  };
      
function showNext(){
    props.history.push('/information')
}
        return (
                <div>
                    <ReactFC {...chartConfigs}/>
                    {sourceData && <input type="button" value="See More" onClick={()=>setShow(keyData.about)}/>}
                    {show && JSON.stringify(show)}
                    <input type="button" value="Next" onClick={showNext}/>

                </div>
        )
    }



export default withRouter(Donut);