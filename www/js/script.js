function donate(inputId){
    price = $(inputId).val();
    console.log(price);
    $('#dntLod').show();
    $.ajax({
        type: "POST",
        url: "https://alnajat.org.kw/donation/?najat_action=fastdonation",
        datatype: 'application/json',
        data: {
            "price":price,
            "regular_price":100000,
            "product_id":91893
        } ,
        success: function(data) {
            var Jsondata = JSON.parse(JSON.stringify(eval("(" + data + ")")));
            console.log(Jsondata); 
            console.log(Jsondata.url); 
            $('#dntLod').hide();
            $('#dntLodiframe').show();
            window.location = "#donate";
            $('#iframeDonate').attr("src", Jsondata.url);
            alert(Jsondata.url)
        }
    });
} 