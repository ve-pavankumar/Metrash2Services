function callPersonalResidencyConfigurationService(){

	var inputParams={serviceID:"personalResidenyRenewalConfiguration"};
	appmiddlewareinvokerasync(inputParams,personalResidencyConfigurationCallback);

}


function personalResidencyConfigurationCallback(status,output){

		if(null != status && status == 400)
	 	{
	 		kony.print ("personalResidencyConfigurationCallback output: " +output);
	 		kony.print ("OPSTATUS "+output["opstatus"]);
	 		if(null != output && null != output["opstatus"] && 0 == output["opstatus"])
		  	{
		  		kony.print("Delivery msg in output "+output.persRenDeliveryOptionMsg);
		  		storeResidencyConfigurationServiceData(output);
		  		callPersonalRenewalResidencyService();
		  		
		  		
		    }
		    
		    
		   
		}

}



function storeResidencyConfigurationServiceData(output){

	residencyPersonalRenewalConfigurationObject.allowPersRenDiscount=output.allowPersRenDiscount;
	residencyPersonalRenewalConfigurationObject.enablePersRenQPostDeliveryOption=output.enablePersRenQPostDeliveryOption;
	residencyPersonalRenewalConfigurationObject.enablePersRenRpDeliveryOption=output.enablePersRenRpDeliveryOption;
	residencyPersonalRenewalConfigurationObject.errorMessage=output.errorMessage;
	residencyPersonalRenewalConfigurationObject.persRen3YearDiscount=output.persRen3YearDiscount;
	residencyPersonalRenewalConfigurationObject.persRenDeliveryOptionMsg=output.persRenDeliveryOptionMsg;
	residencyPersonalRenewalConfigurationObject.persRenDiscountPercent=output.persRenDiscountPercent;
	residencyPersonalRenewalConfigurationObject.persRenQPostDeliveryOptionResultMsg=output.persRenQPostDeliveryOptionResultMsg;
	residencyPersonalRenewalConfigurationObject.persRenRpDeliveryOptionResultMsg=output.persRenRpDeliveryOptionResultMsg;
	residencyPersonalRenewalConfigurationObject.showPersRenDeliveryMethodSection=output.showPersRenDeliveryMethodSection;

}