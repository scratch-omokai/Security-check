let s = 0;
let t = 0;
const check = document.getElementById("check")!;
const con = document.getElementById("con")!;

check.addEventListener("click", () => {
  if(s == 0){
    s = 1;
    const p = document.createElement("p");
    p.textContent = "これは本当にあなたのパスワードですか？";

    const yes = document.createElement("button");
    yes.id = "yes";
    yes.textContent = "はい";

    const no = document.createElement("button");
    no.id = "no";
    no.textContent = "いいえ";

    const di = document.createElement("div");
    di.id = "di";

    con.appendChild(p);
    con.appendChild(yes);
    con.appendChild(no);
    con.appendChild(di);

    
    const y = document.getElementById("yes")!;
    const n = document.getElementById("no")!;
    const di2 = document.getElementById("di")!;
    y.addEventListener("click",() => {
      if(t == 0){
        t = 1;
        const h3 = document.createElement("h3");
        h3.textContent = "あなたのパスワードセキュリティは脆弱です。";

        const p = document.createElement("p");
        p.textContent = "このような意味不明なサイトにパスワードを入力するとパスワードが漏洩する可能性があります。";
        const p2 = document.createElement("p");
        p2.textContent = "このサイトはそんなことしてないのでご安心ください。";

        di2.appendChild(h3);
        di2.appendChild(p);
        di2.appendChild(p2);
      }
    })

    n.addEventListener("click",() => {
      if(t == 0){
        t = 1;
        const h3 = document.createElement("h3");
        h3.textContent = "あなたのパスワードセキュリティは堅牢です。";

        const p = document.createElement("p");
        p.textContent = "もしこのような意味不明なサイトにパスワードを入力するとパスワードが漏洩する可能性があります。";
        const p2 = document.createElement("p");
        p2.textContent = "このサイトはそんなことしてないのでご安心ください。";

        di.appendChild(h3);
        di.appendChild(p);
        di.appendChild(p2);
      }
    })
  }
});