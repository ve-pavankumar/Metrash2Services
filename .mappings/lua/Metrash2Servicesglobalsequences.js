//GlobalSequences File

function frmResidencyPayment_btnPersResPaymentSubmit_onClick_seq0(eventobject){

capturePaymentDetails.call(this);
frmPersonalResidencyResult.show();
	 var payment_inputparam = {};
 payment_inputparam["serviceID"] = "payment";
 
 
payment_inputparam["httpheaders"] = {};

payment_inputparam["httpconfigs"] = {};

 



 payment = appmiddlewareinvokerasync (payment_inputparam, frmResidencyPayment_btnPersResPaymentSubmit_onClick_seq1);
 
};

