function fibonaci() {
    let n1 = 0, n2 = 1, sum;
    let count = document.getElementById("count").value;
    for (let i = 1; i <= count; i++) {
        sum = n1 + n2;
        n1 = n2;
        n2 = sum
        document.write(sum + "<br>")

    }
}

function giaiThua() {
    let number = parseInt(document.getElementById("number").value);
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i
    }
    document.write(result);
}

function bai3() {
    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= i; j++) {
            document.write("*");
        }
        document.write("<br>");
    }
    document.write("<br>" + "<br>");


    for (let i = 5; i >= 1; i--) {
        for (let j = 1; j <= i; j++) {
            document.write("*")
        }
        document.write("<br>");
    }
    document.write("<br>" + "<br>");



    let data = ""
    for (let i = 1; i <=5 ;i ++) {
        for (let j = 5 - i;j >= 1; j--){
          data += "&ensp;"
        }
        for (let j = 1; j <= i; j++) {
            data += "*"
        }
        data += "<br>"
    }
    document.write(data)

    document.write("<br>" + "<br>");


    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < i; j++)
            document.write("  ");
        for (let j = i; j < 5; j++)
            document.write("*");
        document.write("<br>");
    }

}

function hcn() {

    var n = 10;
    var m = 30;
    for (let i = 0; i < n ; i++) {
        for (let j = 0; j<m;j++){
            if (i == 0 || j == 0 || i == (n-1) || j == (m-1)){
                document.write(" * ");
            }else {
                document.write(" ")

            }
        } document.write("<br>")

    }
}

function tinhTien(){
    let money = +document.getElementById("money").value;
    let month = +document.getElementById("month").value;
    let rate = +document.getElementById("rate").value;
    let total = 0;

    for (let i = 1; i <=month ; i++) {
        money = money + money*rate/100
        total += money

    }
    document.write(total)

}

