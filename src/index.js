import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './style.css';

class AnalyticsTable extends Component {
    constructor(props) {
        super(props);
    }
    
    render (){
        const { 
            recentCustomers,
            recentInvoices,
            recentRequests,
            linkColor,
            titleColor,
            tabOneTitle,
            tabTwoTitle,
            tabThreeTitle,
            tabOneLink,
            tabTwoLink,
            tabThreeLink,
            tableClass
        } = this.props;
        return (
            <div className={`summary-table shadow-box ${tableClass}`}>
                <Tabs>
                    <TabList>
                        <Tab><h5><span className="table-title" style={{color: titleColor}}>{tabOneTitle}</span></h5></Tab>
                        <Tab><h5><span className="table-title" style={{color: titleColor}}>{tabTwoTitle}</span></h5></Tab>
                        <Tab><h5><span className="table-title" style={{color: titleColor}}>{tabThreeTitle}</span></h5></Tab>
                        <Link to="/orders" className="see-all" style={{color: linkColor}}>See all Requests >></Link>
                    </TabList>
                
                    <TabPanel>
                        {recentRequests}
                        <div className="table-bottom"><Link to="/orders" style={{color: titleColor}}>{tabOneLink}</Link></div>
                    </TabPanel>
                    <TabPanel>
                        {recentInvoices}
                        <div className="table-bottom"><Link to="/invoices" style={{color: titleColor}}>{tabTwoLink}</Link></div>
                    </TabPanel>
                    <TabPanel>
                        {recentCustomers}
                        <div className="table-bottom"><Link to="/customers" style={{color: titleColor}}>{tabThreeLink}</Link></div>
                    </TabPanel>
                </Tabs>
            </div>
        );
    }
};

export default AnalyticsTable;


