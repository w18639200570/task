app.filter('finance', function () {
    //融资规模过滤
    return function (financeNum) {
        var financeText = '';
        switch (financeNum) {
            case 0:
                financeText = '无需融资';
                return financeText;
                break;
            case 1:
                financeText = '天使轮';
                return financeText;
                break;
            case 2:
                financeText = 'A轮';
                return financeText;
                break;
            case 3:
                financeText = 'B轮';
                return financeText;
                break;
            case 4:
                financeText = 'C轮';
                return financeText;
                break;
            case 5:
                financeText = 'D轮及以上';
                return financeText;
                break;
            case 6:
                financeText = '上市公司';
                return financeText;
                break;
        }
    }
});
/**
 * Created by Shinelon on 2017/5/13.
 */
