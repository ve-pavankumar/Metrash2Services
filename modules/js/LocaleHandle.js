function changeLocaleToEnglish()
{	
	
		kony.i18n.setCurrentLocaleAsync("en_QA", onsuccessLocaleChangeToEnglishCallback, onfailiureLocaleChangeCallback, "")
}



function onsuccessLocaleChangeToEnglishCallback()
{
	locale="en_QA";
	frmActivation.show();
}


function changeLocaleToArabic()
{	
	
		kony.i18n.setCurrentLocaleAsync("ar_QA", onsuccessLocaleChangeToArabicCallback, onfailiureLocaleChangeCallback, "")
}



function onsuccessLocaleChangeToArabicCallback()
{
	locale="ar_QA";
	frmActivation.show();
}


function onfailiureLocaleChangeCallback()
{
	kony.print("locale chage fail");
}