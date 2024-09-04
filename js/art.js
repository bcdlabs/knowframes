function menuu(){
		var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
		if (isMobile) {
			document.getElementById('logo').style.float = 'none';
			mobileMenu();
		} else {
			desktopMenu();
		}
		/**/
		var padd = Math.floor(document.getElementsByTagName('body')[0].offsetWidth / 302);
		//
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
			}
		}
		var artArray = ['bleedingrose','feather','geek','meditate','roll','keydoll','strings','waterpotone','waterpottwo'];
		var collumn = 0;
		var picTotal = artArray.length;
		while(artArray.length != 0){
			loadImage();
		}
		function loadImage(){
			var lengthh = artArray.length;
			//var randomm = Math.floor(Math.random(picTotal) * lengthh);
			var categoryy ='Art';
			var thumbb = artArray[0];
			var indexx = 0;
			var orrient = orientt(thumbb,artArray,indexx);;
			var innHtml='';
			if(orrient == 'landscapeee'){
				innHtml += '';
			}else{
				innHtml += '<div class="'+orrient+'"><img onclick=imgCliq("'+categoryy+'","'+thumbb+'") src="images/'+categoryy+'/thumbs/_'+thumbb+'.jpg"/></div>';
				//alert('landscapee');
			}
			//alert(innHtml);
			document.getElementsByClassName('mainContents')[0].innerHTML += innHtml; 
			//picTotal--;
		}
		function orientt(m,n,o){
			if(m[m.length-1] == '2' && m[m.length-2]=='_'){
					if(collumn % padd != (padd-1)){
						picTotal--;
						collumn+=2;
						n.splice(0,1);
						return('landscapee');
					}else{
						return('landscapeee');
					}
			}else{
				picTotal--;
				collumn++;
				n.splice(0,1);
				return('portraitt');
			}
		}
		document.getElementsByClassName('mainContents')[0].style.padding = '0 '+(((document.getElementsByTagName('body')[0].offsetWidth - (302 * padd))/2) -.5)+'px';
		document.getElementsByClassName('mainContents')[0].innerHTML += '<div style="clear:both"></div>';
		//alert(document.getElementsByClassName('mainContents')[0].getElementsByTagName('span').length);
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
		document.getElementById('modalObj').style.display = 'none';
		document.getElementById('modalObj').getElementsByTagName('div')[0].innerHTML = '';
		document.getElementById('modalObj').getElementsByTagName('div')[0].style.top = '0';
		document.getElementById('modalObj').getElementsByTagName('div')[0].style.background = 'rgb(255,255,255)';
	};
	function imgCliq(m,n){
		//alert(m+'\n'+n);
		var modall = document.getElementById('modalObj');
		//var inHtml = document.getElementsByClassName('contactt')[0].innerHTML;
		modall.getElementsByTagName('div')[0].innerHTML += '<img src="images/'+m+'/'+n+m+'.jpg" style="max-height:'+( window.innerHeight - 10)+'px; max-width:'+( window.innerWidth - 30)+'px"/>';
		modall.getElementsByTagName('div')[0].style.padding = '5px';
		modall.getElementsByTagName('div')[0].style.top = '10px;';
		modall.getElementsByTagName('div')[0].style.background = 'rgba(255,255,255,.5);';
		//modall.getElementsByTagName('div')[0].style.maxHeight = ( screen.availHeight - 60)+'px';
		modall.style.display = 'block';
		modall.style.height = window.innerHeight+'px';
	}
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