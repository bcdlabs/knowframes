function menuu(){/*
	if(window.innerWidth < window.innerHeight){
	alert('mobile' + '\n' +window.innerWidth + '\n' + window.innerHeight +'\n'+ screen.availWidth + '\n' + screen.availHeight);
	}else{
	alert('window' + '\n' +window.innerWidth + '\n' + window.innerHeight+ '\n'+ screen.availWidth + '\n' + screen.availHeight);
	}*/
	var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
		//var element = document.getElementById('text');
		if (isMobile) {
  			//alert('You are using Mobile');
			document.getElementById('logo').style.float = 'none';
			//document.getElementById('logo').style.position = 'fixed';
			mobileMenu();
			//element.innerHTML = "You are using Mobile";
		} else {
			//element.innerHTML = "You are using Desktop";
			desktopMenu();
		}
		/**/
		var padd = Math.floor(document.getElementsByTagName('body')[0].offsetWidth / 302);
		//alert(document.getElementsByTagName('body')[0].offsetWidth+'\n'+padd);
		//alert(((document.getElementsByTagName('body')[0].offsetWidth - (302 * padd))/2));
		function desktopMenu(){
			var ull = document.getElementsByClassName('menuList')[0].getElementsByTagName('li');
			for(x=0;x<ull.length;x++){
				var innHtml = '';
				if(ull[x].innerHTML == 'contact'){
					innHtml = "<a href='#' onclick=contactClick() >"+ull[x].innerHTML+"</a>";
				}else{
					innHtml = "<a href='"+ull[x].innerHTML+".html' >"+ull[x].innerHTML+"</a>";
				}
				ull[x].innerHTML = innHtml;
				//alert(ull[x].innerHTML);
			}
		}//
		function mobileMenu(){
			document.getElementsByClassName('menuList')[0].style.display = 'none';
			document.getElementById('mobMenButton').style.display = 'block';
			//
			var ull = document.getElementsByClassName('mobMenuList')[0].getElementsByTagName('li');
			for(x=0;x<ull.length;x++){
				var innHtml = '';
				if(ull[x].innerHTML == 'contact'){
					innHtml = "<a href='#' onclick=mobileContactClick() >"+ull[x].innerHTML+"</a>";
				}else{
					innHtml = "<a href='"+ull[x].innerHTML+".html' >"+ull[x].innerHTML+"</a>";
				}
				ull[x].innerHTML = innHtml;
				//alert(ull[x].innerHTML);
			}
		}
		//
		//document.getElemntByClass('menuList').innerHTML = '<li>hahah</li>';
		//document.getElementsByClassName('mainContents')[0].style.display='none';
		var fashionArray = ['bridalone','bridaltwo','bridalthree','bridalfour','bridalsix','bridalfive_2','bridalseven','bridaleight','bridalnine','bridalten','bridaleleven','bridaltwelve','bridalthirteen','bridalfourteen','bridalfifteen','checksone','checkstwo','greenone','greentwo','railing','yellowone','yellowtwo'];
		var artArray = ['umbilical_2','bleedingrose','feather','geek','keydoll','meditate','roll','strings','waterpotone','waterpottwo'];
		var foodArray = ['00_2','01_2','02_2','03_2','04_2','05_2','06_2','07_2','08_2','09_2','10_2','11','12_2','13_2','14_2','15_2','16_2','17_2'];
		var portraitArray = ['blackone','blacktwo','bnwone','bnwtwo','jacuzzione','jacuzzitwo_2','park'];
		//
		//alert(fashionArray.length + artArray.length + foodArray.length + portraitArray.length);
		//
		var collumn = 0;
		var picTotal = fashionArray.length + artArray.length + foodArray.length + portraitArray.length ;
		for(i=0;collumn<picTotal;i++){
			loadImage();
		}
		function loadImage(){
			var lengthh = fashionArray.length+portraitArray.length+foodArray.length+artArray.length;
			var randomm = Math.floor(Math.random(picTotal) * lengthh);
			var categoryy ='';
			var thumbb = '';
			var indexx = 0;
			var orrient = '';
			if(randomm < fashionArray.length){
				categoryy = 'Fashion';
				indexx = randomm;
				thumbb = fashionArray[randomm];
				orrient = orientt(thumbb,fashionArray,indexx);
				//cleanArray(fashionArray,indexx);
			}else if(randomm < (fashionArray.length+portraitArray.length)){
				categoryy = 'Portrait';
				indexx = randomm - fashionArray.length;
				thumbb = portraitArray[indexx];
				orrient = orientt(thumbb,portraitArray,indexx);
				//cleanArray(portraitArray,indexx);
			}
			else if(randomm < (fashionArray.length+portraitArray.length+foodArray.length)){
				categoryy = 'Food';
				indexx = randomm - (fashionArray.length+portraitArray.length);
				thumbb = foodArray[indexx];
				orrient = orientt(thumbb,foodArray,indexx);
				//cleanArray(foodArray,indexx);
			}else{
				categoryy = 'Art';
				indexx = randomm - (fashionArray.length+portraitArray.length+foodArray.length);
				thumbb = artArray[indexx];
				orrient = orientt(thumbb,artArray,indexx);
				//cleanArray(artArray,indexx);
			}
			//
			var innHtml='';
			if(orrient == 'landscapeee'){
				innHtml += '';
			}else{
				/*innHtml += '<span class="'+orrient+'" column="'+ ((collumn-1)%4) +'" row="'+ Math.floor((collumn-1)/4) +'"><img src="images/'+categoryy+'/thumbs/_'+thumbb+'.jpg"/></span>';*/
				innHtml += '<div class="'+orrient+'"><img onclick=imgCliq("'+categoryy+'","'+thumbb+'")  src="images/'+categoryy+'/thumbs/_'+thumbb+'.jpg"/></div>';
				//alert('landscapee');
			}
			//alert(innHtml);
			document.getElementsByClassName('mainContents')[0].innerHTML += innHtml; 
			//picTotal--;
		}
		function cleanArray(m,n){
			 m[n] = m[m.length-1];
			 m.pop();
			 //alert(collumn);
		}
		function orientt(m,n,o){
			if(m[m.length-1] == '2' && m[m.length-2]=='_'){
					if(collumn % padd != (padd-1)){
						picTotal--;
						collumn+=2;
						cleanArray(n,o);
						return('landscapee');
					}else{
						return('landscapeee');
					}
			}else{
				picTotal--;
				collumn++;
				cleanArray(n,o);
				return('portraitt');
			}
		}/*
		alert(document.getElementsByTagName('body')[0].offsetWidth+'\n'+padd);
		alert(((document.getElementsByTagName('body')[0].offsetWidth - (302 * padd))/2));
		*/
		document.getElementsByClassName('mainContents')[0].style.padding = '0 '+(((document.getElementsByTagName('body')[0].offsetWidth - (302 * padd))/2) -.5)+'px';
		document.getElementsByClassName('mainContents')[0].innerHTML += '<div style="clear:both"></div>';
		//alert(document.getElementsByClassName('mainContents')[0].getElementsByTagName('span').length);
		//alert(document.getElementsByTagName('body')[0].offsetHeight);
	}
	function contactClick(){
		//alert(document.getElementById('modalObj').style.display);
		var modall = document.getElementById('modalObj');
		//var inHtml = document.getElementsByClassName('contactt')[0].innerHTML;
		modall.getElementsByTagName('div')[0].innerHTML += document.getElementsByClassName('contactt')[0].innerHTML;
		modall.getElementsByTagName('div')[0].style.padding = '50px';
		modall.getElementsByTagName('div')[0].style.top = '180px';
		modall.getElementsByTagName('div')[0].style.background = 'rgba(255,255,255,1);';
		modall.style.display = 'block';
		modall.style.height = screen.availHeight+'px';
	}
	function closeClick(){
		//document.getElementById('modalObj').style.display = 'none';
		document.getElementById('modalObj').getElementsByTagName('div')[0].innerHTML = '';
		//document.getElementById('modalObj').getElementsByTagName('div')[0].style.top = '0';
		document.getElementById('modalObj').getElementsByTagName('div')[0].style.background = 'rgba(255,255,255,0)';
		document.getElementById('modalObj').style.display = 'none';
	};
	function imgCliq(m,n){
		//alert(m+'\n'+n);
		//alert(document.getElementsByTagName('html')[0].scrollTop);
		var modall = document.getElementById('modalObj');
		//var inHtml = document.getElementsByClassName('contactt')[0].innerHTML;
		modall.getElementsByTagName('div')[0].innerHTML += '<img src="images/'+m+'/'+n+m+'.jpg" style="max-height:'+( window.innerHeight - 10)+'px; max-width:'+( window.innerWidth - 30)+'px"/>';
		modall.getElementsByTagName('div')[0].style.padding = '5px';
		modall.getElementsByTagName('div')[0].style.top = '10px;';
		modall.getElementsByTagName('div')[0].style.background = 'rgba(255,255,255,.5);';
		//modall.getElementsByTagName('div')[0].style.maxHeight = ( screen.availHeight - 60)+'px';
		modall.style.display = 'block';
		//modall.style.height = screen.availHeight+'px';
		modall.style.height = window.innerHeight+'px';
	}
	//alert(document.getElementsByClassName('mainContents')[0].offsetWidth);
	function mobileContactClick(){
		//var modall = '';
		var modall = document.getElementsByClassName('mobMenuOverlay')[0];
		modall.innerHTML += document.getElementsByClassName('contactt')[0].innerHTML;
		//alert(modall.innerHTML);
	}
	function mobileMenuFunction(){
		document.getElementsByClassName('mobMenuOverlay')[0].style.display = 'block';
		//alert('mobile Menu');
	}
	function mobileMenuCloseFunction(){
		document.getElementsByClassName('mobMenuOverlay')[0].style.display = 'none';
		//alert('mobile Menu');
	}