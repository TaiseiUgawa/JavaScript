function getMonthName(month){
    month -= 1;
    const months = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月',];
    if(months[month] != null){
        return months[month];
    } else {
        const err = new Error();
        err.message = '無効な値です';
        throw err;
    }
}

try {
    monthName = getMonthName(13);
} catch (e) {
    console.log(e);
} 