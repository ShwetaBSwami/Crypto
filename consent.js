import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import i18next from '../../../../common/i18next';

import Search from './../../../PatientBrowser/search';
import BasicGrid from '../../../../components/BasicGrid';
import CustomPagination from '../../../../components/Pagination/CustomPagination';
import getConfigVariables from '../../../../helper/constants';
import { getColumnsPerRegistryForConsent } from '../../../../utils/commonMethods';

const config = {
    minColumns: i18next.t('patientBrowser.minColumns'),
    parentTableClass: ['basic-grid patient-grid'],
    dataErrorMessage: i18next.t('patientBrowser.dataErrorMessage'),
    schemaErrorMessge: i18next.t('patientBrowser.schemaErrorMessge')
};
 class Consent extends Component {
    constructor(props) {
        super(props);
     this.state = {
         searchValue:null,
         totalRecords:null,
         pageIndex:1,
         rowsPerPage: null
     }
     this.assignProListColumnObj = this.prepapreAssignProListMetadataObj();
    }
 

    prepapreAssignProListMetadataObj = () => {
        // const { commonDataReducerData } = this.props;
        // const {REGISTRY_UNIT_NAME} = getConfigVariables();
        let columnDef = null;
        const columnNameAndMRNObj = this.prepareNameMrnColumn();
        // if (commonDataReducerData && commonDataReducerData.props && commonDataReducerData.props.Unit) {
        //     columnDef = getColumnsPerRegistryForConsent(commonDataReducerData.props.Unit);
        // }
        // columnDef = getColumnsPerRegistryForConsent(REGISTRY_UNIT_NAME);
        return [].concat(...columnNameAndMRNObj, ...columnDef);
    };
    
    prepareNameMrnColumn = () => {
        const nameColumn = [];
        nameColumn.push(this.prepareNameMrnColumnField());

        return nameColumn;
    };
    prepareNameMrnColumnField = () => ({
        Name: {
            type: 'string',
            header: 'PATIENT NAME',
            cssClasses: ['measure-performance'],
            style: {},
            component: {
                name: 'action',
                component: this.getPatientNameAndMrnActionColumn
            }
        }
    });
    onPageChangeHandler = () =>{

    }

    render() {
        const {
          
            totalRecords,
            pageIndex,
            rowsPerPage
           
        } = this.state;
        let assignProListData = [];
        return (
            <div>
               <Search
               
               {...this.props}
             
               {...this.state}
               onSearchClickHandler={this.onSearchClickHandler}
               /> 
                                 <Grid item xs={12} className='assgin-pro-list__wrapper'>
                                <Grid container className='assgin-pro-list'>
                                    <Grid item className='pro-visit-list-grid'>
                                        <BasicGrid
                                            columnDefs={this.assignProListColumnObj}
                                            config={config}
                                            totalRecords={totalRecords}
                                           // data={assignProListData}
                                        />
                                    </Grid>
                                    <Grid item xs className='custom-pagination-grid'>
                                        <CustomPagination
                                            PAGEINDEX={pageIndex}
                                            PAGESIZE={rowsPerPage}
                                            TOTALRECORD={totalRecords}
                                            PAGERCOUNT={5}
                                            goEnabled={false}
                                            onClick={this.onPageChangeHandler}
                                            rowPerPageSelecter={false}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
            </div>
        )
    }
}
export default Consent;