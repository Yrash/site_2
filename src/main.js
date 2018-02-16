function one(reg, text, input){
	var str = input.value.replace(reg,"")+ text,
	copy = input.value =str;
	input.select(); 
	document.execCommand('copy');
}


var reg_sahe = /.exsale.pro/g ,
	reg_url = /.discountsalepro.com/g,
	reg_ftp = /.proml.net/g,

	text_sahe= ".exsale.pro",
	text_url= ".discountsalepro.com",
	text_ftp= ".proml.net";

button1.addEventListener("click",function(event){

	if(hash.value.search(reg_ftp) !== -1){
		one(reg_ftp,text_sahe,hash);
	}else if(hash.value.search(reg_url) !== -1) {
		one(reg_url,text_sahe,hash);
	}
	
})


function ftpClick(){

	if(ftp.value.search(reg_sahe) !== -1){
		one(reg_sahe, text_ftp, ftp);
	}else if(ftp.value.search(reg_url) !== -1) {
		one(reg_url, text_ftp, ftp);		
	}
	
	
	
}


function urlClick(){

if(url.value.search(reg_sahe) !== -1){
		one(reg_sahe, text_url, url);
	}else if(url.value.search(reg_ftp) !== -1) {
		one(reg_ftp, text_url, url);		
	}
	
}


