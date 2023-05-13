// document.addEventListener('DOMContentLoaded', function () {


//     var button = document.getElementById('submit-button');
//     button.addEventListener('click', function () 
//     {
//         var sku = document.getElementById('SKU').value;
//         var name=document.getElementById('product name').value;
//         var Shop_Name=document.getElementById('Shop Name').value;
//         var Price1=document.getElementById('Purchase Price').value;
//         var Price2=document.getElementById('Selling Price').value;

//         var encode=document.getElementById('Encode').value;
    
//          const input= "ABCDEFGHIJ"
//         //   const input= encode
//          const inarr=[]
//          inarr.push(input[input.length-1])
//          for(let i=0;i<input.length-1;i++){
//          inarr.push(input[i])
//          }
//          let inputprice=[]
//        let pp ="₹68.35"
// let value=pp.match(/(\d+)/gm)
// for (let k = 0; k <= 1; k++) {
//     inputprice.push(value[k])
// }
//          price01=[]
//          inputprice=[]
//          for (let i=0;i<inputprice.length;i++){
//          const price=inputprice[0]
//          const rt=[]
//          for(let j=0;j<price.length;j++){
//          const mm=inarr[price[j]]
//           rt.push(mm)
//          }
//          let result = '';
//          for (let i = 0; i < rt.length; i++) {
//            result += String(rt[i]);
//          }
//          price01.push(result)
//         }
//      //OUT PUT
//             document.getElementById('product-name').innerHTML ="name"
//             JsBarcode("#barcode",sku)
//             document.getElementById('shop-Name').innerHTML = "shop name"
//             document.getElementById('Price').innerHTML = price01[0]+"/"+ price01[1]
//             window.print(name);
    
//     });

//     });

//     document.addEventListener('DOMContentLoaded', function () {
//     var button = document.getElementById('print output');
//     button.addEventListener('click', function () 
//     {
//         window.print()
//     })

// });


function printPage() {
    window.print();
  }
  
  // Add a button element to the page
  var printButton = document.createElement('button');
  printButton.innerHTML = 'Print';
  printButton.onclick = printPage;
  document.body.appendChild(printButton);
