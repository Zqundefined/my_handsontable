export const tableColumns1 = [
    { title: "Name", data: "productName", width: 120, },
    {
        title: "Japan", data: "JP_price", width: 110, type: "numeric", className: "htLeft", numericFormat: {
            pattern: '0,0.00 $',
            culture: 'ja-JP',
        },
    },
    {
        title: "Turkey", data: "TR_price", width: 110, type: "numeric", className: "htCenter", numericFormat: {
            pattern: '0,0.00 $',
            culture: 'tr-TR',
        },
    },
    {
        title: "China", data: "zh_price", width: 110, type: "numeric", className: "htRight", numericFormat: {
            pattern: '0,0.00 $',
            culture: 'zh-CN',
        },
    },
]

export const tableData1 = [
    {
        productName: 'Product A',
        JP_price: 1.32,
        TR_price: 100.56,
        zh_price: 10.56,
    },
    {
        productName: 'Product B',
        JP_price: 2.22,
        TR_price: 453.5,
        zh_price: 90.56,
    },
    {
        productName: 'Product C',
        JP_price: 3.1,
        TR_price: 678.199,
        zh_price: 120.56,
    },
]

export const tableData2 = [
    ['', 'Tesla', 'Nissan', 'Toyota', 'Honda', 'Mazda', 'Ford'],
    ['2017', 10, 11, 12, 13, 15, 16],
    ['2018', 10, 11, 12, 13, 15, 16],
    ['2019', 10, 11, 12, 13, 15, 16],
    ['2020', 10, 11, 12, 13, 15, 16],
    ['2021', 10, 11, 12, 13, 15, 16]
]