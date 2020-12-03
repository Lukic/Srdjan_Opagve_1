$(document).ready(function() {

    // Kort gennemgang
    $(".faq .faqHeader span").click(function(e){

        let span = $(this); 
        let faqItem = span.parent().parent();
        let faqContent = $(".faqContent p",faqItem);

        faqContent.toggleClass("show");

        if(faqContent.hasClass("show")){
            span.html("-");
        }else{
            span.html("+");
        }
   })

   // Simple løsning som benytter CSS
   $(".andenMulighed .faqItem").click(function(){
        $(this).toggleClass("show");
   });

});