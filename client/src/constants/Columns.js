const Columns = [
    {
        name: 'Address From',
        selector: row => row.addressFrom,
    },
    {
        name: 'Address To',
        selector: row => row.addressTo,
    },
    {
        name: 'Amount',
        selector: row => row.amount,
    },
    {
        name: 'Timestamp',
        selector: row => row.timestamp,
    },
   
];

export default Columns;
