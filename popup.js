// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

$(function() {

    $('#form').w2form({ 
        name   : 'form',
        header : 'PayPal Geb&uuml;hrenrechner',
        fields : [
            { name: 'idBase', type: 'text', required: false },
            { name: 'idFee',  type: 'text', required: false },
            { name: 'idTotal',   type: 'text'},
            { name: 'idBaser', type: 'text', required: false },
            { name: 'idFeer',  type: 'text', required: false },
            { name: 'idTotalr',   type: 'text'}
        ]
    });

  window.addEventListener('click',function(e){
    if(e.target.href!==undefined){
      chrome.tabs.create({url:e.target.href})
    }
  })

  function updatePrice() {
    var val = $("#idBase").val().replace(/,/, ".");
    var price = parseFloat(val);
    var fee = (price * 0.019) + 0.35;
    var total = (price - fee);
    var total = total.toFixed(2);
    var fee = fee.toFixed(2);
    $("#idFee").val(fee);
    $("#idTotal").val(total);
  }

  function reverseCalc() {
    var val = $("#idBaser").val().replace(/,/, ".");
    var price = parseFloat(val);
    var fee = ((price + 0.35) / 0.9810) - price
    var total = price + fee;
    var total = total.toFixed(2);
    var fee = fee.toFixed(2);
    $("#idFeer").val(fee);
    $("#idTotalr").val(total);
  }

  $(document).on("change, keyup", "#idBaser", reverseCalc);
  $(document).on("change, keyup", "#idBase", updatePrice);

});
