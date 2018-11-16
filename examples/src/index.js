import React from 'react';
import { render} from 'react-dom';
import AnalyticsTable from '../../src';

function getValues(values) {
    console.log(values);
}

const App = () => (
    <AnalyticsTable
    />
);
render(<App />, document.getElementById("root"));