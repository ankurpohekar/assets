$.validator.setDefaults({ ignore: ":hidden:not(select)" }) //for all select having class .chosen-select
if ($(".rate-field").length) {
  $(".rate-field").rules( "add", {
    min: 0,
    max: 1
  });
};
if ($(".margin-field").length) {
  $(".margin-field").rules( "add", {
    min: 0,
    max: 100
  });
};
if ($(".positive").length) {
  $(".positive").each(function(){
    $(this).rules( "add", {
      min: 0
    });
  });
};


$(".simple_form").validate()
